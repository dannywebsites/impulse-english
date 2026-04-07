import { useEffect, useRef, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';
import { useOptimization, useAnalyzeContent, useRewriteContent } from '@/hooks/useOptimizations';
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
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
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
  RefreshCw,
  ExternalLink,
} from 'lucide-react';

function StatusBadge({ status }) {
  const icons = {
    Idle: Clock,
    Analyzing: Loader2,
    Done: CheckCircle2,
    Rewriting: Loader2,
    Rewritten: CheckCircle2,
    Error: XCircle,
  };

  const colors = {
    Idle: 'bg-blue-500',
    Analyzing: 'bg-yellow-500',
    Done: 'bg-green-500',
    Rewriting: 'bg-yellow-500',
    Rewritten: 'bg-emerald-600',
    Error: 'bg-red-500',
  };

  const labels = {
    Idle: 'Idle',
    Analyzing: 'Analyzing',
    Done: 'Analyzed',
    Rewriting: 'Rewriting',
    Rewritten: 'Rewritten',
    Error: 'Error',
  };

  const Icon = icons[status] || Clock;

  return (
    <Badge className={colors[status]}>
      <Icon className={`mr-1 h-3 w-3 ${status === 'Analyzing' || status === 'Rewriting' ? 'animate-spin' : ''}`} />
      {labels[status] || status}
    </Badge>
  );
}

const ANALYSIS_STEPS = [
  { key: 'scrape', label: 'Scrape' },
  { key: 'keyword_detection', label: 'Keyword' },
  { key: 'serp_research', label: 'Research' },
  { key: 'analysis', label: 'Analysis' },
];

const REWRITE_STEPS = [
  { key: 'rewrite', label: 'Rewrite' },
];

function PipelineProgress({ job, liveStatus }) {
  const isAnalyzing = job.action === 'Analyzing';
  const isRewriting = job.action === 'Rewriting';

  if (!isAnalyzing && !isRewriting) return null;

  const steps = isRewriting ? REWRITE_STEPS : ANALYSIS_STEPS;
  const currentStep = liveStatus?.step || job.currentStep || steps[0].key;
  const currentMessage = liveStatus?.message || 'Processing...';
  const currentStepIndex = steps.findIndex((s) => s.key === currentStep);

  return (
    <Card className="mb-6 border-yellow-500">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-base">
          <Loader2 className="h-4 w-4 animate-spin" />
          {isRewriting ? 'Rewriting Content' : 'Analyzing Content'}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex gap-1">
          {steps.map((step, i) => {
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
                  {isDone ? '\u2713 ' : ''}
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

const proseClasses = 'prose prose-slate max-w-none dark:prose-invert prose-headings:text-foreground prose-p:text-foreground/90 prose-strong:text-foreground prose-li:text-foreground/90 prose-th:text-foreground prose-td:text-foreground/80 prose-table:border-collapse prose-th:border prose-th:border-border prose-th:bg-muted prose-th:px-3 prose-th:py-2 prose-td:border prose-td:border-border prose-td:px-3 prose-td:py-2 prose-blockquote:border-primary prose-hr:border-border';

export default function OptimizeDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const isRunning = useRef(false);

  // Rewrite dialog state
  const [rewriteDialogOpen, setRewriteDialogOpen] = useState(false);
  const [userInstructions, setUserInstructions] = useState('');

  const { data: job, isLoading, error } = useOptimization(id, {
    polling: isRunning.current,
  });

  const analyzeContent = useAnalyzeContent();
  const rewriteContent = useRewriteContent();

  const sseEnabled = job?.action === 'Analyzing' || job?.action === 'Rewriting';
  const { status: liveStatus } = useSSE(id, sseEnabled, { basePath: '/api/optimizations' });

  isRunning.current = job?.action === 'Analyzing' || job?.action === 'Rewriting';

  // Refetch job data when SSE reports step completions
  const prevStepRef = useRef(null);
  useEffect(() => {
    if (!liveStatus) return;
    const { step, status } = liveStatus;

    if (
      status === 'completed' ||
      status === 'failed' ||
      step !== prevStepRef.current
    ) {
      prevStepRef.current = step;
      queryClient.invalidateQueries({ queryKey: ['optimization', id] });
      queryClient.invalidateQueries({ queryKey: ['optimizations'] });
    }
  }, [liveStatus, id, queryClient]);

  const handleBack = () => {
    navigate('/optimize');
  };

  const handleAnalyze = () => {
    analyzeContent.mutate(id, {
      onSuccess: () => toast.success('Analysis started'),
      onError: (err) => toast.error(`Failed: ${err.message}`),
    });
  };

  const handleOpenRewriteDialog = () => {
    setUserInstructions('');
    setRewriteDialogOpen(true);
  };

  const handleSubmitRewrite = () => {
    setRewriteDialogOpen(false);
    rewriteContent.mutate(
      { jobId: id, userInstructions: userInstructions.trim() || null },
      {
        onSuccess: () => toast.success('Rewrite started'),
        onError: (err) => toast.error(`Failed: ${err.message}`),
      }
    );
  };

  const handleCopyContent = (content, label) => {
    if (content) {
      navigator.clipboard.writeText(content);
      toast.success(`${label} copied to clipboard!`);
    }
  };

  const handleExportMarkdown = (content, filename) => {
    if (!content) return;
    const blob = new Blob([content], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${filename}.md`;
    a.click();
    URL.revokeObjectURL(url);
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
              {error?.message || 'Optimization job not found'}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={handleBack}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const keyword = job.targetKeyword || job.detectedKeyword;
  const scrapedMeta = job.scrapedMeta ? JSON.parse(job.scrapedMeta) : null;

  return (
    <div className="container mx-auto py-10 max-w-4xl">
      <div className="mb-6 flex items-center justify-between">
        <Button variant="outline" onClick={handleBack}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
        <div className="flex gap-2">
          {job.action === 'Idle' && (
            <Button onClick={handleAnalyze} disabled={analyzeContent.isPending}>
              <Play className="mr-2 h-4 w-4" />
              Analyze
            </Button>
          )}
          {(job.action === 'Done' || job.action === 'Rewritten') && (
            <Button onClick={handleOpenRewriteDialog} disabled={rewriteContent.isPending}>
              {rewriteContent.isPending ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : job.optimizedContent ? (
                <RefreshCw className="mr-2 h-4 w-4" />
              ) : (
                <Play className="mr-2 h-4 w-4" />
              )}
              {job.optimizedContent ? 'Re-generate Rewrite' : 'Generate Rewrite'}
            </Button>
          )}
          {job.optimizedContent && (
            <>
              <Button variant="outline" onClick={() => handleCopyContent(job.optimizedContent, 'Rewrite')}>
                <Copy className="mr-2 h-4 w-4" />
                Copy Rewrite
              </Button>
              <Button variant="outline" onClick={() => handleExportMarkdown(job.optimizedContent, 'optimized-content')}>
                <Download className="mr-2 h-4 w-4" />
                Export
              </Button>
            </>
          )}
        </div>
      </div>

      {/* Job Info Card */}
      <Card className="mb-6">
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <CardTitle className="text-lg">
                <a
                  href={job.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline flex items-center gap-2"
                >
                  {job.sourceUrl}
                  <ExternalLink className="h-4 w-4 shrink-0" />
                </a>
              </CardTitle>
              {keyword && (
                <CardDescription className="mt-2">
                  Keyword: <span className="font-medium text-foreground">{keyword}</span>
                  {!job.targetKeyword && job.detectedKeyword && (
                    <Badge variant="outline" className="ml-2 text-xs">auto-detected</Badge>
                  )}
                </CardDescription>
              )}
            </div>
            <StatusBadge status={job.action} />
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4 text-sm">
            {job.brand && (
              <div>
                <span className="font-medium">Brand:</span>{' '}
                <button
                  className="text-primary hover:underline"
                  onClick={() => navigate(`/brands/${job.brand.id}`)}
                >
                  {job.brand.name}
                </button>
              </div>
            )}
            {scrapedMeta && (
              <div>
                <span className="font-medium">Word Count:</span> {scrapedMeta.wordCount}
              </div>
            )}
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

      <Tabs defaultValue="original" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="original">Original</TabsTrigger>
          <TabsTrigger value="research">Research</TabsTrigger>
          <TabsTrigger value="analysis">Analysis</TabsTrigger>
          <TabsTrigger value="rewrite">Rewrite</TabsTrigger>
        </TabsList>

        <TabsContent value="original">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Original Content</CardTitle>
                {scrapedMeta && (
                  <span className="text-sm text-muted-foreground">
                    {scrapedMeta.wordCount} words
                  </span>
                )}
              </div>
              {scrapedMeta && (scrapedMeta.title || scrapedMeta.description) && (
                <div className="space-y-1 mt-2">
                  {scrapedMeta.title && (
                    <p className="text-sm">
                      <span className="font-medium">Title:</span> {scrapedMeta.title}
                    </p>
                  )}
                  {scrapedMeta.description && (
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium text-foreground">Description:</span> {scrapedMeta.description}
                    </p>
                  )}
                </div>
              )}
            </CardHeader>
            <CardContent>
              {job.scrapedContent ? (
                <div className={proseClasses}>
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>{job.scrapedContent}</ReactMarkdown>
                </div>
              ) : (
                <p className="text-muted-foreground">Content not scraped yet.</p>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="research">
          <Card>
            <CardHeader>
              <CardTitle>Competitive Research</CardTitle>
            </CardHeader>
            <CardContent>
              {job.researchData ? (
                <div className={proseClasses}>
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>{job.researchData}</ReactMarkdown>
                </div>
              ) : (
                <p className="text-muted-foreground">No research data available yet.</p>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analysis">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Content Audit</CardTitle>
                {job.analysisReport && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleCopyContent(job.analysisReport, 'Analysis report')}
                  >
                    <Copy className="mr-2 h-4 w-4" />
                    Copy
                  </Button>
                )}
              </div>
            </CardHeader>
            <CardContent>
              {job.analysisReport ? (
                <div className={proseClasses}>
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>{job.analysisReport}</ReactMarkdown>
                </div>
              ) : job.action === 'Analyzing' ? (
                <div className="flex items-center gap-3 py-8 justify-center text-muted-foreground">
                  <Loader2 className="h-5 w-5 animate-spin" />
                  <p>Analysis in progress...</p>
                </div>
              ) : (
                <div className="text-center py-8 text-muted-foreground">
                  <p>No analysis available yet.</p>
                  {job.action === 'Idle' && (
                    <p className="text-sm mt-1">Click "Analyze" to start the content audit.</p>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="rewrite">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Optimized Content</CardTitle>
                <div className="flex gap-2">
                  {(job.action === 'Done' || job.action === 'Rewritten') && !job.optimizedContent && (
                    <Button size="sm" onClick={handleOpenRewriteDialog} disabled={rewriteContent.isPending}>
                      {rewriteContent.isPending ? (
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      ) : (
                        <Play className="mr-2 h-4 w-4" />
                      )}
                      Generate Rewrite
                    </Button>
                  )}
                  {job.optimizedContent && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleCopyContent(job.optimizedContent, 'Optimized content')}
                    >
                      <Copy className="mr-2 h-4 w-4" />
                      Copy
                    </Button>
                  )}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              {job.optimizedContent ? (
                <div className={proseClasses}>
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>{job.optimizedContent}</ReactMarkdown>
                </div>
              ) : job.action === 'Rewriting' ? (
                <div className="flex items-center gap-3 py-8 justify-center text-muted-foreground">
                  <Loader2 className="h-5 w-5 animate-spin" />
                  <p>Generating optimized content...</p>
                </div>
              ) : (
                <div className="text-center py-8 text-muted-foreground">
                  <p>No rewrite generated yet.</p>
                  {job.analysisReport && (
                    <p className="text-sm mt-1">
                      Click "Generate Rewrite" to create an optimized version based on the audit.
                    </p>
                  )}
                  {!job.analysisReport && (
                    <p className="text-sm mt-1">Complete the analysis first to enable rewriting.</p>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Rewrite Instructions Dialog */}
      <Dialog open={rewriteDialogOpen} onOpenChange={setRewriteDialogOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>Generate Optimized Rewrite</DialogTitle>
            <DialogDescription>
              Add any specific instructions or notes for the rewrite. Leave blank to use the analysis recommendations as-is.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <Label htmlFor="instructions" className="text-sm font-medium">
              Your Instructions (optional)
            </Label>
            <Textarea
              id="instructions"
              placeholder="e.g., Focus more on the benefits section, keep the existing intro, add more statistics, tone down the sales language..."
              value={userInstructions}
              onChange={(e) => setUserInstructions(e.target.value)}
              className="mt-2 min-h-[120px]"
            />
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setRewriteDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleSubmitRewrite} disabled={rewriteContent.isPending}>
              {rewriteContent.isPending ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Play className="mr-2 h-4 w-4" />
              )}
              Start Rewrite
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
