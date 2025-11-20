import React, { useRef } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Printer, Home, FileText } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';

// Combined handout with student on front, parent on back
const CombinedHandoutContent = React.forwardRef<HTMLDivElement>((props, ref) => (
  <div ref={ref} style={{ position: 'absolute', left: '-9999px', top: 0 }}>

    {/* Page 1: Student Handout (Front) */}
    <div className="page bg-white">
      {/* Header */}
      <div className="flex justify-between items-center mb-6 border-b-4 border-red-600 pb-3">
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
      <div className="flex-1 space-y-6">
        
        {/* 5 Rules */}
        <div className="bg-gray-50 p-5 rounded-xl border-2 border-dashed border-gray-300">
          <h3 className="text-2xl font-bold mb-3 text-center">🛑 My 5 Safety Rules</h3>
          <ul className="space-y-2 text-lg">
             <li className="flex gap-3 items-center"><span className="text-2xl">🤐</span> Never share my name or address.</li>
             <li className="flex gap-3 items-center"><span className="text-2xl">👨‍👩‍👧</span> Always use AI with a grown-up.</li>
             <li className="flex gap-3 items-center"><span className="text-2xl">🤔</span> Check if the AI is telling the truth.</li>
             <li className="flex gap-3 items-center"><span className="text-2xl">❤️</span> Be kind to robots (and humans!).</li>
             <li className="flex gap-3 items-center"><span className="text-2xl">🗣️</span> Tell an adult if something is weird.</li>
          </ul>
        </div>

        {/* Fun Fact */}
        <div className="bg-blue-100 p-5 rounded-xl text-center">
          <h3 className="font-bold text-blue-800 text-xl mb-2">Did You Know? 💡</h3>
          <p className="text-lg text-blue-900">AI has read more books than every human who ever lived combined! But it still doesn't know what chocolate tastes like.</p>
        </div>

        {/* Drawing Space */}
        <div className="border-4 border-gray-200 rounded-xl h-40 relative p-4">
          <span className="absolute top-2 left-4 text-gray-400 font-bold text-lg">Draw a robot jaguar here:</span>
        </div>

      </div>

      {/* Footer */}
      <div className="mt-4 pt-4 border-t flex justify-between items-end">
        <div>
          <p className="font-bold mb-2 text-sm">Parents: Scan for resources (see back)</p>
          <QRCodeSVG value="https://vikasbhatia.info/projects" size={80} />
        </div>
        <div className="text-right">
          <p className="font-bold text-gray-800 text-sm">Vikas Bhatia Consulting</p>
          <p className="text-xs text-gray-500">Cybersecurity & AI Education</p>
        </div>
      </div>
    </div>

    {/* Page 2: Parent Guide (Back) */}
    <div className="page bg-white">
      {/* Header */}
      <div className="mb-6 border-b border-gray-200 pb-4">
        <h1 className="text-3xl font-bold text-gray-900 font-heading">AI Safety & Literacy</h1>
        <p className="text-lg text-red-600 font-medium">A Parent's Guide • Gorrie Elementary 2025</p>
      </div>

      {/* Content */}
      <div className="flex-1 space-y-6">
        
        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-2 uppercase tracking-wider border-l-4 border-orange-500 pl-2">What We Covered</h2>
          <p className="text-gray-600 leading-relaxed text-sm">
            Today your child learned that Artificial Intelligence is a tool that predicts patterns, not a magic brain. We discussed how Large Language Models (like ChatGPT) work by reading "tokens," the importance of asking specific questions (prompting), and critical safety rules for digital interaction.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-2 uppercase tracking-wider border-l-4 border-red-500 pl-2">Why AI Literacy Matters</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-50 p-3 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-1 text-sm">Critical Thinking</h3>
              <p className="text-xs text-gray-600">Kids need to learn to verify information, as AI can confidently present falsehoods (hallucinations).</p>
            </div>
            <div className="bg-slate-50 p-3 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-1 text-sm">Future Skills</h3>
              <p className="text-xs text-gray-600">Understanding how to guide AI (prompt engineering) will be a key skill in their future careers.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-2 uppercase tracking-wider border-l-4 border-blue-500 pl-2">Safety Checklist</h2>
          <ul className="space-y-1 text-gray-700 text-sm">
            <li className="flex items-center gap-2">✅ <strong>Supervision:</strong> Keep AI use in shared family spaces.</li>
            <li className="flex items-center gap-2">✅ <strong>Privacy:</strong> Disable "chat history" training where possible.</li>
            <li className="flex items-center gap-2">✅ <strong>Verification:</strong> Fact-check AI answers with trusted sources.</li>
          </ul>
        </section>

        <div className="bg-gray-900 text-white p-4 rounded-xl flex items-center justify-between">
           <div>
             <h3 className="text-lg font-bold mb-1">Access the Full Resource Hub</h3>
             <p className="text-gray-400 text-xs">Scan to view safety guides, tools list, and more.</p>
           </div>
           <div className="p-2 bg-white rounded">
              <QRCodeSVG value="https://vikasbhatia.info/projects" size={70} />
           </div>
        </div>

      </div>

      {/* Footer */}
      <div className="mt-4 pt-4 border-t flex justify-between items-center text-xs text-gray-500">
        <p>© 2025 Vikas Bhatia Consulting</p>
        <p>vikasbhatia.info</p>
      </div>
    </div>
  </div>
));
CombinedHandoutContent.displayName = 'CombinedHandoutContent';

// Preview components (for screen display only)
const StudentPreview = () => (
  <div className="w-[8.5in] h-[11in] p-8 bg-white mx-auto border shadow-lg flex flex-col transform scale-50 origin-top">
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
    <div className="flex-1 space-y-8">
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
      <div className="bg-blue-100 p-6 rounded-xl text-center">
        <h3 className="font-bold text-blue-800 text-xl mb-2">Did You Know? 💡</h3>
        <p className="text-lg text-blue-900">AI has read more books than every human who ever lived combined! But it still doesn't know what chocolate tastes like.</p>
      </div>
      <div className="border-4 border-gray-200 rounded-xl h-48 relative p-4">
        <span className="absolute top-2 left-4 text-gray-400 font-bold text-lg">Draw a robot jaguar here:</span>
      </div>
    </div>
    <div className="mt-auto pt-6 border-t flex justify-between items-end">
      <div>
        <p className="font-bold mb-2">Parents: Scan for resources (see back)</p>
        <QRCodeSVG value="https://vikasbhatia.info/projects" size={96} />
      </div>
      <div className="text-right">
        <p className="font-bold text-gray-800">Vikas Bhatia Consulting</p>
        <p className="text-sm text-gray-500">Cybersecurity & AI Education</p>
      </div>
    </div>
  </div>
);

const ParentPreview = () => (
  <div className="w-[8.5in] h-[11in] p-12 bg-white mx-auto border shadow-lg flex flex-col font-sans transform scale-50 origin-top">
    <div className="mb-8 border-b border-gray-200 pb-6">
      <h1 className="text-3xl font-bold text-gray-900 font-heading">AI Safety & Literacy</h1>
      <p className="text-lg text-red-600 font-medium">A Parent's Guide • Gorrie Elementary 2025</p>
    </div>
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
            <QRCodeSVG value="https://vikasbhatia.info/projects" size={80} />
         </div>
      </div>
    </div>
    <div className="mt-auto pt-6 border-t flex justify-between items-center text-sm text-gray-500">
      <p>© 2025 Vikas Bhatia Consulting</p>
      <p>vikasbhatia.info</p>
    </div>
  </div>
);

export default function HandoutsPage() {
  const router = useRouter();
  const combinedRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    if (!combinedRef.current) return;
    
    // Create a new window for printing
    const printWindow = window.open('', '_blank');
    if (!printWindow) {
      alert('Please allow popups to print');
      return;
    }

    const printContent = combinedRef.current.innerHTML;
    const printStyles = `
      <style>
        @page {
          size: letter;
          margin: 0.5in;
        }
        body {
          margin: 0;
          padding: 0;
          font-family: 'Inter', sans-serif;
        }
        .page {
          width: 8.5in;
          height: 11in;
          page-break-after: always;
          padding: 0.75in;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          background: white;
        }
        .page:last-child {
          page-break-after: auto;
        }
        h1, h2, h3 {
          font-family: 'Poppins', sans-serif;
        }
      </style>
    `;

    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Gorrie AI Handout</title>
          ${printStyles}
        </head>
        <body>
          ${printContent}
        </body>
      </html>
    `);
    
    printWindow.document.close();
    printWindow.focus();
    
    setTimeout(() => {
      printWindow.print();
      printWindow.close();
    }, 250);
  };

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

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><FileText className="text-red-500" /> Combined Handout</CardTitle>
            <CardDescription>Double-sided PDF: Student handout (front) + Parent guide (back)</CardDescription>
          </CardHeader>
          <CardContent>
            <Button 
              onClick={handlePrint} 
              className="w-full bg-red-600 hover:bg-red-700 text-white text-lg py-6"
            >
              <Printer className="w-5 h-5 mr-2" /> Print Double-Sided Handout
            </Button>
            <p className="text-sm text-gray-500 mt-4 text-center">
              Make sure your printer is set to print double-sided (duplex). The first page is for students, the second page is for parents.
            </p>
          </CardContent>
        </Card>

        {/* Preview Section */}
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-gray-800">Front: Student Handout</h2>
            <div className="overflow-hidden rounded-lg shadow-xl border bg-gray-200 p-4 flex justify-center">
              <div className="h-[500px] overflow-y-auto">
                <StudentPreview />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold text-gray-800">Back: Parent Guide</h2>
            <div className="overflow-hidden rounded-lg shadow-xl border bg-gray-200 p-4 flex justify-center">
              <div className="h-[500px] overflow-y-auto">
                <ParentPreview />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Print container - positioned off-screen but in DOM */}
      <div>
        <CombinedHandoutContent ref={combinedRef} />
      </div>
    </div>
  );
}
