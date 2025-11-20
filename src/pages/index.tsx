import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Lock, ShieldCheck } from "lucide-react";

export default function LandingPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isTeacherOrParent, setIsTeacherOrParent] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('gati_auth');
    if (isAuthenticated === 'true' || isAuthenticated === 'teacher' || isAuthenticated === 'parent') {
      router.push('/dashboard');
    }
  }, [router]);

  const isHCPSEmail = (email: string) => {
    return email.toLowerCase().endsWith('@hcps.net');
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Get IP address for logging
    let ipAddress = 'unknown';
    try {
      const ipResponse = await fetch('https://api.ipify.org?format=json');
      const ipData = await ipResponse.json();
      ipAddress = ipData.ip;
    } catch (err) {
      console.error("Failed to fetch IP", err);
    }

    // Check if it's the original student login
    if (!isTeacherOrParent && email === 'Vikasbhatiauk' && password === 'Password') {
      localStorage.setItem('gati_auth', 'true');
      localStorage.setItem('gati_user_type', 'student');
      localStorage.setItem('gati_email', email);
      
      // Log login activity
      try {
        await fetch('/api/login-activity', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email,
            userType: 'student',
            ipAddress
          })
        });
      } catch (err) {
        console.error("Failed to log activity", err);
      }
      
      router.push('/dashboard');
      return;
    }

    // Teacher/Parent login
    if (isTeacherOrParent) {
      if (isHCPSEmail(email)) {
        // Teacher login - no password required
        localStorage.setItem('gati_auth', 'teacher');
        localStorage.setItem('gati_user_type', 'teacher');
        localStorage.setItem('gati_email', email);
        
        // Log login activity
        try {
          await fetch('/api/login-activity', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              email,
              userType: 'teacher',
              ipAddress
            })
          });
        } catch (err) {
          console.error("Failed to log activity", err);
        }
        
        router.push('/dashboard');
      } else {
        // Parent login - requires password
        if (password === 'Password') {
          localStorage.setItem('gati_auth', 'parent');
          localStorage.setItem('gati_user_type', 'parent');
          localStorage.setItem('gati_email', email);
          
          // Log login activity
          try {
            await fetch('/api/login-activity', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                email,
                userType: 'parent',
                ipAddress
              })
            });
          } catch (err) {
            console.error("Failed to log activity", err);
          }
          
          router.push('/dashboard');
        } else {
          setError('Invalid password. Please try again.');
        }
      }
    } else {
      setError('Please check the box if you are a teacher or parent.');
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
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                type="email"
                placeholder="Enter your email" 
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError('');
                }}
                className="border-gray-300 focus:border-red-500 focus:ring-red-500"
              />
            </div>
            
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="teacherParent"
                checked={isTeacherOrParent}
                onChange={(e) => {
                  setIsTeacherOrParent(e.target.checked);
                  setError('');
                }}
                className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
              />
              <Label htmlFor="teacherParent" className="text-sm font-normal cursor-pointer">
                I am a teacher or parent.
              </Label>
            </div>

            {isTeacherOrParent && !isHCPSEmail(email) && (
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input 
                  id="password" 
                  type="password" 
                  placeholder="Enter password" 
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setError('');
                  }}
                  className="border-gray-300 focus:border-red-500 focus:ring-red-500"
                />
              </div>
            )}

            {isTeacherOrParent && isHCPSEmail(email) && (
              <p className="text-sm text-green-600 font-medium">
                ✓ HCPS email detected. No password required for teachers.
              </p>
            )}

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
