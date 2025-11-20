import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, MessageSquare, BookOpen, FileText, Settings, LogOut, GraduationCap, Users, School } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Dashboard() {
  const router = useRouter();
  const [gradeLevel, setGradeLevel] = useState<'2nd' | '4th' | null>(null);
  const [audience, setAudience] = useState<'student' | 'parent' | 'teacher' | null>(null);

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('gati_auth');
    if (!isAuthenticated) {
      router.push('/');
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('gati_auth');
    router.push('/');
  };

  const navigateTo = (path: string) => {
    if (gradeLevel && audience) {
       // Store selections in query or local storage
       localStorage.setItem('gati_grade', gradeLevel);
       localStorage.setItem('gati_audience', audience);
       router.push(path);
    } else if (path === '/admin' || path === '/resources' || path === '/handouts') {
       router.push(path); // These might not need grade selection
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 font-sans">
      <Head>
        <title>Gorrie AI Presentation - Dashboard</title>
      </Head>

      <header className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-3">
           {/* Placeholder for Jaguar Logo */}
           <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">J</div>
           <div>
             <h1 className="text-2xl font-bold font-heading text-red-700">Gorrie Elementary</h1>
             <p className="text-gray-600 text-sm">Great American Teach-In 2025</p>
           </div>
        </div>
        <Button variant="ghost" onClick={handleLogout} className="text-red-600 hover:bg-red-50">
          <LogOut className="w-4 h-4 mr-2" /> Logout
        </Button>
      </header>

      <main className="max-w-6xl mx-auto space-y-8">
        
        {/* Selection Section */}
        <section className="space-y-4">
           <h2 className="text-xl font-semibold text-gray-800">1. Select Audience & Grade</h2>
           <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-l-4 border-l-red-500">
                 <CardHeader>
                   <CardTitle className="flex items-center gap-2"><School className="w-5 h-5" /> Grade Level</CardTitle>
                 </CardHeader>
                 <CardContent className="flex gap-4">
                    <Button 
                      onClick={() => setGradeLevel('2nd')} 
                      variant={gradeLevel === '2nd' ? 'default' : 'outline'}
                      className="flex-1"
                    >
                      2nd Grade
                    </Button>
                    <Button 
                      onClick={() => setGradeLevel('4th')} 
                      variant={gradeLevel === '4th' ? 'default' : 'outline'}
                      className="flex-1"
                    >
                      4th Grade
                    </Button>
                 </CardContent>
              </Card>

              <Card className="border-l-4 border-l-orange-500">
                 <CardHeader>
                   <CardTitle className="flex items-center gap-2"><Users className="w-5 h-5" /> Audience Type</CardTitle>
                 </CardHeader>
                 <CardContent className="flex gap-4">
                    <Button 
                      onClick={() => setAudience('student')} 
                      variant={audience === 'student' ? 'default' : 'outline'}
                      className="flex-1"
                    >
                      Student
                    </Button>
                    <Button 
                      onClick={() => setAudience('parent')} 
                      variant={audience === 'parent' ? 'default' : 'outline'}
                      className="flex-1"
                    >
                      Parent
                    </Button>
                    <Button 
                      onClick={() => setAudience('teacher')} 
                      variant={audience === 'teacher' ? 'default' : 'outline'}
                      className="flex-1"
                    >
                      Teacher
                    </Button>
                 </CardContent>
              </Card>
           </div>
        </section>

        {/* Modules Section */}
        <section className={cn("space-y-4 transition-opacity", (!gradeLevel || !audience) && "opacity-50 pointer-events-none")}>
           <h2 className="text-xl font-semibold text-gray-800">2. Launch Module</h2>
           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              <Card className="hover:shadow-lg transition-shadow cursor-pointer group" onClick={() => navigateTo('/presentation')}>
                <CardHeader className="bg-red-50 group-hover:bg-red-100 transition-colors">
                  <Play className="w-8 h-8 text-red-600 mb-2" />
                  <CardTitle>Presentation</CardTitle>
                  <CardDescription>Interactive slides about AI</CardDescription>
                </CardHeader>
                <CardContent className="pt-4">
                   <p className="text-sm text-gray-600">20-minute interactive session with poll, games, and stories.</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow cursor-pointer group" onClick={() => navigateTo('/demo')}>
                <CardHeader className="bg-blue-50 group-hover:bg-blue-100 transition-colors">
                  <MessageSquare className="w-8 h-8 text-blue-600 mb-2" />
                  <CardTitle>AI Chat Demo</CardTitle>
                  <CardDescription>Live Claude/Gemini Chat</CardDescription>
                </CardHeader>
                <CardContent className="pt-4">
                   <p className="text-sm text-gray-600">Safe, kid-friendly chat interface to experience AI.</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow cursor-pointer group" onClick={() => navigateTo('/resources')}>
                <CardHeader className="bg-orange-50 group-hover:bg-orange-100 transition-colors">
                  <BookOpen className="w-8 h-8 text-orange-600 mb-2" />
                  <CardTitle>Parent Hub</CardTitle>
                  <CardDescription>Resources & Safety</CardDescription>
                </CardHeader>
                <CardContent className="pt-4">
                   <p className="text-sm text-gray-600">Guides, safety tips, and tools for families.</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow cursor-pointer group" onClick={() => navigateTo('/handouts')}>
                <CardHeader className="bg-green-50 group-hover:bg-green-100 transition-colors">
                  <FileText className="w-8 h-8 text-green-600 mb-2" />
                  <CardTitle>Handouts</CardTitle>
                  <CardDescription>Printable PDFs</CardDescription>
                </CardHeader>
                <CardContent className="pt-4">
                   <p className="text-sm text-gray-600">Take-home sheets for students and parents.</p>
                </CardContent>
              </Card>

           </div>
        </section>

        {/* Admin Footer */}
        <footer className="pt-8 border-t border-gray-200 flex justify-between items-center">
           <p className="text-sm text-gray-500">© 2025 Vikas Bhatia Consulting</p>
           <Button variant="link" size="sm" className="text-gray-400 hover:text-gray-600" onClick={() => router.push('/admin')}>
             <Settings className="w-4 h-4 mr-1" /> Admin Dashboard
           </Button>
        </footer>

      </main>
    </div>
  );
}

