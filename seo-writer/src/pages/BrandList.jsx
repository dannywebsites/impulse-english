import { useNavigate } from 'react-router-dom';
import { useBrands, useDeleteBrand } from '@/hooks/useBrands';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
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
import { Loader2, Plus, Trash2, Building2 } from 'lucide-react';

export default function BrandList() {
  const navigate = useNavigate();
  const { data: brands, isLoading, error } = useBrands();
  const deleteBrand = useDeleteBrand();
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [brandToDelete, setBrandToDelete] = useState(null);

  const handleDeleteClick = (e, brand) => {
    e.stopPropagation();
    setBrandToDelete(brand);
    setDeleteDialogOpen(true);
  };

  const handleDeleteConfirm = () => {
    if (brandToDelete) {
      deleteBrand.mutate(brandToDelete.id, {
        onSuccess: () => {
          toast.success('Brand deleted');
          setDeleteDialogOpen(false);
          setBrandToDelete(null);
        },
        onError: (error) => {
          toast.error(error.message);
        },
      });
    }
  };

  if (error) {
    return (
      <div className="p-8">
        <p className="text-red-500">Failed to load brands: {error.message}</p>
      </div>
    );
  }

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-foreground mb-2">Brands</h1>
        <p className="text-sm text-muted-foreground">
          Manage your client brands and their content settings
        </p>
      </div>

      <div className="bg-white rounded-lg border border-border">
        <div className="p-6 border-b border-border flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            {brands?.length || 0} brand{brands?.length !== 1 ? 's' : ''}
          </p>
          <Button onClick={() => navigate('/brands/new')}>
            <Plus className="mr-2 h-4 w-4" />
            New Brand
          </Button>
        </div>
        <div>
          {isLoading ? (
            <div className="flex items-center justify-center py-16">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          ) : brands && brands.length === 0 ? (
            <div className="text-center py-16 text-muted-foreground">
              <Building2 className="h-10 w-10 mx-auto mb-3 opacity-30" />
              <p className="text-lg mb-2">No brands yet</p>
              <p className="text-sm mb-4">Create your first brand to get started</p>
              <Button onClick={() => navigate('/brands/new')}>
                <Plus className="mr-2 h-4 w-4" />
                Create Brand
              </Button>
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Company</TableHead>
                  <TableHead>Articles</TableHead>
                  <TableHead>Updated</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {brands?.map((brand) => (
                  <TableRow
                    key={brand.id}
                    onClick={() => navigate(`/brands/${brand.id}`)}
                    className="cursor-pointer hover:bg-muted/50"
                  >
                    <TableCell className="font-medium">{brand.name}</TableCell>
                    <TableCell className="text-muted-foreground">
                      {brand.companyName || '-'}
                    </TableCell>
                    <TableCell>{brand._count?.jobs || 0}</TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                      {new Date(brand.updatedAt).toLocaleDateString()}
                    </TableCell>
                    <TableCell className="text-right" onClick={(e) => e.stopPropagation()}>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={(e) => handleDeleteClick(e, brand)}
                        disabled={deleteBrand.isPending}
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
            <AlertDialogTitle>Delete Brand</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete &quot;{brandToDelete?.name}&quot;?
              {((brandToDelete?._count?.jobs || 0) > 0 || (brandToDelete?._count?.optimizationJobs || 0) > 0) && (
                <> This will permanently delete{' '}
                  {(brandToDelete?._count?.jobs || 0) > 0 && `${brandToDelete._count.jobs} article${brandToDelete._count.jobs !== 1 ? 's' : ''}`}
                  {(brandToDelete?._count?.jobs || 0) > 0 && (brandToDelete?._count?.optimizationJobs || 0) > 0 && ' and '}
                  {(brandToDelete?._count?.optimizationJobs || 0) > 0 && `${brandToDelete._count.optimizationJobs} optimization${brandToDelete._count.optimizationJobs !== 1 ? 's' : ''}`}
                  {' '}associated with this brand.</>
              )}
              {' '}This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDeleteConfirm}
              className="bg-red-500 hover:bg-red-600"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
