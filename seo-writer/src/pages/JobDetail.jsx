import { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';
import { useJob, useGenerateContent, useGenerateLinkedIn, useGenerateYouTube } from '@/hooks/useJobs';
import { useSSE } from '@/hooks/useSSE';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { toast } from 'sonner';
import {
  Loader2,
  ArrowLeft,
  Play,
  Copy,
  Download,
  CheckCircle2,
  XCircle,
  Clock,
  Linkedin,
  Youtube,
  RefreshCw,
  Save,
} from 'lucide-react';

function StatusBadge({ status }) {
  const icons = {
    Idle: Clock,
    Running: Loader2,
    Done: CheckCircle2,
    Error: XCircle,
  };

  const colors = {
    Idle: 'bg-blue-500',
    Running: 'bg-yellow-500',
    Done: 'bg-green-500',
    Error: 'bg-red-500',
  };

  const Icon = icons[status] || Clock;

  return (
    <Badge className={colors[status]}>
      <Icon className={`mr-1 h-3 w-3 ${status === 'Running' ? 'animate-spin' : ''}`} />
      {status}
    </Badge>
  );
}

const PIPELINE_STEPS = [
  { key: 'research', label: 'Research' },
  { key: 'images', label: 'In-Blog Images' },
  { key: 'writing', label: 'Writing' },
  { key: 'meta', label: 'SEO Metadata' },
  { key: 'thumbnail', label: 'Thumbnail' },
];

function PipelineProgress({ job, liveStatus }) {
  if (job.action !== 'Running') return null;

  const currentStep = liveStatus?.step || job.currentStep || 'research';
  const currentMessage = liveStatus?.message || 'Processing...';
  const currentStepIndex = PIPELINE_STEPS.findIndex((s) => s.key === currentStep);

  return (
    <Card className="mb-6 border-yellow-500">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-base">
          <Loader2 className="h-4 w-4 animate-spin" />
          Pipeline Running
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex gap-1">
          {PIPELINE_STEPS.map((step, i) => {
            const isActive = step.key === currentStep;
            const isDone = i < currentStepIndex;
            return (
              <div key={step.key} className="flex-1">
                <div
                  className={`h-1.5 rounded-full transition-colors ${
                    isDone
                      ? 'bg-green-500'
                      : isActive
                        ? 'bg-yellow-500 animate-pulse'
                        : 'bg-muted'
                  }`}
                />
                <p
                  className={`text-[10px] mt-1 text-center ${
                    isActive
                      ? 'text-foreground font-medium'
                      : isDone
                        ? 'text-green-600'
                        : 'text-muted-foreground'
                  }`}
                >
                  {isDone ? '✓ ' : ''}
                  {step.label}
                </p>
              </div>
            );
          })}
        </div>
        <p className="text-sm text-muted-foreground">{currentMessage}</p>
      </CardContent>
    </Card>
  );
}

export default function JobDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const isRunning = useRef(false);
  const { data: job, isLoading, error } = useJob(id, {
    polling: isRunning.current,
  });
  const generateContent = useGenerateContent();
  const generateLinkedIn = useGenerateLinkedIn();
  const generateYouTube = useGenerateYouTube();
  const [isRepurposing, setIsRepurposing] = useState({ linkedin: false, youtube: false });
  const prevLinkedInRef = useRef(null);
  const prevYouTubeRef = useRef(null);
  const sseEnabled = job?.action === 'Running' || isRepurposing.linkedin || isRepurposing.youtube;
  const { status: liveStatus, isConnected } = useSSE(id, sseEnabled);

  // Track running state for polling (include repurposing)
  isRunning.current = job?.action === 'Running' || isRepurposing.linkedin || isRepurposing.youtube;

  // Detect when repurposed content finishes generating (success or error via SSE)
  useEffect(() => {
    if (isRepurposing.linkedin && job?.linkedinPost && job.linkedinPost !== prevLinkedInRef.current) {
      setIsRepurposing((prev) => ({ ...prev, linkedin: false }));
      prevLinkedInRef.current = job.linkedinPost;
      toast.success('LinkedIn post generated!');
    }
    if (isRepurposing.youtube && job?.youtubeScript && job.youtubeScript !== prevYouTubeRef.current) {
      setIsRepurposing((prev) => ({ ...prev, youtube: false }));
      prevYouTubeRef.current = job.youtubeScript;
      toast.success('YouTube script generated!');
    }
  }, [job?.linkedinPost, job?.youtubeScript, isRepurposing]);

  // Detect repurposing errors via SSE
  useEffect(() => {
    if (!liveStatus) return;
    const { step, status } = liveStatus;
    if (status === 'error' || status === 'failed') {
      if (step === 'linkedin_post' && isRepurposing.linkedin) {
        setIsRepurposing((prev) => ({ ...prev, linkedin: false }));
        toast.error('LinkedIn generation failed. Check your API key and try again.');
      }
      if (step === 'youtube_script' && isRepurposing.youtube) {
        setIsRepurposing((prev) => ({ ...prev, youtube: false }));
        toast.error('YouTube script generation failed. Check your API key and try again.');
      }
    }
  }, [liveStatus, isRepurposing]);

  // Refetch job data when SSE reports step completions or done/error
  const prevStepRef = useRef(null);
  useEffect(() => {
    if (!liveStatus) return;
    const { step, status } = liveStatus;

    // Refetch when a step completes or the pipeline finishes
    if (
      status === 'completed' ||
      status === 'failed' ||
      step !== prevStepRef.current
    ) {
      prevStepRef.current = step;
      queryClient.invalidateQueries({ queryKey: ['job', id] });
      queryClient.invalidateQueries({ queryKey: ['jobs'] });
    }
  }, [liveStatus, id, queryClient]);

  const handleBack = () => {
    navigate('/');
  };

  const handleGenerate = () => {
    generateContent.mutate(id);
  };

  const handleCopyContent = () => {
    if (job?.content) {
      navigator.clipboard.writeText(job.content);
      toast.success('Content copied to clipboard!');
    }
  };

  const handleExportHTML = () => {
    if (!job?.content) return;

    const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>${job.metatitle || job.topic}</title>
  <meta name="description" content="${job.metadescription || ''}">
</head>
<body>
  ${job.content}
</body>
</html>`;

    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${job.slug || 'content'}.html`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleSaveToBlog = async () => {
    try {
      const res = await fetch(`/api/jobs/${id}/save-to-blog`, { method: 'POST' });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      toast.success(`Saved to blog folder: ${data.filename}`);
    } catch (error) {
      toast.error(`Save failed: ${error.message}`);
    }
  };

  const handleGenerateLinkedIn = () => {
    setIsRepurposing((prev) => ({ ...prev, linkedin: true }));
    prevLinkedInRef.current = job?.linkedinPost || null;
    generateLinkedIn.mutate(id, {
      onError: () => {
        setIsRepurposing((prev) => ({ ...prev, linkedin: false }));
        toast.error('Failed to generate LinkedIn post');
      },
    });
  };

  const handleGenerateYouTube = () => {
    setIsRepurposing((prev) => ({ ...prev, youtube: true }));
    prevYouTubeRef.current = job?.youtubeScript || null;
    generateYouTube.mutate(id, {
      onError: () => {
        setIsRepurposing((prev) => ({ ...prev, youtube: false }));
        toast.error('Failed to generate YouTube script');
      },
    });
  };

  if (isLoading) {
    return (
      <div className="container mx-auto py-10 max-w-4xl flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  if (error || !job) {
    return (
      <div className="container mx-auto py-10 max-w-4xl">
        <Card>
          <CardHeader>
            <CardTitle>Error</CardTitle>
            <CardDescription className="text-red-500">
              {error?.message || 'Job not found'}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={handleBack}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Dashboard
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const inBlogImages = job.inBlogImages ? JSON.parse(job.inBlogImages) : [];

  return (
    <div className="container mx-auto py-10 max-w-4xl">
      <div className="mb-6 flex items-center justify-between">
        <Button variant="outline" onClick={handleBack}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
        <div className="flex gap-2">
          {job.action === 'Idle' && (
            <Button onClick={handleGenerate} disabled={generateContent.isPending}>
              <Play className="mr-2 h-4 w-4" />
              Generate Content
            </Button>
          )}
          {job.content && (
            <>
              <Button variant="outline" onClick={handleCopyContent}>
                <Copy className="mr-2 h-4 w-4" />
                Copy
              </Button>
              <Button variant="outline" onClick={handleExportHTML}>
                <Download className="mr-2 h-4 w-4" />
                Export HTML
              </Button>
              <Button variant="outline" onClick={handleSaveToBlog}>
                <Save className="mr-2 h-4 w-4" />
                Save to Blog
              </Button>
            </>
          )}
        </div>
      </div>

      <Card className="mb-6">
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <CardTitle className="text-2xl">{job.topic}</CardTitle>
              <CardDescription className="mt-2">{job.keywords}</CardDescription>
            </div>
            <StatusBadge status={job.action} />
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4 text-sm">
            {job.brand && (
              <div className="col-span-2">
                <span className="font-medium">Brand:</span>{' '}
                <button
                  className="text-primary hover:underline"
                  onClick={() => navigate(`/brands/${job.brand.id}`)}
                >
                  {job.brand.name}
                  {job.brand.companyName ? ` (${job.brand.companyName})` : ''}
                </button>
              </div>
            )}
            <div>
              <span className="font-medium">Location:</span> {job.locationCode}
            </div>
            <div>
              <span className="font-medium">Generate Thumbnail:</span>{' '}
              {job.generateImage ? 'Yes' : 'No'}
            </div>
            <div>
              <span className="font-medium">Generate In-blog Images:</span>{' '}
              {job.generateInblogImages ? 'Yes' : 'No'}
            </div>
            <div className="col-span-2">
              <span className="font-medium">Created:</span>{' '}
              {new Date(job.createdAt).toLocaleString()}
            </div>
          </div>
          {job.errorMessage && (
            <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded text-red-700 text-sm">
              <strong>Error:</strong> {job.errorMessage}
            </div>
          )}
        </CardContent>
      </Card>

      <PipelineProgress job={job} liveStatus={liveStatus} />

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-7">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="research">Research</TabsTrigger>
          <TabsTrigger value="content">Content</TabsTrigger>
          <TabsTrigger value="seo">SEO</TabsTrigger>
          <TabsTrigger value="images">Images</TabsTrigger>
          <TabsTrigger value="linkedin">LinkedIn</TabsTrigger>
          <TabsTrigger value="youtube">YouTube</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <Card>
            <CardHeader>
              <CardTitle>Job Overview</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Topic</h3>
                <p>{job.topic}</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Keywords</h3>
                <p>{job.keywords}</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Current Step</h3>
                <p>{liveStatus?.step || job.currentStep || 'Not started'}</p>
                {liveStatus?.message && job.action === 'Running' && (
                  <p className="text-sm text-muted-foreground mt-1">{liveStatus.message}</p>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="research">
          <Card>
            <CardHeader>
              <CardTitle>Research Data</CardTitle>
            </CardHeader>
            <CardContent>
              {job.researchData ? (
                <div className="prose prose-slate max-w-none dark:prose-invert prose-headings:text-foreground prose-p:text-foreground/90 prose-strong:text-foreground prose-li:text-foreground/90 prose-th:text-foreground prose-td:text-foreground/80 prose-table:border-collapse prose-th:border prose-th:border-border prose-th:bg-muted prose-th:px-3 prose-th:py-2 prose-td:border prose-td:border-border prose-td:px-3 prose-td:py-2 prose-blockquote:border-primary prose-hr:border-border">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>{job.researchData}</ReactMarkdown>
                </div>
              ) : (
                <p className="text-muted-foreground">No research data available yet.</p>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="content">
          <Card>
            <CardHeader>
              <CardTitle>Generated Content</CardTitle>
            </CardHeader>
            <CardContent>
              {job.content ? (
                <div className="prose prose-slate max-w-none dark:prose-invert prose-headings:text-foreground prose-p:text-foreground/90 prose-strong:text-foreground prose-li:text-foreground/90 prose-th:text-foreground prose-td:text-foreground/80 prose-table:border-collapse prose-th:border prose-th:border-border prose-th:bg-muted prose-th:px-3 prose-th:py-2 prose-td:border prose-td:border-border prose-td:px-3 prose-td:py-2 prose-blockquote:border-primary prose-hr:border-border">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>{job.content}</ReactMarkdown>
                </div>
              ) : (
                <p className="text-muted-foreground">No content generated yet.</p>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="seo">
          <Card>
            <CardHeader>
              <CardTitle>SEO Metadata</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Meta Title</h3>
                <p className="text-sm">{job.metatitle || 'Not generated yet'}</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Meta Description</h3>
                <p className="text-sm">{job.metadescription || 'Not generated yet'}</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Slug</h3>
                <p className="text-sm font-mono">{job.slug || 'Not generated yet'}</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="images">
          <div className="space-y-6">
            {job.thumbnailUrl && (
              <Card>
                <CardHeader>
                  <CardTitle>Thumbnail</CardTitle>
                </CardHeader>
                <CardContent>
                  <img
                    src={job.thumbnailUrl}
                    alt="Thumbnail"
                    className="max-w-md rounded-lg mb-4"
                  />
                  {job.thumbnailPrompt && (
                    <div>
                      <h4 className="font-semibold mb-2 text-sm">Prompt:</h4>
                      <p className="text-sm text-muted-foreground">{job.thumbnailPrompt}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            )}

            {inBlogImages.length > 0 ? (
              <Card>
                <CardHeader>
                  <CardTitle>In-Blog Images</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {inBlogImages.map((img, index) => (
                      <div key={index} className="space-y-2">
                        <img
                          src={img.url}
                          alt={img.alt_text}
                          className="w-full rounded-lg"
                        />
                        <div className="text-sm">
                          <p className="font-semibold">Alt Text:</p>
                          <p className="text-muted-foreground">{img.alt_text}</p>
                        </div>
                        {img.caption && (
                          <div className="text-sm">
                            <p className="font-semibold">Caption:</p>
                            <p className="text-muted-foreground">{img.caption}</p>
                          </div>
                        )}
                        {img.placement && (
                          <div className="text-sm">
                            <p className="font-semibold">Placement:</p>
                            <p className="text-muted-foreground">{img.placement}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardHeader>
                  <CardTitle>In-Blog Images</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">No in-blog images generated yet.</p>
                </CardContent>
              </Card>
            )}
          </div>
        </TabsContent>

        <TabsContent value="linkedin">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Linkedin className="h-5 w-5" />
                  LinkedIn / Twitter Post
                </CardTitle>
                <div className="flex gap-2">
                  {job.action === 'Done' && (
                    <Button
                      size="sm"
                      onClick={handleGenerateLinkedIn}
                      disabled={isRepurposing.linkedin}
                    >
                      {isRepurposing.linkedin ? (
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      ) : job.linkedinPost ? (
                        <RefreshCw className="mr-2 h-4 w-4" />
                      ) : (
                        <Play className="mr-2 h-4 w-4" />
                      )}
                      {isRepurposing.linkedin
                        ? 'Generating...'
                        : job.linkedinPost
                          ? 'Regenerate'
                          : 'Generate'}
                    </Button>
                  )}
                  {job.linkedinPost && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        navigator.clipboard.writeText(job.linkedinPost);
                        toast.success('LinkedIn post copied!');
                      }}
                    >
                      <Copy className="mr-2 h-4 w-4" />
                      Copy
                    </Button>
                  )}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              {isRepurposing.linkedin ? (
                <div className="flex items-center gap-3 py-8 justify-center text-muted-foreground">
                  <Loader2 className="h-5 w-5 animate-spin" />
                  <p>Generating LinkedIn post...</p>
                </div>
              ) : job.linkedinPost ? (
                <div className="prose prose-slate max-w-none dark:prose-invert whitespace-pre-wrap">
                  {job.linkedinPost}
                </div>
              ) : (
                <div className="text-center py-8 text-muted-foreground">
                  <Linkedin className="h-10 w-10 mx-auto mb-3 opacity-30" />
                  <p>No LinkedIn post generated yet.</p>
                  {job.action === 'Done' && (
                    <p className="text-sm mt-1">
                      Click &quot;Generate&quot; to create one from your article.
                    </p>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="youtube">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Youtube className="h-5 w-5" />
                  YouTube Video Script
                </CardTitle>
                <div className="flex gap-2">
                  {job.action === 'Done' && (
                    <Button
                      size="sm"
                      onClick={handleGenerateYouTube}
                      disabled={isRepurposing.youtube}
                    >
                      {isRepurposing.youtube ? (
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      ) : job.youtubeScript ? (
                        <RefreshCw className="mr-2 h-4 w-4" />
                      ) : (
                        <Play className="mr-2 h-4 w-4" />
                      )}
                      {isRepurposing.youtube
                        ? 'Generating...'
                        : job.youtubeScript
                          ? 'Regenerate'
                          : 'Generate'}
                    </Button>
                  )}
                  {job.youtubeScript && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        navigator.clipboard.writeText(job.youtubeScript);
                        toast.success('YouTube script copied!');
                      }}
                    >
                      <Copy className="mr-2 h-4 w-4" />
                      Copy
                    </Button>
                  )}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              {isRepurposing.youtube ? (
                <div className="flex items-center gap-3 py-8 justify-center text-muted-foreground">
                  <Loader2 className="h-5 w-5 animate-spin" />
                  <p>Generating YouTube script...</p>
                </div>
              ) : job.youtubeScript ? (
                <div className="prose prose-slate max-w-none dark:prose-invert prose-headings:text-foreground prose-p:text-foreground/90 prose-strong:text-foreground prose-li:text-foreground/90">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>{job.youtubeScript}</ReactMarkdown>
                </div>
              ) : (
                <div className="text-center py-8 text-muted-foreground">
                  <Youtube className="h-10 w-10 mx-auto mb-3 opacity-30" />
                  <p>No YouTube script generated yet.</p>
                  {job.action === 'Done' && (
                    <p className="text-sm mt-1">
                      Click &quot;Generate&quot; to create one from your article.
                    </p>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
