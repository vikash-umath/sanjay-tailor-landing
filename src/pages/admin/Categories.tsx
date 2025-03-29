
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Plus, Edit, Trash, Save, X } from 'lucide-react';
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger,
  DialogClose
} from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';

interface Category {
  id: number;
  name: string;
  slug: string;
}

const Categories = () => {
  const { toast } = useToast();
  const [categories, setCategories] = useState<Category[]>([
    { id: 1, name: 'Kurta Pajama', slug: 'kurta-pajama' },
    { id: 2, name: 'Coat & Pant', slug: 'coat-pant' },
    { id: 3, name: 'Shirts', slug: 'shirt' }
  ]);
  
  const [newCategory, setNewCategory] = useState({ name: '', slug: '' });
  const [editCategory, setEditCategory] = useState<Category | null>(null);
  
  const handleAddCategory = () => {
    if (!newCategory.name.trim()) {
      toast({
        title: 'Error',
        description: 'Category name is required',
        variant: 'destructive'
      });
      return;
    }
    
    const slug = newCategory.slug || newCategory.name.toLowerCase().replace(/\s+/g, '-');
    
    setCategories([
      ...categories, 
      { id: categories.length + 1, name: newCategory.name, slug }
    ]);
    
    setNewCategory({ name: '', slug: '' });
    
    toast({
      title: 'Success',
      description: 'Category added successfully',
    });
  };
  
  const handleUpdateCategory = () => {
    if (!editCategory) return;
    
    setCategories(categories.map(cat => 
      cat.id === editCategory.id ? editCategory : cat
    ));
    
    setEditCategory(null);
    
    toast({
      title: 'Success',
      description: 'Category updated successfully',
    });
  };
  
  const handleDeleteCategory = (id: number) => {
    setCategories(categories.filter(cat => cat.id !== id));
    
    toast({
      title: 'Success',
      description: 'Category deleted successfully',
    });
  };
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-tailor-navy">Manage Categories</h1>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle className="text-xl text-tailor-navy flex items-center">
            <Plus className="mr-2 h-4 w-4 text-tailor-gold" />
            Add New Category
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Category Name</Label>
              <Input
                id="name"
                value={newCategory.name}
                onChange={(e) => setNewCategory({...newCategory, name: e.target.value})}
                placeholder="Enter category name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="slug">Slug (optional)</Label>
              <Input
                id="slug"
                value={newCategory.slug}
                onChange={(e) => setNewCategory({...newCategory, slug: e.target.value})}
                placeholder="Enter category slug"
              />
              <p className="text-xs text-gray-500">Leave empty to generate automatically</p>
            </div>
          </div>
          <Button 
            onClick={handleAddCategory} 
            className="mt-4 bg-tailor-gold hover:bg-tailor-gold/80 text-white"
          >
            Add Category
          </Button>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle className="text-xl text-tailor-navy">All Categories</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-tailor-cream">
                  <th className="text-left py-3 px-4">ID</th>
                  <th className="text-left py-3 px-4">Name</th>
                  <th className="text-left py-3 px-4">Slug</th>
                  <th className="text-left py-3 px-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {categories.map((category) => (
                  <tr key={category.id} className="border-b border-tailor-cream hover:bg-tailor-cream/10">
                    <td className="py-3 px-4">{category.id}</td>
                    <td className="py-3 px-4">{category.name}</td>
                    <td className="py-3 px-4">{category.slug}</td>
                    <td className="py-3 px-4 flex gap-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button 
                            variant="outline" 
                            size="sm" 
                            onClick={() => setEditCategory(category)}
                            className="border-tailor-gold/20 hover:border-tailor-gold hover:bg-tailor-cream/10"
                          >
                            <Edit className="h-4 w-4 mr-1" /> Edit
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Edit Category</DialogTitle>
                            <DialogDescription>
                              Make changes to the category here.
                            </DialogDescription>
                          </DialogHeader>
                          {editCategory && (
                            <div className="space-y-4 py-4">
                              <div className="space-y-2">
                                <Label htmlFor="edit-name">Category Name</Label>
                                <Input
                                  id="edit-name"
                                  value={editCategory.name}
                                  onChange={(e) => setEditCategory({...editCategory, name: e.target.value})}
                                />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="edit-slug">Slug</Label>
                                <Input
                                  id="edit-slug"
                                  value={editCategory.slug}
                                  onChange={(e) => setEditCategory({...editCategory, slug: e.target.value})}
                                />
                              </div>
                            </div>
                          )}
                          <DialogFooter>
                            <DialogClose asChild>
                              <Button variant="outline">Cancel</Button>
                            </DialogClose>
                            <DialogClose asChild>
                              <Button 
                                onClick={handleUpdateCategory}
                                className="bg-tailor-gold hover:bg-tailor-gold/80 text-white"
                              >
                                Save Changes
                              </Button>
                            </DialogClose>
                          </DialogFooter>
                        </DialogContent>
                      </Dialog>
                      
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button 
                            variant="outline" 
                            size="sm"
                            className="border-red-200 hover:border-red-500 hover:bg-red-50 text-red-600"
                          >
                            <Trash className="h-4 w-4 mr-1" /> Delete
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Delete Category</DialogTitle>
                            <DialogDescription>
                              Are you sure you want to delete this category? This action cannot be undone.
                            </DialogDescription>
                          </DialogHeader>
                          <DialogFooter>
                            <DialogClose asChild>
                              <Button variant="outline">Cancel</Button>
                            </DialogClose>
                            <DialogClose asChild>
                              <Button 
                                variant="destructive"
                                onClick={() => handleDeleteCategory(category.id)}
                              >
                                Delete
                              </Button>
                            </DialogClose>
                          </DialogFooter>
                        </DialogContent>
                      </Dialog>
                    </td>
                  </tr>
                ))}
                
                {categories.length === 0 && (
                  <tr>
                    <td colSpan={4} className="py-8 text-center text-gray-500">
                      No categories found. Add a new category to get started.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Categories;
