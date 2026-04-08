import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useOptimizations, useDeleteOptimization, useAnalyzeContent } from '@/hooks/useOptimizations';
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
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
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

function StatusBadge({ status }) {
  const colors = {
    Idle: 'bg-blue-500',
    Analyzing: 'bg-yellow-500 animate-pulse',
    Done: 'bg-green-500',
    Rewriting: 'bg-yellow-500 animate-pulse',
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

  return (
    <Badge className={colors[status]}>
      {(status === 'Analyzing' || status === 'Rewriting') && (
        <Loader2 className="mr-1 h-3 w-3 animate-spin" />
      )}
      {labels[status] || status}
    </Badge>
  );
}

export default function OptimizeList() {
  const navigate = useNavigate();
  const [statusFilter, setStatusFilter] = useState('all');
  const [brandFilter, setBrandFilter] = useState('all');
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [jobToDelete, setJobToDelete] = useState(null);

  const { data: brands } = useBrands();
  const { data: jobs, isLoading, error } = useOptimizations(
    statusFilter === 'all' ? null : statusFilter,
    brandFilter === 'all' ? null : brandFilter,
  );
  const deleteJob = useDeleteOptimization();
  const analyzeContent = useAnalyzeContent();

  const handleNewOptimization = () => {
    navigate('/optimize/new');
  };

  const handleRowClick = (jobId) => {
    navigate(`/optimize/${jobId}`);
  };

  const handleDeleteClick = (e, jobId) => {
    e.stopPropagation();
    e.preventDefault();
    setJobToDelete(jobId);
    setDeleteDialogOpen(true);
  };

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

  const handleAnalyze = (e, jobId) => {
    e.stopPropagation();
    e.preventDefault();
    analyzeContent.mutate(jobId, {
      onSuccess: () => {
        toast.success('Analysis started');
      },
      onError: (error) => {
        toast.error(`Failed to start analysis: ${error.message}`);
      },
    });
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString();
  };

  const truncateUrl = (url) => {
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
  };

  if (error) {
    return (
      <div className="container mx-auto py-10">
        <Card>
          <CardHeader>
            <CardTitle>Error</CardTitle>
            <CardDescription className="text-red-500">
              Failed to load optimization jobs: {error.message}
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    );
  }

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-foreground mb-2">Optimize Content</h1>
        <p className="text-sm text-muted-foreground">
          Analyze existing content and get SEO improvement recommendations
        </p>
      </div>

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
            <Button onClick={handleNewOptimization}>
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
          ) : jobs && jobs.length === 0 ? (
            <div className="text-center py-16 text-muted-foreground">
              <p className="text-lg mb-2">No optimization jobs yet</p>
              <p className="text-sm">Analyze your first page to get started!</p>
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
                {jobs?.map((job) => (
                  <TableRow
                    key={job.id}
                    onClick={() => handleRowClick(job.id)}
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
                      <StatusBadge status={job.action} />
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
                            onClick={(e) => handleAnalyze(e, job.id)}
                            disabled={analyzeContent.isPending}
                          >
                            <Play className="h-3 w-3" />
                          </Button>
                        )}
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={(e) => handleDeleteClick(e, job.id)}
                          disabled={deleteJob.isPending || job.action === 'Analyzing' || job.action === 'Rewriting'}
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
    </div>
  );
}
