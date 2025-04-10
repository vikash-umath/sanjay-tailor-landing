
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { GalleryHorizontal, Layers, ImageIcon, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  // Mock data - in a real app, this would come from a database
  const stats = {
    totalImages: 9,
    totalCategories: 3,
    recentViews: 124
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h4 className="text-3xl font-bold text-tailor-navy">Admin Dashboard</h4>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-tailor-gold/20 transition-all hover:border-tailor-gold hover:shadow-md">
          <CardHeader className="pb-2">
            <CardTitle className="text-xl flex items-center">
              <GalleryHorizontal className="mr-2 text-tailor-gold" />
              Gallery Items
            </CardTitle>
            <CardDescription>Total images in the gallery</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-tailor-navy">{stats.totalImages}</p>
            <Link to="/admin/gallery" className="mt-4 inline-block text-tailor-gold hover:underline text-sm">
              Manage Gallery →
            </Link>
          </CardContent>
        </Card>

        <Card className="border-tailor-gold/20 transition-all hover:border-tailor-gold hover:shadow-md">
          <CardHeader className="pb-2">
            <CardTitle className="text-xl flex items-center">
              <Layers className="mr-2 text-tailor-gold" />
              Categories
            </CardTitle>
            <CardDescription>Total categories</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-tailor-navy">{stats.totalCategories}</p>
            <Link to="/admin/categories" className="mt-4 inline-block text-tailor-gold hover:underline text-sm">
              Manage Categories →
            </Link>
          </CardContent>
        </Card>

        <Card className="border-tailor-gold/20 transition-all hover:border-tailor-gold hover:shadow-md">
          <CardHeader className="pb-2">
            <CardTitle className="text-xl flex items-center">
              <Eye className="mr-2 text-tailor-gold" />
              Gallery Views
            </CardTitle>
            <CardDescription>Recent views</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-tailor-navy">{stats.recentViews}</p>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl text-tailor-navy">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-3">
            <Button asChild variant="outline" className="border-tailor-gold/20 hover:border-tailor-gold hover:bg-tailor-cream/10">
              <Link to="/admin/add-item">
                <ImageIcon className="mr-2 h-4 w-4" />
                Add New Gallery Item
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-tailor-gold/20 hover:border-tailor-gold hover:bg-tailor-cream/10">
              <Link to="/admin/categories">
                <Layers className="mr-2 h-4 w-4" />
                Manage Categories
              </Link>
            </Button>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-xl text-tailor-navy">Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-3 border-b border-tailor-cream pb-3">
                <div className="w-8 h-8 bg-tailor-gold/10 rounded-full flex items-center justify-center">
                  <ImageIcon className="h-4 w-4 text-tailor-gold" />
                </div>
                <div>
                  <p className="text-sm font-medium">New image added</p>
                  <p className="text-xs text-gray-500">2 hours ago</p>
                </div>
              </div>
              <div className="flex items-center gap-3 border-b border-tailor-cream pb-3">
                <div className="w-8 h-8 bg-tailor-gold/10 rounded-full flex items-center justify-center">
                  <Layers className="h-4 w-4 text-tailor-gold" />
                </div>
                <div>
                  <p className="text-sm font-medium">Category updated</p>
                  <p className="text-xs text-gray-500">1 day ago</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
