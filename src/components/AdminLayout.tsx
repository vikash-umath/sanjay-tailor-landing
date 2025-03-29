
import { useState } from 'react';
import { Link, Outlet, useLocation, Navigate } from 'react-router-dom';
import { Image } from '@/components/ui/image';
import { SidebarProvider, Sidebar, SidebarContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from '@/components/ui/sidebar';
import { GalleryHorizontal, Image as ImageIcon, PlusCircle, Settings, Layers } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';

const AdminLayout = () => {
  const location = useLocation();
  const { isAuthenticated, isAdmin } = useAuth();
  
  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  
  // Redirect to home if not admin
  if (!isAdmin) {
    return <Navigate to="/" replace />;
  }
  
  return (
    <SidebarProvider defaultOpen={true}>
      <div className="flex min-h-screen bg-tailor-light-gray">
        <Sidebar>
          <SidebarContent>
            <div className="flex items-center gap-2 px-4 py-4">
              <Image 
                src="/lovable-uploads/b0cdfdea-dced-4249-aea8-afe1923cb8eb.png" 
                alt="Sanjay Men's Tailors" 
                className="h-10 w-10"
              />
              <h1 className="text-xl font-bold">
                Admin Panel
              </h1>
            </div>
            
            <SidebarMenu>
              <SidebarMenuItem>
                <Link to="/admin">
                  <SidebarMenuButton 
                    isActive={location.pathname === '/admin'} 
                    tooltip="Dashboard"
                  >
                    <Settings size={20} className="mr-2" />
                    <span>Dashboard</span>
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>
              
              <SidebarMenuItem>
                <Link to="/admin/categories">
                  <SidebarMenuButton 
                    isActive={location.pathname === '/admin/categories'} 
                    tooltip="Categories"
                  >
                    <Layers size={20} className="mr-2" />
                    <span>Categories</span>
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <Link to="/admin/gallery">
                  <SidebarMenuButton 
                    isActive={location.pathname === '/admin/gallery'} 
                    tooltip="Gallery"
                  >
                    <GalleryHorizontal size={20} className="mr-2" />
                    <span>Gallery</span>
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>
              
              <SidebarMenuItem>
                <Link to="/admin/add-item">
                  <SidebarMenuButton 
                    isActive={location.pathname === '/admin/add-item'} 
                    tooltip="Add New"
                  >
                    <PlusCircle size={20} className="mr-2" />
                    <span>Add New</span>
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarContent>
        </Sidebar>
        
        <div className="flex flex-1 flex-col">
          <header className="bg-white border-b border-tailor-cream h-16 flex items-center px-6 shadow-sm">
            <div className="flex-1"></div>
            <Link to="/" className="text-tailor-navy hover:text-tailor-gold transition-colors">
              View Site
            </Link>
          </header>
          
          <main className="flex-1 p-6">
            <Outlet />
          </main>
          
          <footer className="developer-attribution">
            Developed by <a href="https://www.mahitechnocrafts.in/" target="_blank" rel="noopener noreferrer">Mahi Technocrafts</a>
          </footer>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default AdminLayout;
