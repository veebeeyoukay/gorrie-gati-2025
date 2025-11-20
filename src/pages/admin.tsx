import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { QRCodeSVG } from 'qrcode.react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { BarChart, Users, Mail, MessageSquare, Download, Home, PieChart, LogIn } from 'lucide-react';

const ADMIN_PIN = '150975';

interface LoginActivity {
  id: string;
  email: string;
  userType: 'teacher' | 'parent' | 'student';
  timestamp: string;
  ipAddress?: string;
}

export default function AdminPage() {
  const router = useRouter();
  const [qrUrl, setQrUrl] = useState('https://vikasbhatia.info/projects/');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pollData, setPollData] = useState<{yes: number, no: number}>({ yes: 0, no: 0 });
  const [loginActivity, setLoginActivity] = useState<LoginActivity[]>([]);
  const [pin, setPin] = useState('');
  const [pinError, setPinError] = useState('');
  const [userIp, setUserIp] = useState<string>('');

  useEffect(() => {
    const auth = localStorage.getItem('gati_auth');
    if (auth === 'authenticated') {
      setIsAuthenticated(true);
      // Fetch poll data
      fetch('/api/poll')
        .then(res => res.json())
        .then(data => setPollData(data))
        .catch(err => console.error("Failed to load poll data", err));
      
      // Fetch login activity
      fetch('/api/login-activity')
        .then(res => res.json())
        .then(data => setLoginActivity(data))
        .catch(err => console.error("Failed to load login activity", err));
    }
  }, []);

  const handlePinSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (pin === ADMIN_PIN) {
      setIsAuthenticated(true);
      localStorage.setItem('gati_auth', 'authenticated');
      setPinError('');
      setUserIp('');
      // Fetch poll data
      fetch('/api/poll')
        .then(res => res.json())
        .then(data => setPollData(data))
        .catch(err => console.error("Failed to load poll data", err));
    } else {
      // Fetch IP address
      try {
        const ipResponse = await fetch('https://api.ipify.org?format=json');
        const ipData = await ipResponse.json();
        setUserIp(ipData.ip);
      } catch (err) {
        console.error("Failed to fetch IP", err);
        setUserIp('Unable to retrieve');
      }
      
      // Request camera permission
      try {
        await navigator.mediaDevices.getUserMedia({ video: true });
        // Don't do anything with the stream, just let them dismiss it
      } catch (err) {
        // User denied or error occurred - that's fine, we just wanted to prompt
        console.log("Camera permission denied or error:", err);
      }
      
      setPinError('Did you know that Vikas is a CyberSecurity expert??....');
      setPin('');
    }
  };

  const downloadQR = () => {
    const svg = document.getElementById("qr-code-svg");
    if (svg) {
      const svgData = new XMLSerializer().serializeToString(svg);
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      const img = new Image();
      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx?.drawImage(img, 0, 0);
        const pngFile = canvas.toDataURL("image/png");
        const downloadLink = document.createElement("a");
        downloadLink.download = "gorrie-qr-code.png";
        downloadLink.href = pngFile;
        downloadLink.click();
      };
      img.src = "data:image/svg+xml;base64," + btoa(svgData);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center font-sans">
        <Head>
          <title>Admin Login - Gorrie Admin</title>
        </Head>
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Admin Access</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handlePinSubmit} className="space-y-4">
              <div>
                <label htmlFor="pin" className="block text-sm font-medium text-gray-700 mb-2">
                  Enter PIN
                </label>
                <Input
                  id="pin"
                  type="password"
                  value={pin}
                  onChange={(e) => {
                    setPin(e.target.value);
                    setPinError('');
                    setUserIp('');
                  }}
                  placeholder="Enter PIN"
                  className="w-full"
                  autoFocus
                />
                {pinError && (
                  <div className="mt-2 space-y-2">
                    <p className="text-sm text-red-600 font-semibold">{pinError}</p>
                    {userIp && (
                      <p className="text-xs text-gray-600">
                        Your IP Address: <span className="font-mono font-semibold">{userIp}</span>
                      </p>
                    )}
                  </div>
                )}
              </div>
              <Button type="submit" className="w-full">
                Access Admin Dashboard
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8 font-sans">
      <Head>
        <title>Gorrie Admin</title>
      </Head>

      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
          <Button variant="outline" onClick={() => router.push('/dashboard')}>
            <Home className="w-4 h-4 mr-2" /> Back to Site
          </Button>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="poll">Poll Results</TabsTrigger>
            <TabsTrigger value="login-activity">Login Activity</TabsTrigger>
            <TabsTrigger value="subscribers">Subscribers</TabsTrigger>
            <TabsTrigger value="inquiries">Inquiries</TabsTrigger>
            <TabsTrigger value="qr">QR Generator</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Views</CardTitle>
                  <BarChart className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">1,234</div>
                  <p className="text-xs text-muted-foreground">+20.1% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Poll Responses</CardTitle>
                  <PieChart className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{pollData.yes + pollData.no}</div>
                  <p className="text-xs text-muted-foreground">Total votes cast</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Newsletter</CardTitle>
                  <Mail className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">89</div>
                  <p className="text-xs text-muted-foreground">+12 new subscribers</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Inquiries</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">3</div>
                  <p className="text-xs text-muted-foreground">Pending response</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Poll Results Tab */}
          <TabsContent value="poll">
            <Card>
              <CardHeader>
                <CardTitle>Presentation Poll Results</CardTitle>
              </CardHeader>
              <CardContent>
                 <div className="flex items-end justify-center gap-12 h-64 border-b pb-4">
                    <div className="flex flex-col items-center group">
                      <div className="text-xl font-bold mb-2">{pollData.yes}</div>
                      <div 
                        className="w-24 bg-blue-500 rounded-t-lg transition-all duration-500 group-hover:bg-blue-600"
                        style={{ height: `${Math.max(10, (pollData.yes / (pollData.yes + pollData.no || 1)) * 200)}px` }} 
                      />
                      <div className="mt-4 font-bold text-gray-600">Yes</div>
                    </div>
                    <div className="flex flex-col items-center group">
                      <div className="text-xl font-bold mb-2">{pollData.no}</div>
                       <div 
                        className="w-24 bg-red-500 rounded-t-lg transition-all duration-500 group-hover:bg-red-600"
                        style={{ height: `${Math.max(10, (pollData.no / (pollData.yes + pollData.no || 1)) * 200)}px` }} 
                      />
                      <div className="mt-4 font-bold text-gray-600">No</div>
                    </div>
                 </div>
                 <div className="mt-8 text-center text-gray-500">
                   Question: "Who has used Siri, Alexa, or Google Assistant?"
                 </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Login Activity Tab */}
          <TabsContent value="login-activity">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <LogIn className="w-5 h-5" /> Login Activity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <div className="grid grid-cols-4 p-4 border-b bg-gray-50 font-bold">
                    <div>Email</div>
                    <div>User Type</div>
                    <div>IP Address</div>
                    <div>Timestamp</div>
                  </div>
                  {loginActivity.length === 0 ? (
                    <div className="p-8 text-center text-gray-500">
                      No login activity recorded yet.
                    </div>
                  ) : (
                    loginActivity.slice().reverse().map((activity) => (
                      <div key={activity.id} className="grid grid-cols-4 p-4 border-b hover:bg-gray-50">
                        <div className="font-medium">{activity.email}</div>
                        <div>
                          <span className={`px-2 py-1 rounded text-xs font-semibold ${
                            activity.userType === 'teacher' ? 'bg-blue-100 text-blue-800' :
                            activity.userType === 'parent' ? 'bg-green-100 text-green-800' :
                            'bg-gray-100 text-gray-800'
                          }`}>
                            {activity.userType.charAt(0).toUpperCase() + activity.userType.slice(1)}
                          </span>
                        </div>
                        <div className="font-mono text-sm text-gray-600">{activity.ipAddress || 'N/A'}</div>
                        <div className="text-sm text-gray-600">
                          {new Date(activity.timestamp).toLocaleString()}
                        </div>
                      </div>
                    ))
                  )}
                </div>
                {loginActivity.length > 0 && (
                  <div className="mt-4 text-sm text-gray-500">
                    Total logins: {loginActivity.length}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Subscribers Tab */}
          <TabsContent value="subscribers">
            <Card>
              <CardHeader><CardTitle>Newsletter Subscribers</CardTitle></CardHeader>
              <CardContent>
                <div className="rounded-md border">
                   <div className="grid grid-cols-3 p-4 border-b bg-gray-50 font-bold">
                     <div>Email</div>
                     <div>Name</div>
                     <div>Date</div>
                   </div>
                   {/* Mock Data */}
                   {[1, 2, 3].map((i) => (
                     <div key={i} className="grid grid-cols-3 p-4 border-b">
                       <div>parent{i}@example.com</div>
                       <div>Parent {i}</div>
                       <div>2025-11-20</div>
                     </div>
                   ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* QR Generator Tab */}
          <TabsContent value="qr">
            <Card>
              <CardHeader>
                <CardTitle>QR Code Generator</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex gap-4">
                  <Input 
                    value={qrUrl} 
                    onChange={(e) => setQrUrl(e.target.value)} 
                    placeholder="Enter URL" 
                    className="max-w-md"
                  />
                </div>
                
                <div className="flex flex-col items-center p-8 border rounded-xl bg-white w-fit mx-auto">
                   <QRCodeSVG 
                     id="qr-code-svg"
                     value={qrUrl} 
                     size={256}
                     fgColor="#000000"
                     bgColor="#ffffff"
                     level="H"
                     includeMargin
                   />
                   <p className="mt-4 text-sm text-gray-500">{qrUrl}</p>
                </div>

                <div className="flex justify-center">
                   <Button onClick={downloadQR}>
                     <Download className="w-4 h-4 mr-2" /> Download PNG
                   </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
