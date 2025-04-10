
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
import { imageUpload ,createGallery} from '../../services/operation/admin'
import Dropzone from "react-dropzone";


const AddItem = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [images, setImages] = useState([]);

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


  const handleSubmit = async (e: React.FormEvent) => {
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
  

  
    setIsSubmitting(true);
  
    try {
      let uploadedImageUrl = formData.imageUrl; // If external URL is provided, use it
  
      if (formData.imageFile) {
        // Upload image to the server
        const uploadedImages = await imageUpload([formData.imageFile]);
        if (uploadedImages.length > 0) {
          uploadedImageUrl = uploadedImages[0].url;
        }
      }
  
      // Prepare final form data
      const finalData = {
        title: formData.title,
        description: formData.description,
        category: formData.category,
        images: images, // Store the uploaded image URL
      };
      await createGallery(finalData);
  
      console.log("Submitting data:", finalData);
      
      // Fake API call simulation (Replace with actual API call)
      setTimeout(() => {
        toast({
          title: 'Success',
          description: 'Gallery item added successfully',
        });
  
        setIsSubmitting(false);
        navigate('/admin/gallery');
      }, 1500);
    } catch (error) {
      console.error("Image upload error:", error);
      toast({
        title: 'Error',
        description: 'Failed to upload image',
        variant: 'destructive'
      });
      setIsSubmitting(false);
    }
  };
  



  const uploadImage = async (acceptedFiles) => {
    const response = await imageUpload(acceptedFiles);
    const uploadedImages = response?.map((image) => ({
      public_id: image.asset_id,
      url: image.url,
    }));
    setImages((prevImages) => [...prevImages, ...uploadedImages]);
  };

  const removeImage = (publicId) => {
    const updatedImages = images.filter(
      (image) => image.public_id !== publicId
    );
    setImages(updatedImages);
  };


  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h4 className="text-3xl font-bold text-tailor-navy">Add Gallery Item</h4>
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
                    {(
                      <div>
                        <div className="space-y-2 ">
                      
                          <Dropzone onDrop={uploadImage}>
                            {({ getRootProps, getInputProps }) => (
                              <section>
                                <div
                                  {...getRootProps()}
                                  className="border-2 border-dashed p-4 text-center cursor-pointer"
                                >
                                  <input {...getInputProps()} />
                                  <p>
                                    Drag 'n' drop some files here, or click to select files
                                  </p>
                                </div>
                                <aside className="mt-4">
                                  <div className="grid grid-cols-4 gap-2">
                                    {images?.map((image) => (
                                      <div key={image.public_id} className="relative">
                                        <h4>Uploaded Images</h4>
                                        <img
                                          src={image.url}
                                          alt="Uploaded"
                                          className="h-24 w-full object-cover"
                                        />
                                        <button
                                          type="button"
                                          onClick={() => removeImage(image.public_id)}
                                          className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-full"
                                        >
                                          X
                                        </button>
                                      </div>
                                    ))}
                                  </div>
                                </aside>
                              </section>
                            )}
                          </Dropzone>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* <div className="space-y-2">
                  <Label htmlFor="imageUrl">Or use external image URL</Label>
                  <Input
                    id="imageUrl"
                    name="imageUrl"
                    value={formData.imageUrl}
                    onChange={handleExternalImageUrl}
                    placeholder="https://example.com/image.jpg"
                  />
                </div> */}
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
