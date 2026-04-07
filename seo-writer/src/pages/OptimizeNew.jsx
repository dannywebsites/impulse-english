import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCreateOptimization, useAnalyzeContent } from '@/hooks/useOptimizations';
import { useBrands } from '@/hooks/useBrands';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
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
import { toast } from 'sonner';
import { Link } from 'react-router-dom';
import { ArrowLeft, Loader2 } from 'lucide-react';

export default function OptimizeNew() {
  const navigate = useNavigate();
  const createOptimization = useCreateOptimization();
  const analyzeContent = useAnalyzeContent();
  const { data: brands } = useBrands();

  const [formData, setFormData] = useState({
    brandId: '',
    sourceUrl: '',
    targetKeyword: '',
  });

  const [createAndAnalyze, setCreateAndAnalyze] = useState(true);

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

    if (!formData.sourceUrl.trim()) {
      toast.error('Please enter a URL');
      return;
    }

    try {
      const result = await createOptimization.mutateAsync({
        brandId: formData.brandId,
        sourceUrl: formData.sourceUrl.trim(),
        targetKeyword: formData.targetKeyword.trim() || null,
      });

      if (createAndAnalyze) {
        toast.success('Optimization job created! Starting analysis...');
        await analyzeContent.mutateAsync(result.id);
        navigate(`/optimize/${result.id}`);
      } else {
        toast.success('Optimization job created');
        navigate('/optimize');
      }
    } catch (error) {
      toast.error('Failed to create optimization job: ' + error.message);
    }
  };

  const isSubmitting = createOptimization.isPending || analyzeContent.isPending;

  return (
    <div className="container mx-auto py-10 max-w-2xl">
      <div className="mb-6">
        <Button variant="outline" onClick={() => navigate('/optimize')}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Optimize Existing Content</CardTitle>
          <CardDescription>
            Analyze an existing blog post and get actionable SEO improvement recommendations
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
                  onValueChange={(value) => handleChange('brandId', value)}
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

            {/* Source URL */}
            <div className="space-y-2">
              <Label htmlFor="sourceUrl">Page URL *</Label>
              <Input
                id="sourceUrl"
                type="url"
                placeholder="https://example.com/blog/your-article"
                value={formData.sourceUrl}
                onChange={(e) => handleChange('sourceUrl', e.target.value)}
                required
              />
              <p className="text-sm text-muted-foreground">
                The URL of the existing blog post you want to optimize
              </p>
            </div>

            {/* Target Keyword */}
            <div className="space-y-2">
              <Label htmlFor="targetKeyword">Target Keyword</Label>
              <Input
                id="targetKeyword"
                placeholder="e.g., best coffee makers"
                value={formData.targetKeyword}
                onChange={(e) => handleChange('targetKeyword', e.target.value)}
              />
              <p className="text-sm text-muted-foreground">
                Leave blank to auto-detect the primary keyword from your content
              </p>
            </div>

            {/* Create and Analyze Toggle */}
            <div className="flex items-center space-x-2 p-4 bg-muted rounded-lg">
              <Switch
                id="createAndAnalyze"
                checked={createAndAnalyze}
                onCheckedChange={setCreateAndAnalyze}
              />
              <div className="space-y-0.5">
                <Label htmlFor="createAndAnalyze" className="cursor-pointer">
                  Create & Analyze Immediately
                </Label>
                <p className="text-sm text-muted-foreground">
                  Start the content analysis right after creating the job
                </p>
              </div>
            </div>

            {/* Submit Buttons */}
            <div className="flex gap-3">
              <Button
                type="button"
                variant="outline"
                onClick={() => navigate('/optimize')}
                disabled={isSubmitting}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="flex-1"
              >
                {isSubmitting && (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                )}
                {createAndAnalyze ? 'Create & Analyze' : 'Create Job'}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
