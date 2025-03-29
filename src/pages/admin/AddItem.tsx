
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Image as ImageIcon, Upload, CheckCircle2 } from 'lucide-react';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Image } from '@/components/ui/image';

const AddItem = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    imageUrl: '',
    imageFile: null as File | null,
    imagePreview: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const categories = [
    { id: 'kurta-pajama', name: 'Kurta Pajama' },
    { id: 'coat-pant', name: 'Coat & Pant' },
    { id: 'shirt', name: 'Shirts' }
  ];
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSelectChange = (value: string) => {
    setFormData({
      ...formData,
      category: value
    });
  };
  
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData({
        ...formData,
        imageFile: file,
        imagePreview: reader.result as string
      });
    };
    reader.readAsDataURL(file);
  };
  
  const handleExternalImageUrl = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      imageUrl: e.target.value,
      imagePreview: e.target.value
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.title.trim()) {
      toast({
        title: 'Error',
        description: 'Title is required',
        variant: 'destructive'
      });
      return;
    }
    
    if (!formData.category) {
      toast({
        title: 'Error',
        description: 'Category is required',
        variant: 'destructive'
      });
      return;
    }
    
    if (!formData.imagePreview) {
      toast({
        title: 'Error',
        description: 'Image is required',
        variant: 'destructive'
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // In a real application, you would upload the image and save to database
    setTimeout(() => {
      toast({
        title: 'Success',
        description: 'Gallery item added successfully',
      });
      
      setIsSubmitting(false);
      navigate('/admin/gallery');
    }, 1500);
  };
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-tailor-navy">Add Gallery Item</h1>
      </div>
      
      <form onSubmit={handleSubmit}>
        <Card>
          <CardHeader>
            <CardTitle className="text-xl text-tailor-navy flex items-center">
              <ImageIcon className="mr-2 h-5 w-5 text-tailor-gold" />
              Item Details
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Title <span className="text-red-500">*</span></Label>
                  <Input
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    placeholder="Enter title"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Enter description"
                    rows={4}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="category">Category <span className="text-red-500">*</span></Label>
                  <Select value={formData.category} onValueChange={handleSelectChange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a category" />
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
              </div>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Upload Image <span className="text-red-500">*</span></Label>
                  <div className="border-2 border-dashed border-tailor-cream rounded-lg p-6 text-center">
                    {formData.imagePreview ? (
                      <div className="relative">
                        <Image 
                          src={formData.imagePreview} 
                          alt="Preview" 
                          className="max-h-40 mx-auto"
                        />
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          className="mt-4"
                          onClick={() => setFormData({...formData, imageFile: null, imagePreview: '', imageUrl: ''})}
                        >
                          Remove Image
                        </Button>
                      </div>
                    ) : (
                      <>
                        <Upload className="h-10 w-10 text-tailor-gold mx-auto mb-2" />
                        <p className="text-sm text-gray-600 mb-2">Drag & drop an image here, or click to browse</p>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleImageChange}
                          className="hidden"
                          id="image-upload"
                        />
                        <label htmlFor="image-upload">
                          <Button
                            type="button"
                            variant="outline"
                            className="mx-auto border-tailor-gold/50 hover:border-tailor-gold hover:bg-tailor-cream/10 text-tailor-navy"
                          >
                            Select Image
                          </Button>
                        </label>
                      </>
                    )}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="imageUrl">Or use external image URL</Label>
                  <Input
                    id="imageUrl"
                    name="imageUrl"
                    value={formData.imageUrl}
                    onChange={handleExternalImageUrl}
                    placeholder="https://example.com/image.jpg"
                  />
                </div>
              </div>
            </div>
            
            <div className="flex justify-end gap-3">
              <Button 
                type="button" 
                variant="outline"
                onClick={() => navigate('/admin/gallery')}
              >
                Cancel
              </Button>
              <Button 
                type="submit" 
                className="bg-tailor-gold hover:bg-tailor-gold/80 text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="mr-2">Saving...</span>
                    <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  </>
                ) : (
                  <>
                    <CheckCircle2 className="mr-2 h-4 w-4" />
                    Save Item
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>
      </form>
    </div>
  );
};

export default AddItem;
