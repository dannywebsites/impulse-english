import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  useBrand,
  useCreateBrand,
  useUpdateBrand,
  useConnectBrandSitemap,
  useRefreshBrandSitemap,
  useDisconnectBrandSitemap,
  useWritingSamples,
  useCreateWritingSample,
  useUpdateWritingSample,
  useDeleteWritingSample,
} from '@/hooks/useBrands';
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
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { toast } from 'sonner';
import {
  Loader2,
  Save,
  FileText,
  Building2,
  Mic2,
  Link2,
  Image,
  SlidersHorizontal,
  Globe,
  Check,
  CheckCircle2,
  RefreshCw,
  Unlink,
  Plus,
  Trash2,
  Repeat2,
  ArrowLeft,
  Pencil,
} from 'lucide-react';

// --- Length presets ---
const LENGTH_PRESETS = [
  { value: 'short', label: 'Short', words: '~500 words', description: 'Quick overview or summary' },
  { value: 'standard', label: 'Standard', words: '~1,500 words', description: 'Balanced depth and readability' },
  { value: 'detailed', label: 'Detailed', words: '~2,500 words', description: 'In-depth coverage' },
  { value: 'long', label: 'Long', words: '~3,500 words', description: 'Comprehensive long-form' },
  { value: 'auto', label: 'Smart Auto', words: 'AI decides', description: 'Length based on topic complexity' },
];

// --- Brand mention options ---
const BRAND_MENTION_OPTIONS = [
  { value: 'subtle', label: 'Subtle', description: 'Minimal brand references' },
  { value: 'moderate', label: 'Moderate', description: 'Natural brand integration' },
  { value: 'prominent', label: 'Prominent', description: 'Strong brand presence throughout' },
];


// --- Research depth options ---
const RESEARCH_DEPTH_OPTIONS = [
  { value: 'light', label: 'Light', description: '2-3 competitors, faster generation' },
  { value: 'standard', label: 'Standard', description: '5-7 competitors, balanced' },
  { value: 'deep', label: 'Deep', description: '7-10 competitors, thorough analysis' },
];

// --- Links per article options ---
const LINKS_PER_ARTICLE_OPTIONS = [
  { value: 'minimal', label: 'Minimal', description: '1-2 internal links per article' },
  { value: 'light', label: 'Light', description: '3-4 internal links per article' },
  { value: 'balanced', label: 'Balanced', description: '5-7 links (Recommended)' },
  { value: 'rich', label: 'Rich', description: '8-12 links for maximum interlinking' },
];

const DEFAULT_FORM = {
  name: '',
  articleLength: 'auto',
  customWordCount: null,
  language: 'English',
  companyName: '',
  companyDescription: '',
  uniqueValue: '',
  targetAudience: '',
  brandMentionLevel: 'subtle',
  productsServices: '',
  socialProof: '',
  voicePreset: 'natural',
  customVoiceSample: '',
  bannedWords: '',
  sitemapUrl: '',
  linksPerArticle: 'balanced',
  customLinkRules: '',
  sitemapPageCount: 0,
  sitemapLastSync: null,
  defaultImageQuality: '1K',
  defaultImageDimensions: '3:2',
  researchDepth: 'standard',
  metaTitleMaxLength: 60,
  metaDescMaxLength: 160,
  includeTableOfContents: false,
  includeFAQSection: false,
  linkedinStyleSample: '',
  youtubeStyleSample: '',
};

function OptionCards({ options, value, onChange, columns = 3 }) {
  return (
    <div className={`grid grid-cols-${columns} gap-3`}>
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          onClick={() => onChange(option.value)}
          className={`relative rounded-lg border-2 p-4 text-left transition-all ${
            value === option.value
              ? 'border-primary bg-primary/5'
              : 'border-border hover:border-primary/50'
          }`}
        >
          {value === option.value && (
            <Check className="absolute top-2 right-2 h-4 w-4 text-primary" />
          )}
          <p className="font-medium text-sm">{option.label}</p>
          {option.words && (
            <p className="text-xs text-primary font-medium mt-0.5">{option.words}</p>
          )}
          <p className="text-xs text-muted-foreground mt-1">{option.description}</p>
        </button>
      ))}
    </div>
  );
}

export default function BrandEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const isCreateMode = !id;

  const { data: brand, isLoading } = useBrand(id);
  const createBrand = useCreateBrand();
  const updateBrand = useUpdateBrand();
  const connectSitemap = useConnectBrandSitemap();
  const refreshSitemap = useRefreshBrandSitemap();
  const disconnectSitemap = useDisconnectBrandSitemap();

  const [form, setForm] = useState(null);
  const [sitemapInput, setSitemapInput] = useState('');
  const [customRules, setCustomRules] = useState([]);

  // Writing samples state
  const [sampleDialogOpen, setSampleDialogOpen] = useState(false);
  const [editingSample, setEditingSample] = useState(null);
  const [sampleForm, setSampleForm] = useState({ title: '', content: '' });

  // Writing samples hooks
  const { data: writingSamples = [], isLoading: samplesLoading } = useWritingSamples(id);
  const createSample = useCreateWritingSample();
  const updateSample = useUpdateWritingSample();
  const deleteSample = useDeleteWritingSample();

  // Reset form when switching between create / edit (component reuse)
  const [prevId, setPrevId] = useState(id);
  if (id !== prevId) {
    setPrevId(id);
    setForm(null);
  }

  // Initialize form
  useEffect(() => {
    if (isCreateMode && !form) {
      setForm({ ...DEFAULT_FORM });
    } else if (brand && !form) {
      setForm({ ...brand });
      try {
        const rules = brand.customLinkRules
          ? JSON.parse(brand.customLinkRules)
          : [];
        setCustomRules(rules);
      } catch {
        setCustomRules([]);
      }
    }
  }, [brand, form, isCreateMode]);

  // Keep server-controlled sitemap fields in sync after mutations
  useEffect(() => {
    if (brand && form && !isCreateMode) {
      setForm((prev) => ({
        ...prev,
        sitemapUrl: brand.sitemapUrl,
        sitemapPageCount: brand.sitemapPageCount,
        sitemapLastSync: brand.sitemapLastSync,
      }));
    }
  }, [brand?.sitemapUrl, brand?.sitemapPageCount, brand?.sitemapLastSync]);

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = async (fields) => {
    if (isCreateMode) {
      // In create mode, we save everything at once
      return;
    }
    const updates = {};
    fields.forEach((f) => {
      updates[f] = form[f];
    });
    try {
      await updateBrand.mutateAsync({ brandId: id, updates });
      toast.success('Brand updated');
    } catch (error) {
      toast.error(error.message || 'Failed to save');
    }
  };

  const handleCreate = async () => {
    if (!form.name?.trim()) {
      toast.error('Brand name is required');
      return;
    }
    try {
      const brand = await createBrand.mutateAsync(form);
      toast.success('Brand created');
      navigate(`/brands/${brand.id}`);
    } catch {
      toast.error('Failed to create brand');
    }
  };

  const handleConnectSitemap = async () => {
    const url = sitemapInput.trim();
    if (!url) {
      toast.error('Enter a sitemap URL first');
      return;
    }
    try {
      const result = await connectSitemap.mutateAsync({ brandId: id, sitemapUrl: url });
      toast.success(`Connected! Indexed ${result.pageCount} pages.`);
      setSitemapInput('');
    } catch (error) {
      toast.error(error.message || 'Failed to connect sitemap');
    }
  };

  const handleRefreshSitemap = async () => {
    try {
      const result = await refreshSitemap.mutateAsync(id);
      toast.success(`Refreshed! ${result.pageCount} pages indexed.`);
    } catch (error) {
      toast.error(error.message || 'Failed to refresh sitemap');
    }
  };

  const handleDisconnectSitemap = async () => {
    try {
      await disconnectSitemap.mutateAsync(id);
      toast.success('Sitemap disconnected');
    } catch (error) {
      toast.error(error.message || 'Failed to disconnect sitemap');
    }
  };

  const addCustomRule = () => {
    setCustomRules((prev) => [...prev, { keywords: '', url: '' }]);
  };

  const updateCustomRule = (index, field, value) => {
    setCustomRules((prev) =>
      prev.map((rule, i) => (i === index ? { ...rule, [field]: value } : rule))
    );
  };

  const removeCustomRule = (index) => {
    setCustomRules((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSaveLinking = async () => {
    const updates = {
      linksPerArticle: form.linksPerArticle,
      customLinkRules: JSON.stringify(
        customRules.filter((r) => r.keywords.trim() && r.url.trim())
      ),
    };
    try {
      await updateBrand.mutateAsync({ brandId: id, updates });
      toast.success('Linking settings saved');
    } catch {
      toast.error('Failed to save linking settings');
    }
  };

  // Writing samples handlers
  const openSampleDialog = (sample = null) => {
    if (sample) {
      setEditingSample(sample);
      setSampleForm({ title: sample.title, content: sample.content });
    } else {
      setEditingSample(null);
      setSampleForm({ title: '', content: '' });
    }
    setSampleDialogOpen(true);
  };

  const closeSampleDialog = () => {
    setSampleDialogOpen(false);
    setEditingSample(null);
    setSampleForm({ title: '', content: '' });
  };

  const handleSaveSample = async () => {
    if (!sampleForm.title.trim()) {
      toast.error('Title is required');
      return;
    }
    if (!sampleForm.content.trim()) {
      toast.error('Content is required');
      return;
    }

    try {
      if (editingSample) {
        await updateSample.mutateAsync({
          brandId: id,
          sampleId: editingSample.id,
          title: sampleForm.title,
          content: sampleForm.content,
        });
        toast.success('Sample updated');
      } else {
        await createSample.mutateAsync({
          brandId: id,
          title: sampleForm.title,
          content: sampleForm.content,
        });
        toast.success('Sample added');
      }
      closeSampleDialog();
    } catch (error) {
      toast.error(error.message || 'Failed to save sample');
    }
  };

  const handleDeleteSample = async (sampleId) => {
    try {
      await deleteSample.mutateAsync({ brandId: id, sampleId });
      toast.success('Sample deleted');
    } catch (error) {
      toast.error(error.message || 'Failed to delete sample');
    }
  };

  if (!isCreateMode && (isLoading || !form)) {
    return (
      <div className="container mx-auto py-10 max-w-4xl flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  if (isCreateMode && !form) {
    return null;
  }

  const isSaving = createBrand.isPending || updateBrand.isPending;

  function SaveButton({ onClick, isPending }) {
    return (
      <Button onClick={onClick} disabled={isPending} className="mt-6">
        {isPending ? (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Save className="mr-2 h-4 w-4" />
        )}
        Save Changes
      </Button>
    );
  }

  return (
    <div className="container mx-auto py-10 max-w-4xl">
      <div className="mb-6">
        <Button variant="outline" onClick={() => navigate('/brands')}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Brands
        </Button>
      </div>

      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          {isCreateMode ? 'New Brand' : `Edit: ${brand?.name}`}
        </h1>
        <p className="text-muted-foreground mt-1">
          {isCreateMode
            ? 'Set up a new brand profile for content generation'
            : 'Configure how AI content is generated for this brand'}
        </p>
      </div>

      {/* Brand name (always at top) */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Brand Name</CardTitle>
        </CardHeader>
        <CardContent>
          <Input
            placeholder="e.g., Acme Corp"
            value={form.name}
            onChange={(e) => handleChange('name', e.target.value)}
          />
          {isCreateMode && (
            <Button
              onClick={handleCreate}
              disabled={createBrand.isPending}
              className="mt-4"
            >
              {createBrand.isPending ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Plus className="mr-2 h-4 w-4" />
              )}
              Create Brand
            </Button>
          )}
          {!isCreateMode && (
            <SaveButton
              onClick={() => handleSave(['name'])}
              isPending={isSaving}
            />
          )}
        </CardContent>
      </Card>

      {/* Only show settings tabs in edit mode */}
      {!isCreateMode && (
        <Tabs defaultValue="basics" className="w-full">
          <TabsList className="grid w-full grid-cols-7">
            <TabsTrigger value="basics" className="text-xs">
              <FileText className="mr-1 h-3.5 w-3.5 hidden sm:inline" />
              Basics
            </TabsTrigger>
            <TabsTrigger value="brand" className="text-xs">
              <Building2 className="mr-1 h-3.5 w-3.5 hidden sm:inline" />
              Brand
            </TabsTrigger>
            <TabsTrigger value="voice" className="text-xs">
              <Mic2 className="mr-1 h-3.5 w-3.5 hidden sm:inline" />
              Voice
            </TabsTrigger>
            <TabsTrigger value="linking" className="text-xs">
              <Link2 className="mr-1 h-3.5 w-3.5 hidden sm:inline" />
              Linking
            </TabsTrigger>
            <TabsTrigger value="images" className="text-xs">
              <Image className="mr-1 h-3.5 w-3.5 hidden sm:inline" />
              Images
            </TabsTrigger>
            <TabsTrigger value="advanced" className="text-xs">
              <SlidersHorizontal className="mr-1 h-3.5 w-3.5 hidden sm:inline" />
              Advanced
            </TabsTrigger>
            <TabsTrigger value="repurposing" className="text-xs">
              <Repeat2 className="mr-1 h-3.5 w-3.5 hidden sm:inline" />
              Repurpose
            </TabsTrigger>
          </TabsList>

          {/* ===== TAB 1: Article Basics ===== */}
          <TabsContent value="basics">
            <Card>
              <CardHeader>
                <CardTitle>Article Basics</CardTitle>
                <CardDescription>
                  Set the default length for generated articles
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <Label>Article Length</Label>
                  <OptionCards
                    options={LENGTH_PRESETS}
                    value={form.articleLength}
                    onChange={(v) => handleChange('articleLength', v)}
                    columns={3}
                  />
                </div>

                {form.articleLength !== 'auto' && (
                  <div className="space-y-2">
                    <Label htmlFor="customWordCount">Custom Word Count (optional)</Label>
                    <Input
                      id="customWordCount"
                      type="number"
                      placeholder="e.g., 2000"
                      value={form.customWordCount || ''}
                      onChange={(e) =>
                        handleChange(
                          'customWordCount',
                          e.target.value ? parseInt(e.target.value) : null
                        )
                      }
                    />
                    <p className="text-xs text-muted-foreground">
                      Override the preset word count with a specific target
                    </p>
                  </div>
                )}

                <SaveButton
                  onClick={() =>
                    handleSave(['articleLength', 'customWordCount'])
                  }
                  isPending={isSaving}
                />
              </CardContent>
            </Card>
          </TabsContent>

          {/* ===== TAB 2: Brand Settings ===== */}
          <TabsContent value="brand">
            <Card>
              <CardHeader>
                <CardTitle>Brand Identity</CardTitle>
                <CardDescription>
                  Help the AI write content that reflects this brand&apos;s identity
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="companyName">Company Name</Label>
                  <Input
                    id="companyName"
                    placeholder="e.g., Acme Corp"
                    value={form.companyName}
                    onChange={(e) => handleChange('companyName', e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="companyDescription">What We Do</Label>
                  <Textarea
                    id="companyDescription"
                    placeholder="Briefly describe the company and what it does..."
                    value={form.companyDescription}
                    onChange={(e) =>
                      handleChange('companyDescription', e.target.value)
                    }
                    rows={3}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="uniqueValue">Unique Value Propositions</Label>
                  <Textarea
                    id="uniqueValue"
                    placeholder="What makes this company stand out from competitors?"
                    value={form.uniqueValue}
                    onChange={(e) => handleChange('uniqueValue', e.target.value)}
                    rows={3}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="targetAudience">Target Audience</Label>
                  <Textarea
                    id="targetAudience"
                    placeholder="Describe the ideal reader (role, industry, pain points)..."
                    value={form.targetAudience}
                    onChange={(e) =>
                      handleChange('targetAudience', e.target.value)
                    }
                    rows={3}
                  />
                </div>

                <div className="space-y-3">
                  <Label>Brand Mention Level</Label>
                  <OptionCards
                    options={BRAND_MENTION_OPTIONS}
                    value={form.brandMentionLevel}
                    onChange={(v) => handleChange('brandMentionLevel', v)}
                    columns={3}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="productsServices">Products & Services</Label>
                  <Textarea
                    id="productsServices"
                    placeholder="List key products or services..."
                    value={form.productsServices}
                    onChange={(e) =>
                      handleChange('productsServices', e.target.value)
                    }
                    rows={3}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="socialProof">Social Proof</Label>
                  <Textarea
                    id="socialProof"
                    placeholder="Awards, testimonials, statistics, case studies..."
                    value={form.socialProof}
                    onChange={(e) => handleChange('socialProof', e.target.value)}
                    rows={3}
                  />
                </div>

                <SaveButton
                  onClick={() =>
                    handleSave([
                      'companyName',
                      'companyDescription',
                      'uniqueValue',
                      'targetAudience',
                      'brandMentionLevel',
                      'productsServices',
                      'socialProof',
                    ])
                  }
                  isPending={isSaving}
                />
              </CardContent>
            </Card>
          </TabsContent>

          {/* ===== TAB 3: Voice & Style ===== */}
          <TabsContent value="voice">
            <Card>
              <CardHeader>
                <CardTitle>Voice & Style</CardTitle>
                <CardDescription>
                  Define the writing voice and tone for this brand&apos;s content
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Writing Samples Section */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Writing Style Samples</Label>
                      <p className="text-xs text-muted-foreground mt-1">
                        Add examples of this brand&apos;s writing for the AI to learn from
                      </p>
                    </div>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => openSampleDialog()}
                    >
                      <Plus className="mr-1 h-3.5 w-3.5" />
                      Add Sample
                    </Button>
                  </div>

                  {samplesLoading ? (
                    <div className="flex items-center justify-center py-8">
                      <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
                    </div>
                  ) : writingSamples.length === 0 ? (
                    <div className="border-2 border-dashed rounded-lg p-8 text-center">
                      <FileText className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
                      <p className="text-sm text-muted-foreground">
                        No writing samples yet. Add samples to help the AI learn this brand&apos;s voice.
                      </p>
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        className="mt-3"
                        onClick={() => openSampleDialog()}
                      >
                        <Plus className="mr-1 h-3.5 w-3.5" />
                        Add Your First Sample
                      </Button>
                    </div>
                  ) : (
                    <div className="grid gap-3">
                      {writingSamples.map((sample) => (
                        <div
                          key={sample.id}
                          className="border rounded-lg p-4 bg-muted/30"
                        >
                          <div className="flex items-start justify-between gap-3">
                            <div className="flex-1 min-w-0">
                              <h4 className="font-medium text-sm truncate">
                                {sample.title}
                              </h4>
                              <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                                {sample.content.substring(0, 150)}
                                {sample.content.length > 150 ? '...' : ''}
                              </p>
                              <p className="text-xs text-muted-foreground mt-2">
                                {sample.content.split(/\s+/).length} words
                              </p>
                            </div>
                            <div className="flex items-center gap-1 shrink-0">
                              <Button
                                type="button"
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8"
                                onClick={() => openSampleDialog(sample)}
                              >
                                <Pencil className="h-4 w-4 text-muted-foreground" />
                              </Button>
                              <Button
                                type="button"
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8"
                                onClick={() => handleDeleteSample(sample.id)}
                                disabled={deleteSample.isPending}
                              >
                                <Trash2 className="h-4 w-4 text-muted-foreground" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bannedWords">Banned Words & Phrases</Label>
                  <Textarea
                    id="bannedWords"
                    placeholder="e.g., synergy, leverage, game-changer, cutting-edge"
                    value={form.bannedWords}
                    onChange={(e) => handleChange('bannedWords', e.target.value)}
                    rows={3}
                  />
                  <p className="text-xs text-muted-foreground">
                    Comma-separated list of words or phrases the AI should never use
                  </p>
                </div>

                <SaveButton
                  onClick={() =>
                    handleSave([
                      'bannedWords',
                    ])
                  }
                  isPending={isSaving}
                />
              </CardContent>
            </Card>

            {/* Writing Sample Dialog */}
            <Dialog open={sampleDialogOpen} onOpenChange={setSampleDialogOpen}>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>
                    {editingSample ? 'Edit Writing Sample' : 'Add Writing Sample'}
                  </DialogTitle>
                  <DialogDescription>
                    Paste an example of this brand&apos;s writing. The AI will analyze
                    the tone, style, and voice to produce similar content.
                  </DialogDescription>
                </DialogHeader>

                <div className="space-y-4 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="sampleTitle">Title</Label>
                    <Input
                      id="sampleTitle"
                      placeholder="e.g., Blog Post Example, Email Newsletter Sample"
                      value={sampleForm.title}
                      onChange={(e) =>
                        setSampleForm((prev) => ({ ...prev, title: e.target.value }))
                      }
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="sampleContent">Content</Label>
                    <Textarea
                      id="sampleContent"
                      placeholder="Paste a sample of this brand's writing..."
                      value={sampleForm.content}
                      onChange={(e) =>
                        setSampleForm((prev) => ({ ...prev, content: e.target.value }))
                      }
                      rows={12}
                    />
                    <p className="text-xs text-muted-foreground">
                      {sampleForm.content.split(/\s+/).filter(Boolean).length} words
                    </p>
                  </div>
                </div>

                <DialogFooter>
                  <Button variant="outline" onClick={closeSampleDialog}>
                    Cancel
                  </Button>
                  <Button
                    onClick={handleSaveSample}
                    disabled={createSample.isPending || updateSample.isPending}
                  >
                    {(createSample.isPending || updateSample.isPending) && (
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    )}
                    {editingSample ? 'Update Sample' : 'Add Sample'}
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </TabsContent>

          {/* ===== TAB 4: Internal Linking ===== */}
          <TabsContent value="linking">
            <Card>
              <CardHeader>
                <CardTitle>Internal Linking</CardTitle>
                <CardDescription>
                  Connect this brand&apos;s sitemap so the AI can discover and suggest
                  relevant internal links
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {!form.sitemapUrl ? (
                  <div className="space-y-3">
                    <Label htmlFor="sitemapUrl">Sitemap URL</Label>
                    <div className="flex gap-2">
                      <Input
                        id="sitemapUrl"
                        placeholder="https://example.com or https://example.com/sitemap.xml"
                        value={sitemapInput}
                        onChange={(e) => setSitemapInput(e.target.value)}
                        className="flex-1"
                        disabled={connectSitemap.isPending}
                      />
                      <Button
                        type="button"
                        onClick={handleConnectSitemap}
                        disabled={connectSitemap.isPending}
                      >
                        {connectSitemap.isPending ? (
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        ) : (
                          <Globe className="mr-2 h-4 w-4" />
                        )}
                        {connectSitemap.isPending ? 'Connecting...' : 'Connect'}
                      </Button>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Enter the domain or sitemap URL. We&apos;ll auto-detect the
                      sitemap and index all pages.
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="flex items-center justify-between p-4 bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-900 rounded-lg">
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 text-green-600" />
                        <div>
                          <p className="font-medium text-sm">Connected</p>
                          <p className="text-xs text-muted-foreground">
                            {(() => {
                              try {
                                return new URL(form.sitemapUrl).hostname;
                              } catch {
                                return form.sitemapUrl;
                              }
                            })()}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="font-medium text-foreground">
                          {form.sitemapPageCount || 0} Pages
                        </span>
                        {form.sitemapLastSync && (
                          <span>
                            Synced{' '}
                            {new Date(form.sitemapLastSync).toLocaleDateString()}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Label>Links per Article</Label>
                      <OptionCards
                        options={LINKS_PER_ARTICLE_OPTIONS}
                        value={form.linksPerArticle}
                        onChange={(v) => handleChange('linksPerArticle', v)}
                        columns={4}
                      />
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <Label>Custom Link Rules</Label>
                          <p className="text-xs text-muted-foreground mt-1">
                            Force specific links when trigger keywords appear.
                            Separate trigger phrases with commas.
                          </p>
                        </div>
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={addCustomRule}
                        >
                          <Plus className="mr-1 h-3.5 w-3.5" />
                          Add Rule
                        </Button>
                      </div>

                      {customRules.length > 0 && (
                        <div className="space-y-2">
                          {customRules.map((rule, index) => (
                            <div key={index} className="flex gap-2 items-start">
                              <Input
                                placeholder="Trigger keywords (e.g., demo, free trial)"
                                value={rule.keywords}
                                onChange={(e) =>
                                  updateCustomRule(index, 'keywords', e.target.value)
                                }
                                className="flex-1"
                              />
                              <Input
                                placeholder="Target URL"
                                value={rule.url}
                                onChange={(e) =>
                                  updateCustomRule(index, 'url', e.target.value)
                                }
                                className="flex-1"
                              />
                              <Button
                                type="button"
                                variant="ghost"
                                size="icon"
                                onClick={() => removeCustomRule(index)}
                                className="shrink-0"
                              >
                                <Trash2 className="h-4 w-4 text-muted-foreground" />
                              </Button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    <SaveButton
                      onClick={handleSaveLinking}
                      isPending={isSaving}
                    />

                    <div className="flex gap-3 pt-4 border-t">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={handleRefreshSitemap}
                        disabled={refreshSitemap.isPending}
                      >
                        {refreshSitemap.isPending ? (
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        ) : (
                          <RefreshCw className="mr-2 h-4 w-4" />
                        )}
                        Refresh Index
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        className="text-destructive hover:text-destructive"
                        onClick={handleDisconnectSitemap}
                        disabled={disconnectSitemap.isPending}
                      >
                        {disconnectSitemap.isPending ? (
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        ) : (
                          <Unlink className="mr-2 h-4 w-4" />
                        )}
                        Disconnect
                      </Button>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* ===== TAB 5: Images ===== */}
          <TabsContent value="images">
            <Card>
              <CardHeader>
                <CardTitle>Image Defaults</CardTitle>
                <CardDescription>
                  Set default image quality and dimensions for this brand. These can be
                  overridden per-job when creating content.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="defaultImageQuality">Default Image Quality</Label>
                  <Select
                    value={form.defaultImageQuality}
                    onValueChange={(v) =>
                      handleChange('defaultImageQuality', v)
                    }
                  >
                    <SelectTrigger id="defaultImageQuality">
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
                  <Label htmlFor="defaultImageDimensions">
                    Default Image Dimensions
                  </Label>
                  <Select
                    value={form.defaultImageDimensions}
                    onValueChange={(v) =>
                      handleChange('defaultImageDimensions', v)
                    }
                  >
                    <SelectTrigger id="defaultImageDimensions">
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

                <SaveButton
                  onClick={() =>
                    handleSave([
                      'defaultImageQuality',
                      'defaultImageDimensions',
                    ])
                  }
                  isPending={isSaving}
                />
              </CardContent>
            </Card>
          </TabsContent>

          {/* ===== TAB 6: Advanced ===== */}
          <TabsContent value="advanced">
            <Card>
              <CardHeader>
                <CardTitle>Advanced Settings</CardTitle>
                <CardDescription>
                  Fine-tune research depth, SEO parameters, and content structure
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <Label>Research Depth</Label>
                  <OptionCards
                    options={RESEARCH_DEPTH_OPTIONS}
                    value={form.researchDepth}
                    onChange={(v) => handleChange('researchDepth', v)}
                    columns={3}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="metaTitleMaxLength">
                      Meta Title Max Length
                    </Label>
                    <Input
                      id="metaTitleMaxLength"
                      type="number"
                      value={form.metaTitleMaxLength}
                      onChange={(e) =>
                        handleChange(
                          'metaTitleMaxLength',
                          parseInt(e.target.value) || 60
                        )
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="metaDescMaxLength">
                      Meta Description Max Length
                    </Label>
                    <Input
                      id="metaDescMaxLength"
                      type="number"
                      value={form.metaDescMaxLength}
                      onChange={(e) =>
                        handleChange(
                          'metaDescMaxLength',
                          parseInt(e.target.value) || 160
                        )
                      }
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="includeTableOfContents">
                        Include Table of Contents
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        Add a clickable table of contents at the top of articles
                      </p>
                    </div>
                    <Switch
                      id="includeTableOfContents"
                      checked={form.includeTableOfContents}
                      onCheckedChange={(v) =>
                        handleChange('includeTableOfContents', v)
                      }
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="includeFAQSection">
                        Include FAQ Section
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        Automatically add an FAQ section at the end of articles
                      </p>
                    </div>
                    <Switch
                      id="includeFAQSection"
                      checked={form.includeFAQSection}
                      onCheckedChange={(v) =>
                        handleChange('includeFAQSection', v)
                      }
                    />
                  </div>
                </div>

                <SaveButton
                  onClick={() =>
                    handleSave([
                      'researchDepth',
                      'metaTitleMaxLength',
                      'metaDescMaxLength',
                      'includeTableOfContents',
                      'includeFAQSection',
                    ])
                  }
                  isPending={isSaving}
                />
              </CardContent>
            </Card>
          </TabsContent>

          {/* ===== TAB 7: Content Repurposing ===== */}
          <TabsContent value="repurposing">
            <Card>
              <CardHeader>
                <CardTitle>Content Repurposing</CardTitle>
                <CardDescription>
                  Configure style samples for LinkedIn posts and YouTube scripts
                  generated from this brand&apos;s articles
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="linkedinStyleSample">
                    LinkedIn Writing Style Sample (optional)
                  </Label>
                  <Textarea
                    id="linkedinStyleSample"
                    placeholder="Paste an example LinkedIn post that represents the desired style..."
                    value={form.linkedinStyleSample}
                    onChange={(e) =>
                      handleChange('linkedinStyleSample', e.target.value)
                    }
                    rows={8}
                  />
                  <p className="text-xs text-muted-foreground">
                    Paste 200-500 words of a LinkedIn post. The AI will adopt this
                    style.
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="youtubeStyleSample">
                    YouTube Script Style Sample (optional)
                  </Label>
                  <Textarea
                    id="youtubeStyleSample"
                    placeholder="Paste an example YouTube script or transcript that represents the desired style..."
                    value={form.youtubeStyleSample}
                    onChange={(e) =>
                      handleChange('youtubeStyleSample', e.target.value)
                    }
                    rows={8}
                  />
                  <p className="text-xs text-muted-foreground">
                    Paste 200-500 words of a YouTube script or transcript. The AI
                    will adopt this speaking style and structure.
                  </p>
                </div>

                <SaveButton
                  onClick={() =>
                    handleSave(['linkedinStyleSample', 'youtubeStyleSample'])
                  }
                  isPending={isSaving}
                />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      )}
    </div>
  );
}
