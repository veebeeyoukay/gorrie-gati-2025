import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Lock, ShieldCheck } from "lucide-react";

export default function LandingPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('gati_auth');
    if (isAuthenticated === 'true') {
      router.push('/dashboard');
    }
  }, [router]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'Vikasbhatiauk' && password === 'Password') {
      localStorage.setItem('gati_auth', 'true');
      router.push('/dashboard');
    } else {
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-600 to-black p-4">
      <Card className="w-full max-w-md border-2 border-orange-500 shadow-2xl">
        <CardHeader className="text-center space-y-4">
          <div className="mx-auto bg-orange-100 p-3 rounded-full w-fit">
            <ShieldCheck className="w-10 h-10 text-orange-600" />
          </div>
          <CardTitle className="text-3xl font-bold text-red-700 font-heading">
            Gorrie Elementary
          </CardTitle>
          <CardDescription className="text-lg">
            Great American Teach-In 2025
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input 
                id="username" 
                placeholder="Enter username" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="border-gray-300 focus:border-red-500 focus:ring-red-500"
              />
        </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input 
                id="password" 
                type="password" 
                placeholder="Enter password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border-gray-300 focus:border-red-500 focus:ring-red-500"
              />
        </div>
            {error && <p className="text-sm text-red-600 font-medium">{error}</p>}
            <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2">
              <Lock className="w-4 h-4 mr-2" />
              Access Presentation
            </Button>
          </form>
        </CardContent>
        <CardFooter className="text-center text-xs text-gray-500 flex justify-center">
          Protected Content • Authorized Access Only
        </CardFooter>
      </Card>
    </div>
  );
}
