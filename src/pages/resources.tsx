import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Home, ShieldCheck, BookOpen, HelpCircle, Briefcase, Mail, Linkedin, Download, ExternalLink } from 'lucide-react';

export default function ResourcesPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Head>
        <title>Gorrie AI Resources</title>
      </Head>

      {/* Hero / Header */}
      <div className="bg-gradient-to-br from-red-700 to-black text-white py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <Button variant="ghost" className="text-white/80 hover:text-white mb-6 p-0 hover:bg-transparent" onClick={() => router.push('/dashboard')}>
            <Home className="w-5 h-5 mr-2" /> Back to Dashboard
          </Button>
          <h1 className="text-4xl md:text-6xl font-bold font-heading mb-4">Parent Resource Hub</h1>
          <p className="text-xl text-red-100 max-w-2xl">
            Everything you need to guide your child's journey with Artificial Intelligence safely and creatively.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 py-12 -mt-8">
        <Tabs defaultValue="summary" className="space-y-8">
          
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 bg-white p-1 shadow-md rounded-xl h-auto">
            <TabsTrigger value="summary" className="py-3">Summary</TabsTrigger>
            <TabsTrigger value="safety" className="py-3">Safety</TabsTrigger>
            <TabsTrigger value="tools" className="py-3">Tools</TabsTrigger>
            <TabsTrigger value="faq" className="py-3">FAQ</TabsTrigger>
            <TabsTrigger value="consulting" className="py-3 bg-orange-50 text-orange-700 data-[state=active]:bg-orange-100 data-[state=active]:text-orange-900 font-bold border-l">Consulting</TabsTrigger>
          </TabsList>

          {/* SUMMARY TAB */}
          <TabsContent value="summary" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>What We Learned Today</CardTitle>
                <CardDescription>Key concepts covered in the Great American Teach-In presentation</CardDescription>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <span className="bg-green-100 text-green-700 font-bold px-2 py-1 rounded text-sm h-fit">Prediction</span>
                    <span>AI isn't magic; it's math. It predicts the next word in a sentence based on patterns it learned from reading millions of books.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="bg-blue-100 text-blue-700 font-bold px-2 py-1 rounded text-sm h-fit">Prompting</span>
                    <span>The way we ask questions matters. "Garbage in, garbage out." Specific questions get better answers.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="bg-purple-100 text-purple-700 font-bold px-2 py-1 rounded text-sm h-fit">Tokens</span>
                    <span>Computers read in chunks called "tokens" (like syllables), not whole words.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="bg-red-100 text-red-700 font-bold px-2 py-1 rounded text-sm h-fit">Safety</span>
                    <span>AI is a tool. We must protect our personal information and always verify what AI tells us.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          {/* SAFETY TAB */}
          <TabsContent value="safety" className="space-y-6">
             <div className="grid md:grid-cols-2 gap-6">
               <Card className="bg-red-50 border-red-200">
                 <CardHeader>
                   <CardTitle className="flex items-center gap-2 text-red-800"><ShieldCheck /> Core Safety Rules</CardTitle>
                 </CardHeader>
                 <CardContent>
                   <ul className="list-disc pl-5 space-y-2 text-red-900">
                     <li>Never share full name, address, or school name.</li>
                     <li>Don't upload photos of yourself or friends.</li>
                     <li>Treat AI like a stranger in a park - polite but cautious.</li>
                     <li>If an answer feels weird or scary, tell an adult immediately.</li>
                   </ul>
                 </CardContent>
               </Card>
               
               <Card>
                 <CardHeader>
                   <CardTitle>Official Resources</CardTitle>
                 </CardHeader>
                 <CardContent className="space-y-4">
                    <a href="#" className="flex items-center justify-between p-3 hover:bg-slate-50 rounded border">
                      <div>
                        <div className="font-bold">CISA AI Safety Guidelines</div>
                        <div className="text-sm text-gray-500">US Cybersecurity & Infrastructure Agency</div>
                      </div>
                      <ExternalLink className="w-4 h-4 text-gray-400" />
                    </a>
                    <a href="#" className="flex items-center justify-between p-3 hover:bg-slate-50 rounded border">
                      <div>
                        <div className="font-bold">Florida Dept of Education</div>
                        <div className="text-sm text-gray-500">Digital Citizenship Resources</div>
                      </div>
                      <ExternalLink className="w-4 h-4 text-gray-400" />
                    </a>
                 </CardContent>
               </Card>
             </div>
          </TabsContent>

          {/* TOOLS TAB */}
          <TabsContent value="tools" className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>ChatGPT (OpenAI)</CardTitle>
                  <CardDescription>Best for writing & chatting</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-sm font-bold text-orange-600 mb-2">Supervision: HIGH</div>
                  <p className="text-sm text-gray-600">The most popular tool. Great for stories and explanations. Requires account (13+).</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Claude (Anthropic)</CardTitle>
                  <CardDescription>Safe & creative</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-sm font-bold text-yellow-600 mb-2">Supervision: MEDIUM</div>
                  <p className="text-sm text-gray-600">Known for being safer and harder to trick. Excellent at writing stories.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Canva Magic</CardTitle>
                  <CardDescription>Visual creativity</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-sm font-bold text-green-600 mb-2">Supervision: LOW</div>
                  <p className="text-sm text-gray-600">Built into Canva. Great for generating images and design elements for school projects.</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* FAQ TAB */}
          <TabsContent value="faq">
             <Card>
               <CardHeader><CardTitle>Frequently Asked Questions</CardTitle></CardHeader>
               <CardContent>
                 <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                      <AccordionTrigger>Should I let my child use ChatGPT?</AccordionTrigger>
                      <AccordionContent>
                        Yes, but with supervision. Treat it like a collaborative activity. Sit with them, ask questions together, and discuss the answers.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>Will AI replace homework?</AccordionTrigger>
                      <AccordionContent>
                        AI changes homework. Instead of just writing an essay, students might edit an AI essay or fact-check it. It shifts focus from production to critical thinking.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>How do I turn on parental controls?</AccordionTrigger>
                      <AccordionContent>
                        Most AI tools don't have strict "parental controls" yet. The best control is shared usage and keeping screens in public family areas.
                      </AccordionContent>
                    </AccordionItem>
                 </Accordion>
               </CardContent>
             </Card>
          </TabsContent>

          {/* CONSULTING TAB (Marketing) */}
          <TabsContent value="consulting">
             <Card className="border-orange-200 bg-orange-50/50 overflow-hidden">
               <div className="absolute top-0 right-0 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                 HIRE ME
               </div>
               <CardContent className="p-8 md:p-12">
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                     <div className="flex-1 space-y-6">
                        <h2 className="text-3xl font-bold text-gray-900">Vikas Bhatia Consulting</h2>
                        <p className="text-lg text-gray-700">
                          With 26 years of experience in Cybersecurity and AI, I help schools and organizations navigate the digital future safely and effectively.
                        </p>
                        
                        <div className="space-y-4">
                           <h3 className="font-bold text-gray-900 flex items-center gap-2"><Briefcase className="w-5 h-5" /> Services</h3>
                           <ul className="grid md:grid-cols-2 gap-2 text-gray-600">
                             <li className="flex items-center gap-2">• AI Safety Workshops</li>
                             <li className="flex items-center gap-2">• Teacher Training</li>
                             <li className="flex items-center gap-2">• Digital Citizenship</li>
                             <li className="flex items-center gap-2">• Security Audits</li>
                           </ul>
                        </div>

                        <div className="flex flex-wrap gap-4 pt-4">
                           <Button className="bg-black hover:bg-gray-800 text-white">
                             <Mail className="w-4 h-4 mr-2" /> Contact Me
                           </Button>
                           <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                             <Linkedin className="w-4 h-4 mr-2" /> LinkedIn
                           </Button>
                        </div>
                     </div>
                     
                     {/* Newsletter Signup Form */}
                     <div className="flex-1 w-full bg-white p-6 rounded-xl shadow-sm border border-orange-100">
                        <h3 className="font-bold text-xl mb-4">Stay Updated</h3>
                        <p className="text-sm text-gray-500 mb-4">Get monthly tips on AI safety and education tools.</p>
                        <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                           <input className="w-full p-2 border rounded" placeholder="Your Name" />
                           <input className="w-full p-2 border rounded" placeholder="Email Address" type="email" />
                           <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white">Subscribe</Button>
                        </form>
                     </div>
                  </div>
               </CardContent>
             </Card>
          </TabsContent>

        </Tabs>
      </div>
    </div>
  );
}

