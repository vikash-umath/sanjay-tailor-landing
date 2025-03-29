
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Image as ImageIcon, Edit, Trash, Search, Filter } from 'lucide-react';
import { Image } from '@/components/ui/image';
import { 
  Dialog, 
  DialogContent, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger,
  DialogClose
} from '@/components/ui/dialog';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from '@/hooks/use-toast';

interface GalleryItem {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
}

const Gallery = () => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  
  // This would typically come from a database
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([
    {
      id: 1,
      title: 'Traditional Kurta Pajama',
      description: 'Hand-stitched traditional kurta pajama for special occasions.',
      image: 'https://images.unsplash.com/photo-1604901013586-05036e9a1e25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80',
      category: 'kurta-pajama'
    },
    {
      id: 2,
      title: 'Modern Kurta Design',
      description: 'Contemporary kurta design with minimalist patterns.',
      image: 'https://images.unsplash.com/photo-1580302163583-3ebfcf79b492?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80',
      category: 'kurta-pajama'
    },
    {
      id: 3,
      title: 'Classic Blue Suit',
      description: 'Tailored blue suit with perfect fit and premium fabric.',
      image: 'https://images.unsplash.com/photo-1593032534613-075f7ab3e6a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80',
      category: 'coat-pant'
    },
    {
      id: 4,
      title: 'Formal Black Suit',
      description: 'Elegant black suit for formal occasions and events.',
      image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80',
      category: 'coat-pant'
    },
    {
      id: 5,
      title: 'White Formal Shirt',
      description: 'Crisp white formal shirt with custom collar design.',
      image: 'https://images.unsplash.com/photo-1588359348347-9bc6cbbb689e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80',
      category: 'shirt'
    },
    {
      id: 6,
      title: 'Checkered Casual Shirt',
      description: 'Stylish checkered shirt for casual occasions.',
      image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80',
      category: 'shirt'
    },
    {
      id: 7,
      title: 'Casual Blazer',
      description: 'Relaxed blazer for semi-formal occasions.',
      image: 'https://images.unsplash.com/photo-1554774853-719586d82109?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80',
      category: 'coat-pant'
    },
    {
      id: 8,
      title: 'Embroidered Kurta',
      description: 'Handcrafted embroidery on premium fabric kurta.',
      image: 'https://images.unsplash.com/photo-1590073844006-33379778ae09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80',
      category: 'kurta-pajama'
    },
    {
      id: 9,
      title: 'Blue Formal Shirt',
      description: 'Classic blue formal shirt for office wear.',
      image: 'https://images.unsplash.com/photo-1602810319428-019690571b5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80',
      category: 'shirt'
    }
  ]);
  
  const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'kurta-pajama', name: 'Kurta Pajama' },
    { id: 'coat-pant', name: 'Coat & Pant' },
    { id: 'shirt', name: 'Shirts' }
  ];
  
  const handleDeleteItem = (id: number) => {
    setGalleryItems(galleryItems.filter(item => item.id !== id));
    
    toast({
      title: 'Success',
      description: 'Gallery item deleted successfully',
    });
  };
  
  const filteredItems = galleryItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                        item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || item.category === categoryFilter;
    
    return matchesSearch && matchesCategory;
  });
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-tailor-navy">Gallery Management</h1>
        
        <Button 
          asChild
          className="bg-tailor-gold hover:bg-tailor-gold/80 text-white"
        >
          <a href="/admin/add-item">
            <ImageIcon className="mr-2 h-4 w-4" />
            Add New Item
          </a>
        </Button>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle className="text-xl text-tailor-navy flex items-center">
            <Filter className="mr-2 h-4 w-4 text-tailor-gold" />
            Search & Filter
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search gallery items..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map(category => (
                  <SelectItem key={category.id} value={category.id}>
                    {category.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map(item => (
          <Card key={item.id} className="overflow-hidden border-tailor-gold/10 hover:border-tailor-gold/30 transition-all">
            <div className="relative h-48">
              <Image
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end justify-end p-3 gap-2">
                <Button 
                  asChild
                  variant="outline" 
                  size="sm"
                  className="bg-white/90 hover:bg-white"
                >
                  <a href={`/admin/edit-item/${item.id}`}>
                    <Edit className="h-4 w-4 mr-1" /> Edit
                  </a>
                </Button>
                
                <Dialog>
                  <DialogTrigger asChild>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="bg-white/90 hover:bg-white text-red-600"
                    >
                      <Trash className="h-4 w-4 mr-1" /> Delete
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Delete Gallery Item</DialogTitle>
                    </DialogHeader>
                    <p>Are you sure you want to delete "{item.title}"? This action cannot be undone.</p>
                    <DialogFooter>
                      <DialogClose asChild>
                        <Button variant="outline">Cancel</Button>
                      </DialogClose>
                      <DialogClose asChild>
                        <Button 
                          variant="destructive"
                          onClick={() => handleDeleteItem(item.id)}
                        >
                          Delete
                        </Button>
                      </DialogClose>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
            <CardContent className="p-4">
              <h3 className="font-bold text-tailor-navy text-lg">{item.title}</h3>
              <p className="text-gray-600 text-sm line-clamp-2">{item.description}</p>
              <div className="mt-2">
                <span className="inline-block bg-tailor-cream text-tailor-navy text-xs px-2 py-1 rounded">
                  {item.category.replace('-', ' ')}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
        
        {filteredItems.length === 0 && (
          <div className="col-span-full text-center py-12">
            <ImageIcon className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-lg font-medium text-gray-900">No gallery items found</h3>
            <p className="mt-1 text-gray-500">
              {searchTerm || categoryFilter !== 'all' 
                ? 'Try adjusting your search or filter'
                : 'Get started by adding a new gallery item'}
            </p>
            <div className="mt-6">
              <Button
                asChild
                className="bg-tailor-gold hover:bg-tailor-gold/80 text-white"
              >
                <a href="/admin/add-item">
                  <ImageIcon className="mr-2 h-4 w-4" />
                  Add New Item
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
