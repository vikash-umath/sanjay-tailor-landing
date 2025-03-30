
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useAuth } from '@/hooks/useAuth';
import { Image } from '@/components/ui/image';
import { useDispatch } from 'react-redux';
import { setToken, setUser } from "@/redux/authSlice";
import axios from "axios"
import Swal from 'sweetalert2';

interface LocationState {
  from?: {
    pathname: string;
  };
}

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const locationState = location.state as LocationState;
  const from = locationState?.from?.pathname || '/admin';
  const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
  
    try {
      const response = await axios.post(`${BASE_URL}/auth/login`, { email: username, password });
  
      if (response?.status === 200) {
        console.log("enter ");
        dispatch(setToken(response.data.token));
        dispatch(setUser(response.data.user));
  
        // ✅ Show success alert
        Swal.fire({
          title: "Login Successful!",
          text: "Welcome to the admin panel.",
          icon: "success",
          confirmButtonText: "OK",
        });
  
      }
    } catch (error) {
      // ❌ Show error alert
      Swal.fire({
        title: "Login Failed!",
        text: "Invalid username or password.",
        icon: "error",
        confirmButtonText: "Try Again",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 flex items-center justify-center py-16 px-4 bg-gray-50">
        <Card className="w-full max-w-md shadow-lg border-tailor-gold/20">
          <CardHeader className="space-y-1 text-center">
            <div className="flex justify-center mb-4">
              <Image 
                src="/lovable-uploads/logo.png" 
                alt="Sanjay Men's Tailors" 
                className="h-16 w-16"
              />
            </div>
            <CardTitle className="text-2xl font-bold text-tailor-navy">Admin Login</CardTitle>
            <CardDescription>
              Enter your credentials to access the admin panel
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input 
                  id="username" 
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input 
                  id="password" 
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button 
                type="submit" 
                className="w-full bg-tailor-gold hover:bg-tailor-gold/90 text-white"
                disabled={isLoading}
              >
                {isLoading ? "Logging in..." : "Sign In"}
              </Button>
            </CardFooter>
          </form>
        </Card>
      </main>
      
      <Footer />
    </div>
  );
};

export default Login;
