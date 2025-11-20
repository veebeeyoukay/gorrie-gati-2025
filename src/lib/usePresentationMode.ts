import React, { useState, useEffect } from 'react';

export function usePresentationMode() {
  const [grade, setGrade] = useState<'2nd' | '4th'>('2nd');
  const [audience, setAudience] = useState<'student' | 'parent' | 'teacher'>('student');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedGrade = localStorage.getItem('gati_grade') as '2nd' | '4th';
      const savedAudience = localStorage.getItem('gati_audience') as 'student' | 'parent' | 'teacher';
      
      if (savedGrade) setGrade(savedGrade);
      if (savedAudience) setAudience(savedAudience);
    }
  }, []);

  return { grade, audience };
}

