import React, { useRef } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Printer, Home, Download, FileText } from 'lucide-react';
import { useReactToPrint } from 'react-to-print';
import { QRCodeSVG } from 'qrcode.react';

// Placeholder components for the actual handout content
// In a real app, these would be separate files imported here
const StudentHandoutContent = React.forwardRef<HTMLDivElement>((props, ref) => (
  <div ref={ref} className="w-[8.5in] h-[11in] p-8 bg-white mx-auto border shadow-lg print:shadow-none print:border-none flex flex-col">
    {/* Header */}
    <div className="flex justify-between items-center mb-8 border-b-4 border-red-600 pb-4">
      <div>
        <h1 className="text-4xl font-bold text-red-700 font-heading">I Learned About AI!</h1>
        <p className="text-xl text-gray-600">Great American Teach-In 2025</p>
      </div>
      <div className="text-right">
        <h2 className="text-2xl font-bold">Gorrie Elementary</h2>
        <p className="text-sm text-gray-500">Home of the Jaguars 🐆</p>
      </div>
    </div>

    {/* Content */}
    <div className="flex-1 space-y-8">
      
      {/* 5 Rules */}
      <div className="bg-gray-50 p-6 rounded-xl border-2 border-dashed border-gray-300">
        <h3 className="text-2xl font-bold mb-4 text-center">🛑 My 5 Safety Rules</h3>
        <ul className="space-y-3 text-lg">
           <li className="flex gap-3 items-center"><span className="text-2xl">🤐</span> Never share my name or address.</li>
           <li className="flex gap-3 items-center"><span className="text-2xl">👨‍👩‍👧</span> Always use AI with a grown-up.</li>
           <li className="flex gap-3 items-center"><span className="text-2xl">🤔</span> Check if the AI is telling the truth.</li>
           <li className="flex gap-3 items-center"><span className="text-2xl">❤️</span> Be kind to robots (and humans!).</li>
           <li className="flex gap-3 items-center"><span className="text-2xl">🗣️</span> Tell an adult if something is weird.</li>
        </ul>
      </div>

      {/* Fun Fact */}
      <div className="bg-blue-100 p-6 rounded-xl text-center">
        <h3 className="font-bold text-blue-800 text-xl mb-2">Did You Know? 💡</h3>
        <p className="text-lg text-blue-900">AI has read more books than every human who ever lived combined! But it still doesn't know what chocolate tastes like.</p>
      </div>

      {/* Drawing Space */}
      <div className="border-4 border-gray-200 rounded-xl h-48 relative p-4">
        <span className="absolute top-2 left-4 text-gray-400 font-bold text-lg">Draw a robot jaguar here:</span>
      </div>

    </div>

    {/* Footer */}
    <div className="mt-auto pt-6 border-t flex justify-between items-end">
      <div>
        <p className="font-bold mb-2">Parents: Scan for resources</p>
        <QRCodeSVG value="https://vikasbhatia.info/ai/resources" size={96} />
      </div>
      <div className="text-right">
        <p className="font-bold text-gray-800">Vikas Bhatia Consulting</p>
        <p className="text-sm text-gray-500">Cybersecurity & AI Education</p>
      </div>
    </div>
  </div>
));
StudentHandoutContent.displayName = 'StudentHandoutContent';

const ParentHandoutContent = React.forwardRef<HTMLDivElement>((props, ref) => (
  <div ref={ref} className="w-[8.5in] h-[11in] p-12 bg-white mx-auto border shadow-lg print:shadow-none print:border-none flex flex-col font-sans">
    {/* Header */}
    <div className="mb-8 border-b border-gray-200 pb-6">
      <h1 className="text-3xl font-bold text-gray-900 font-heading">AI Safety & Literacy</h1>
      <p className="text-lg text-red-600 font-medium">A Parent's Guide • Gorrie Elementary 2025</p>
    </div>

    {/* Content */}
    <div className="flex-1 space-y-8">
      
      <section>
        <h2 className="text-xl font-bold text-gray-800 mb-3 uppercase tracking-wider border-l-4 border-orange-500 pl-3">What We Covered</h2>
        <p className="text-gray-600 leading-relaxed">
          Today your child learned that Artificial Intelligence is a tool that predicts patterns, not a magic brain. We discussed how Large Language Models (like ChatGPT) work by reading "tokens," the importance of asking specific questions (prompting), and critical safety rules for digital interaction.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-800 mb-3 uppercase tracking-wider border-l-4 border-red-500 pl-3">Why AI Literacy Matters</h2>
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-slate-50 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 mb-2">Critical Thinking</h3>
            <p className="text-sm text-gray-600">Kids need to learn to verify information, as AI can confidently present falsehoods (hallucinations).</p>
          </div>
          <div className="bg-slate-50 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 mb-2">Future Skills</h3>
            <p className="text-sm text-gray-600">Understanding how to guide AI (prompt engineering) will be a key skill in their future careers.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-800 mb-3 uppercase tracking-wider border-l-4 border-blue-500 pl-3">Safety Checklist</h2>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-center gap-2">✅ <strong>Supervision:</strong> Keep AI use in shared family spaces.</li>
          <li className="flex items-center gap-2">✅ <strong>Privacy:</strong> Disable "chat history" training where possible.</li>
          <li className="flex items-center gap-2">✅ <strong>Verification:</strong> Fact-check AI answers with trusted sources.</li>
        </ul>
      </section>

      <div className="bg-gray-900 text-white p-6 rounded-xl flex items-center justify-between">
         <div>
           <h3 className="text-xl font-bold mb-1">Access the Full Resource Hub</h3>
           <p className="text-gray-400 text-sm">Scan to view safety guides, tools list, and more.</p>
         </div>
         <div className="p-2 bg-white rounded">
            <QRCodeSVG value="https://vikasbhatia.info/ai/resources" size={80} />
         </div>
      </div>

    </div>

    {/* Footer */}
    <div className="mt-auto pt-6 border-t flex justify-between items-center text-sm text-gray-500">
      <p>© 2025 Vikas Bhatia Consulting</p>
      <p>vikasbhatia.info</p>
    </div>
  </div>
));
ParentHandoutContent.displayName = 'ParentHandoutContent';


export default function HandoutsPage() {
  const router = useRouter();
  const studentRef = useRef<HTMLDivElement>(null);
  const parentRef = useRef<HTMLDivElement>(null);

  const handlePrintStudent = useReactToPrint({
    // @ts-ignore
    content: () => studentRef.current,
    documentTitle: 'Gorrie-Student-AI-Handout',
  });

  const handlePrintParent = useReactToPrint({
    // @ts-ignore
    content: () => parentRef.current,
    documentTitle: 'Gorrie-Parent-AI-Guide',
  });

  return (
    <div className="min-h-screen bg-slate-100 p-8 font-sans">
      <Head>
        <title>Gorrie AI Handouts</title>
      </Head>

      <div className="max-w-6xl mx-auto">
        <div className="flex items-center mb-8 gap-4">
          <Button variant="ghost" onClick={() => router.push('/dashboard')}>
            <Home className="w-5 h-5 mr-2" /> Dashboard
          </Button>
          <h1 className="text-3xl font-bold text-gray-800">Printable Handouts</h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Student Handout Section */}
          <div className="space-y-4">
             <Card className="border-l-4 border-red-500">
               <CardHeader>
                 <CardTitle className="flex items-center gap-2"><FileText className="text-red-500" /> Student Take-Home</CardTitle>
                 <CardDescription>Fun, activity-based sheet for kids.</CardDescription>
               </CardHeader>
               <CardContent>
                 <Button onClick={() => handlePrintStudent && handlePrintStudent()} className="w-full bg-red-600 hover:bg-red-700 text-white">
                   <Printer className="w-4 h-4 mr-2" /> Print Student Handout
                 </Button>
               </CardContent>
             </Card>
             <div className="overflow-hidden rounded-lg shadow-xl border bg-gray-200 p-4 flex justify-center">
               <div className="transform scale-50 origin-top h-[500px] bg-white">
                  <StudentHandoutContent ref={studentRef} />
               </div>
             </div>
          </div>

          {/* Parent Handout Section */}
          <div className="space-y-4">
             <Card className="border-l-4 border-blue-500">
               <CardHeader>
                 <CardTitle className="flex items-center gap-2"><FileText className="text-blue-500" /> Parent Guide</CardTitle>
                 <CardDescription>Professional summary and safety tips.</CardDescription>
               </CardHeader>
               <CardContent>
                 <Button onClick={() => handlePrintParent && handlePrintParent()} className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                   <Printer className="w-4 h-4 mr-2" /> Print Parent Guide
                 </Button>
               </CardContent>
             </Card>
             <div className="overflow-hidden rounded-lg shadow-xl border bg-gray-200 p-4 flex justify-center">
               <div className="transform scale-50 origin-top h-[500px] bg-white">
                  <ParentHandoutContent ref={parentRef} />
               </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
