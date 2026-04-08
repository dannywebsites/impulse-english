import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useJobs, useDeleteJob, useGenerateContent, useQueueStatus } from '@/hooks/useJobs';
import { useOptimizations, useDeleteOptimization } from '@/hooks/useOptimizations';
import { useBrands } from '@/hooks/useBrands';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';
import { Loader2, Plus, Trash2, Play } from 'lucide-react';

// ─── Status Badges ───

function ArticleStatusBadge({ status }) {
  const colors = {
    Idle: 'bg-blue-500',
    Running: 'bg-yellow-500 animate-pulse',
    Done: 'bg-green-500',
    Error: 'bg-red-500',
  };

  return (
    <Badge className={colors[status]}>
      {status === 'Running' && <Loader2 className="mr-1 h-3 w-3 animate-spin" />}
      {status}
    </Badge>
  );
}

function OptimizationStatusBadge({ status }) {
  const colors = {
    Done: 'bg-green-500',
    Rewritten: 'bg-emerald-600',
  };

  const labels = {
    Done: 'Analyzed',
    Rewritten: 'Rewritten',
  };

  return (
    <Badge className={colors[status]}>
      {labels[status] || status}
    </Badge>
  );
}

// ─── Helpers ───

function formatDate(dateString) {
  return new Date(dateString).toLocaleString();
}

function truncateUrl(url) {
  try {
    const parsed = new URL(url);
    const path = parsed.pathname;
    if (path.length > 40) {
      return parsed.hostname + path.substring(0, 37) + '...';
    }
    return parsed.hostname + path;
  } catch {
    return url;
  }
}

// ─── Articles Tab ───

function ArticlesTab({ brands }) {
  const navigate = useNavigate();
  const [statusFilter, setStatusFilter] = useState('all');
  const [brandFilter, setBrandFilter] = useState('all');
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [jobToDelete, setJobToDelete] = useState(null);

  const { data: jobs, isLoading } = useJobs(
    statusFilter === 'all' ? null : statusFilter,
    brandFilter === 'all' ? null : brandFilter,
  );
  const deleteJob = useDeleteJob();
  const generateContent = useGenerateContent();

  const idleJobs = jobs?.filter((j) => j.action === 'Idle') || [];
  const hasIdleJobs = idleJobs.length > 0;

  const hasRunningJobs = jobs?.some((j) => j.action === 'Running');
  const { data: queueStatus } = useQueueStatus(hasRunningJobs || false);

  const handleGenerateAllIdle = () => {
    for (const job of idleJobs) {
      generateContent.mutate(job.id);
    }
    toast.success(`${idleJobs.length} job${idleJobs.length !== 1 ? 's' : ''} queued for generation`);
  };

  const handleDeleteConfirm = () => {
    if (jobToDelete) {
      deleteJob.mutate(jobToDelete, {
        onSuccess: () => {
          toast.success('Job deleted successfully');
          setDeleteDialogOpen(false);
          setJobToDelete(null);
        },
        onError: (error) => {
          toast.error(`Failed to delete job: ${error.message}`);
        },
      });
    }
  };

  return (
    <>
      <div className="bg-white rounded-lg border border-border">
        <div className="p-6 border-b border-border flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setStatusFilter('all')}
              className={cn(
                'text-sm font-medium px-1 pb-1 border-b-2 transition-colors',
                statusFilter === 'all'
                  ? 'border-primary text-primary'
                  : 'border-transparent text-muted-foreground hover:text-foreground'
              )}
            >
              All {jobs?.length > 0 && `${jobs.length}`}
            </button>
            <button
              onClick={() => setStatusFilter('Done')}
              className={cn(
                'text-sm font-medium px-1 pb-1 border-b-2 transition-colors',
                statusFilter === 'Done'
                  ? 'border-primary text-primary'
                  : 'border-transparent text-muted-foreground hover:text-foreground'
              )}
            >
              Ready
            </button>
            {queueStatus && (queueStatus.running || queueStatus.length > 0) && (
              <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">
                Queue: {queueStatus.length} waiting
              </span>
            )}
          </div>
          <div className="flex items-center gap-3">
            {brands && brands.length > 0 && (
              <Select value={brandFilter} onValueChange={setBrandFilter}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="All Brands" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Brands</SelectItem>
                  {brands.map((brand) => (
                    <SelectItem key={brand.id} value={brand.id}>
                      {brand.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
            {hasIdleJobs && (
              <Button variant="outline" onClick={handleGenerateAllIdle} disabled={generateContent.isPending}>
                <Play className="mr-2 h-4 w-4" />
                Generate All Idle ({idleJobs.length})
              </Button>
            )}
            <Button onClick={() => navigate('/new')}>
              <Plus className="mr-2 h-4 w-4" />
              New Article
            </Button>
          </div>
        </div>
        <div>
          {isLoading ? (
            <div className="flex items-center justify-center py-16">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          ) : jobs && jobs.length === 0 ? (
            <div className="text-center py-16 text-muted-foreground">
              <p className="text-lg mb-2">No articles yet</p>
              <p className="text-sm">Create your first article to get started!</p>
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Topic</TableHead>
                  <TableHead>Brand</TableHead>
                  <TableHead>Keywords</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Current Step</TableHead>
                  <TableHead>Created</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {jobs?.map((job) => (
                  <TableRow
                    key={job.id}
                    onClick={() => navigate(`/jobs/${job.id}`)}
                    className="cursor-pointer hover:bg-muted/50"
                  >
                    <TableCell className="font-medium">{job.topic}</TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                      {job.brand?.name || '-'}
                    </TableCell>
                    <TableCell className="max-w-xs truncate">{job.keywords}</TableCell>
                    <TableCell>
                      <ArticleStatusBadge status={job.action} />
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                      {job.currentStep || '-'}
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                      {formatDate(job.createdAt)}
                    </TableCell>
                    <TableCell className="text-right" onClick={(e) => e.stopPropagation()}>
                      <div className="flex justify-end gap-2">
                        {job.action === 'Idle' && (
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={(e) => {
                              e.stopPropagation();
                              generateContent.mutate(job.id, {
                                onSuccess: () => toast.success('Content generation started'),
                                onError: (err) => toast.error(`Failed to start generation: ${err.message}`),
                              });
                            }}
                            disabled={generateContent.isPending}
                          >
                            <Play className="h-3 w-3" />
                          </Button>
                        )}
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={(e) => {
                            e.stopPropagation();
                            setJobToDelete(job.id);
                            setDeleteDialogOpen(true);
                          }}
                          disabled={deleteJob.isPending || job.action === 'Running'}
                        >
                          <Trash2 className="h-3 w-3 text-red-500" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </div>
      </div>

      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Job</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete this job? This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDeleteConfirm} className="bg-red-500 hover:bg-red-600">
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}

// ─── Optimized Tab ───

function OptimizedTab({ brands }) {
  const navigate = useNavigate();
  const [statusFilter, setStatusFilter] = useState('all');
  const [brandFilter, setBrandFilter] = useState('all');
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [jobToDelete, setJobToDelete] = useState(null);

  const { data: allJobs, isLoading } = useOptimizations(
    null,
    brandFilter === 'all' ? null : brandFilter,
  );
  const deleteJob = useDeleteOptimization();

  // Only show finished jobs (Analyzed or Rewritten)
  const finishedJobs = allJobs?.filter((j) => ['Done', 'Rewritten'].includes(j.action)) || [];
  const filteredJobs = statusFilter === 'all'
    ? finishedJobs
    : finishedJobs.filter((j) => j.action === statusFilter);

  const handleDeleteConfirm = () => {
    if (jobToDelete) {
      deleteJob.mutate(jobToDelete, {
        onSuccess: () => {
          toast.success('Optimization job deleted');
          setDeleteDialogOpen(false);
          setJobToDelete(null);
        },
        onError: (error) => {
          toast.error(`Failed to delete: ${error.message}`);
        },
      });
    }
  };

  return (
    <>
      <div className="bg-white rounded-lg border border-border">
        <div className="p-6 border-b border-border flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setStatusFilter('all')}
              className={cn(
                'text-sm font-medium px-1 pb-1 border-b-2 transition-colors',
                statusFilter === 'all'
                  ? 'border-primary text-primary'
                  : 'border-transparent text-muted-foreground hover:text-foreground'
              )}
            >
              All {finishedJobs.length > 0 && `${finishedJobs.length}`}
            </button>
            <button
              onClick={() => setStatusFilter('Done')}
              className={cn(
                'text-sm font-medium px-1 pb-1 border-b-2 transition-colors',
                statusFilter === 'Done'
                  ? 'border-primary text-primary'
                  : 'border-transparent text-muted-foreground hover:text-foreground'
              )}
            >
              Analyzed
            </button>
            <button
              onClick={() => setStatusFilter('Rewritten')}
              className={cn(
                'text-sm font-medium px-1 pb-1 border-b-2 transition-colors',
                statusFilter === 'Rewritten'
                  ? 'border-primary text-primary'
                  : 'border-transparent text-muted-foreground hover:text-foreground'
              )}
            >
              Rewritten
            </button>
          </div>
          <div className="flex items-center gap-3">
            {brands && brands.length > 0 && (
              <Select value={brandFilter} onValueChange={setBrandFilter}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="All Brands" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Brands</SelectItem>
                  {brands.map((brand) => (
                    <SelectItem key={brand.id} value={brand.id}>
                      {brand.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
            <Button onClick={() => navigate('/optimize/new')}>
              <Plus className="mr-2 h-4 w-4" />
              New Optimization
            </Button>
          </div>
        </div>
        <div>
          {isLoading ? (
            <div className="flex items-center justify-center py-16">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          ) : filteredJobs.length === 0 ? (
            <div className="text-center py-16 text-muted-foreground">
              <p className="text-lg mb-2">No optimized content yet</p>
              <p className="text-sm">Analyze and rewrite existing content to see it here.</p>
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Source URL</TableHead>
                  <TableHead>Keyword</TableHead>
                  <TableHead>Brand</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Created</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredJobs.map((job) => (
                  <TableRow
                    key={job.id}
                    onClick={() => navigate(`/optimize/${job.id}`)}
                    className="cursor-pointer hover:bg-muted/50"
                  >
                    <TableCell className="font-medium max-w-xs">
                      {truncateUrl(job.sourceUrl)}
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                      {job.targetKeyword || job.detectedKeyword || '-'}
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                      {job.brand?.name || '-'}
                    </TableCell>
                    <TableCell>
                      <OptimizationStatusBadge status={job.action} />
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                      {formatDate(job.createdAt)}
                    </TableCell>
                    <TableCell className="text-right" onClick={(e) => e.stopPropagation()}>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={(e) => {
                          e.stopPropagation();
                          setJobToDelete(job.id);
                          setDeleteDialogOpen(true);
                        }}
                        disabled={deleteJob.isPending}
                      >
                        <Trash2 className="h-3 w-3 text-red-500" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </div>
      </div>

      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Optimization Job</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete this optimization job? This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDeleteConfirm} className="bg-red-500 hover:bg-red-600">
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}

// ─── Main Dashboard ───

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('articles');
  const { data: brands } = useBrands();

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-foreground mb-2">My Content</h1>
        <p className="text-sm text-muted-foreground">
          All your generated articles and optimized content
        </p>
      </div>

      <div className="mb-6 flex gap-1 border-b border-border">
        <button
          onClick={() => setActiveTab('articles')}
          className={cn(
            'px-4 py-2 text-sm font-medium border-b-2 transition-colors -mb-px',
            activeTab === 'articles'
              ? 'border-primary text-primary'
              : 'border-transparent text-muted-foreground hover:text-foreground'
          )}
        >
          Articles
        </button>
        <button
          onClick={() => setActiveTab('optimized')}
          className={cn(
            'px-4 py-2 text-sm font-medium border-b-2 transition-colors -mb-px',
            activeTab === 'optimized'
              ? 'border-primary text-primary'
              : 'border-transparent text-muted-foreground hover:text-foreground'
          )}
        >
          Optimized
        </button>
      </div>

      {activeTab === 'articles' && <ArticlesTab brands={brands} />}
      {activeTab === 'optimized' && <OptimizedTab brands={brands} />}
    </div>
  );
}
