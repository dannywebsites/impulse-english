import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCreateJob, useGenerateContent, useCreateBatch, useGenerateBatch } from '@/hooks/useJobs';
import { useBrands } from '@/hooks/useBrands';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { toast } from 'sonner';
import { Link } from 'react-router-dom';
import { ArrowLeft, Loader2, Info } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function NewJob() {
  const navigate = useNavigate();
  const createJob = useCreateJob();
  const generateContent = useGenerateContent();
  const createBatch = useCreateBatch();
  const generateBatch = useGenerateBatch();
  const { data: brands } = useBrands();

  const [mode, setMode] = useState('single'); // 'single' or 'batch'

  const [formData, setFormData] = useState({
    brandId: '',
    topic: '',
    keywords: '',
    locationCode: 'us',
    generateImage: true,
    generateInblogImages: true,
    imageQuality: '1K',
    imageDimensions: '3:2',
  });

  // Batch-specific state
  const [batchTopics, setBatchTopics] = useState('');
  const [topicKeywords, setTopicKeywords] = useState({}); // { index: "custom keywords" }

  // Parse batch topics from textarea
  const parsedTopics = useMemo(() => {
    return batchTopics
      .split('\n')
      .map((line) => line.trim())
      .filter((line) => line.length > 0);
  }, [batchTopics]);

  const handleTopicKeywordsChange = (index, value) => {
    setTopicKeywords((prev) => ({ ...prev, [index]: value }));
  };

  // Pre-populate form defaults from selected brand
  const handleBrandChange = (brandId) => {
    setFormData((prev) => ({ ...prev, brandId }));
    const brand = brands?.find((b) => b.id === brandId);
    if (brand) {
      setFormData((prev) => ({
        ...prev,
        brandId,
        imageQuality: brand.defaultImageQuality || prev.imageQuality,
        imageDimensions: brand.defaultImageDimensions || prev.imageDimensions,
      }));
    }
  };

  const [createAndGenerate, setCreateAndGenerate] = useState(false);

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.brandId) {
      toast.error('Please select a brand');
      return;
    }

    if (mode === 'single') {
      if (!formData.topic.trim()) {
        toast.error('Please enter a topic');
        return;
      }

      try {
        const result = await createJob.mutateAsync(formData);

        if (createAndGenerate) {
          toast.success('Job created! Starting content generation...');
          await generateContent.mutateAsync(result.id);
          navigate(`/jobs/${result.id}`);
        } else {
          toast.success('Job created successfully');
          navigate('/');
        }
      } catch (error) {
        toast.error('Failed to create job: ' + error.message);
      }
    } else {
      // Batch mode
      if (parsedTopics.length === 0) {
        toast.error('Please enter at least one topic');
        return;
      }
      if (parsedTopics.length > 20) {
        toast.error('Maximum 20 topics per batch');
        return;
      }

      try {
        const topics = parsedTopics.map((topic, i) => ({
          topic,
          keywords: topicKeywords[i]?.trim() || '',
        }));

        const result = await createBatch.mutateAsync({
          brandId: formData.brandId,
          topics,
          locationCode: formData.locationCode,
          generateImage: formData.generateImage,
          generateInblogImages: formData.generateInblogImages,
          imageQuality: formData.imageQuality,
          imageDimensions: formData.imageDimensions,
        });

        if (createAndGenerate) {
          toast.success(`${parsedTopics.length} jobs created! Queueing for generation...`);
          await generateBatch.mutateAsync(result.batchId);
        } else {
          toast.success(`${parsedTopics.length} jobs created`);
        }
        navigate('/');
      } catch (error) {
        toast.error('Failed to create batch: ' + error.message);
      }
    }
  };

  const isSubmitting =
    createJob.isPending ||
    generateContent.isPending ||
    createBatch.isPending ||
    generateBatch.isPending;

  const handleBack = () => {
    navigate('/');
  };

  const estimateCost = () => {
    let low = 0.12;
    let high = 0.18;

    const is4K = formData.imageQuality === '4K';
    const imgCost = is4K ? 0.30 : 0.15;

    if (formData.generateInblogImages) {
      low += imgCost * 3;
      high += imgCost * 4;
    }
    if (formData.generateImage) {
      low += imgCost;
      high += imgCost;
    }

    const count = mode === 'batch' ? Math.max(parsedTopics.length, 1) : 1;
    return {
      low: (low * count).toFixed(2),
      high: (high * count).toFixed(2),
      perArticle: count > 1,
    };
  };

  const cost = estimateCost();

  const submitLabel = () => {
    if (mode === 'batch') {
      const n = parsedTopics.length;
      if (createAndGenerate) return `Create & Generate ${n} Job${n !== 1 ? 's' : ''}`;
      return `Create ${n} Job${n !== 1 ? 's' : ''}`;
    }
    return createAndGenerate ? 'Create & Generate' : 'Create Job';
  };

  return (
    <div className="container mx-auto py-10 max-w-2xl">
      <div className="mb-6">
        <Button variant="outline" onClick={handleBack}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Create Content</CardTitle>
          <CardDescription>
            Create one or multiple SEO content generation jobs
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Brand Selector */}
            <div className="space-y-2">
              <Label htmlFor="brand">Brand *</Label>
              {brands && brands.length === 0 ? (
                <div className="p-4 bg-muted rounded-lg text-sm text-muted-foreground">
                  No brands yet.{' '}
                  <Link to="/brands/new" className="text-primary underline">
                    Create a brand
                  </Link>{' '}
                  first.
                </div>
              ) : (
                <Select
                  value={formData.brandId}
                  onValueChange={handleBrandChange}
                >
                  <SelectTrigger id="brand">
                    <SelectValue placeholder="Select a brand..." />
                  </SelectTrigger>
                  <SelectContent>
                    {brands?.map((brand) => (
                      <SelectItem key={brand.id} value={brand.id}>
                        {brand.name}
                        {brand.companyName ? ` (${brand.companyName})` : ''}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            </div>

            {/* Mode Toggle */}
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setMode('single')}
                className={cn(
                  'text-sm font-medium px-3 py-1.5 rounded-md transition-colors',
                  mode === 'single'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground hover:text-foreground'
                )}
              >
                Single Article
              </button>
              <button
                type="button"
                onClick={() => setMode('batch')}
                className={cn(
                  'text-sm font-medium px-3 py-1.5 rounded-md transition-colors',
                  mode === 'batch'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground hover:text-foreground'
                )}
              >
                Batch
              </button>
            </div>

            {mode === 'single' ? (
              <>
                {/* Topic */}
                <div className="space-y-2">
                  <Label htmlFor="topic">Topic *</Label>
                  <Input
                    id="topic"
                    placeholder="e.g., Best coffee makers for home use"
                    value={formData.topic}
                    onChange={(e) => handleChange('topic', e.target.value)}
                    required
                  />
                </div>

                {/* Keywords */}
                <div className="space-y-2">
                  <Label htmlFor="keywords">Keywords</Label>
                  <Textarea
                    id="keywords"
                    placeholder="e.g., coffee maker, drip coffee, espresso machine (comma-separated)"
                    value={formData.keywords}
                    onChange={(e) => handleChange('keywords', e.target.value)}
                    rows={3}
                  />
                  <p className="text-sm text-muted-foreground">
                    Enter target keywords separated by commas
                  </p>
                </div>
              </>
            ) : (
              <>
                {/* Batch Topics */}
                <div className="space-y-2">
                  <Label htmlFor="batchTopics">Topics (one per line) *</Label>
                  <Textarea
                    id="batchTopics"
                    placeholder={"Best coffee makers for home use\nHow to brew the perfect espresso\nFrench press vs pour over coffee"}
                    value={batchTopics}
                    onChange={(e) => setBatchTopics(e.target.value)}
                    rows={6}
                  />
                  <p className="text-sm text-muted-foreground">
                    {parsedTopics.length}/20 topics
                    {parsedTopics.length > 20 && (
                      <span className="text-red-500 ml-2">Maximum 20 topics per batch</span>
                    )}
                  </p>
                </div>

                {/* Per-topic keywords table */}
                {parsedTopics.length > 0 && (
                  <div className="space-y-2">
                    <Label>Topics & Keywords</Label>
                    <div className="border rounded-lg overflow-hidden">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead className="w-10">#</TableHead>
                            <TableHead className="w-[45%]">Topic</TableHead>
                            <TableHead>Keywords</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {parsedTopics.map((topic, i) => (
                            <TableRow key={i}>
                              <TableCell className="text-muted-foreground text-xs">{i + 1}</TableCell>
                              <TableCell className="font-medium text-sm py-2">{topic}</TableCell>
                              <TableCell className="py-2">
                                <Input
                                  value={topicKeywords[i] ?? ''}
                                  onChange={(e) => handleTopicKeywordsChange(i, e.target.value)}
                                  placeholder={topic}
                                  className="h-8 text-sm"
                                />
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Leave keywords blank to use the topic as the keyword
                    </p>
                  </div>
                )}
              </>
            )}

            {/* Image Settings */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Image Settings</h3>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="generateImage">Generate Thumbnail</Label>
                  <p className="text-sm text-muted-foreground">
                    Create a featured image for the article
                  </p>
                </div>
                <Switch
                  id="generateImage"
                  checked={formData.generateImage}
                  onCheckedChange={(checked) => handleChange('generateImage', checked)}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="generateInblogImages">Generate In-Blog Images</Label>
                  <p className="text-sm text-muted-foreground">
                    Create 3-4 images to embed in the content
                  </p>
                </div>
                <Switch
                  id="generateInblogImages"
                  checked={formData.generateInblogImages}
                  onCheckedChange={(checked) => handleChange('generateInblogImages', checked)}
                />
              </div>

              {(formData.generateImage || formData.generateInblogImages) && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="imageQuality">Image Quality</Label>
                    <Select
                      value={formData.imageQuality}
                      onValueChange={(value) => handleChange('imageQuality', value)}
                    >
                      <SelectTrigger id="imageQuality">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1K">1K (Fast)</SelectItem>
                        <SelectItem value="2K">2K (Balanced)</SelectItem>
                        <SelectItem value="4K">4K (High Quality)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="imageDimensions">Image Dimensions</Label>
                    <Select
                      value={formData.imageDimensions}
                      onValueChange={(value) => handleChange('imageDimensions', value)}
                    >
                      <SelectTrigger id="imageDimensions">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="16:9">16:9 (Widescreen)</SelectItem>
                        <SelectItem value="3:2">3:2 (Standard)</SelectItem>
                        <SelectItem value="4:3">4:3 (Classic)</SelectItem>
                        <SelectItem value="1:1">1:1 (Square)</SelectItem>
                        <SelectItem value="9:16">9:16 (Portrait)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </>
              )}
            </div>

            {/* Create and Generate Toggle */}
            <div className="flex items-center space-x-2 p-4 bg-muted rounded-lg">
              <Switch
                id="createAndGenerate"
                checked={createAndGenerate}
                onCheckedChange={setCreateAndGenerate}
              />
              <div className="space-y-0.5">
                <Label htmlFor="createAndGenerate" className="cursor-pointer">
                  {mode === 'batch' ? 'Create & Queue All for Generation' : 'Create & Generate Immediately'}
                </Label>
                <p className="text-sm text-muted-foreground">
                  {mode === 'batch'
                    ? 'Queue all jobs for sequential generation after creating'
                    : 'Start content generation right after creating the job'}
                </p>
              </div>
            </div>

            {/* Submit Buttons */}
            <div className="flex gap-3">
              <Button
                type="button"
                variant="outline"
                onClick={handleBack}
                disabled={isSubmitting}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting || (mode === 'batch' && (parsedTopics.length === 0 || parsedTopics.length > 20))}
                className="flex-1"
              >
                {isSubmitting && (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                )}
                {submitLabel()}
              </Button>
            </div>

            {/* Cost Estimate */}
            <div className="flex items-start gap-2 text-xs text-muted-foreground">
              <Info className="h-3.5 w-3.5 mt-0.5 shrink-0" />
              <span>
                Estimated API cost: <span className="font-medium text-foreground">${cost.low} – ${cost.high}</span>
                {cost.perArticle && ` (${parsedTopics.length} articles)`}
                {(formData.generateImage || formData.generateInblogImages) && formData.imageQuality === '4K' && (
                  <> (4K images cost 2x)</>
                )}
              </span>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
