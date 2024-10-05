import React, { useState, useEffect } from 'react';
import { Code, RefreshCw, ArrowRight } from 'lucide-react';

const codeExamples = {
  HTML: `<h1>Hello, World!</h1>`,
  CSS: `.css-effect {
  background: linear-gradient(45deg, #ff00ff, #00ffff);
  background-size: 200% 200%;
  animation: gradient 3s ease infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
}

@keyframes gradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}`,
  JavaScript: `function typeWriter(element, text, speed = 50) {
  let i = 0;
  const timer = setInterval(() => {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
    } else {
      clearInterval(timer);
    }
  }, speed);
}

const header = document.querySelector('h1');
typeWriter(header, "Hello, JS!");`
};

function App() {
  const [currentPhase, setCurrentPhase] = useState('HTML');
  const [headerContent, setHeaderContent] = useState('Hello, World!');
  const [isHovering, setIsHovering] = useState(false);

  const phases = ['HTML', 'CSS', 'JavaScript', 'Final'];

  useEffect(() => {
    if (currentPhase === 'CSS') {
      setHeaderContent('Hello, CSS!');
    } else if (currentPhase === 'HTML') {
      setHeaderContent('Hello, World!');
    } else if (currentPhase === 'JavaScript' || currentPhase === 'Final') {
      setHeaderContent('');
      const typeWriter = (text: string, i = 0) => {
        if (i < text.length) {
          setHeaderContent(prev => prev + text.charAt(i));
          setTimeout(() => typeWriter(text, i + 1), 100);
        }
      };
      typeWriter('Hello, JS!');
    }
  }, [currentPhase]);

  useEffect(() => {
    if (currentPhase !== 'Final') {
      const timer = setTimeout(() => {
        handleNext();
      }, 2000);

      return () => clearTimeout(timer);
    } else {
      // Restart typewriter effect every 2 seconds in Final view
      const interval = setInterval(() => {
        setHeaderContent('');
        const typeWriter = (text: string, i = 0) => {
          if (i < text.length) {
            setHeaderContent(prev => prev + text.charAt(i));
            setTimeout(() => typeWriter(text, i + 1), 100);
          }
        };
        typeWriter('Hello, JS!');
      }, 2000);

      return () => clearInterval(interval);
    }
  }, [currentPhase]);

  const renderCodeBlock = (language: string) => (
    <div className="w-full bg-white rounded-lg shadow-md overflow-hidden mb-8">
      <div className="bg-gray-800 text-white px-4 py-2 flex items-center">
        <Code size={20} className="mr-2" />
        <span className="font-mono text-sm">{language}</span>
      </div>
      <pre className="p-4 text-sm overflow-x-auto">
        <code className="language-markup">
          {codeExamples[language as keyof typeof codeExamples]}
        </code>
      </pre>
    </div>
  );

  const renderPhase = (phase: string) => (
    <div className="flex flex-col items-center">
      <h1 className={`text-4xl md:text-5xl lg:text-6xl mb-8 ${phase === 'CSS' ? 'css-effect' : ''}`}>
        {phase === 'HTML' && 'Hello, World!'}
        {phase === 'CSS' && 'Hello, CSS!'}
        {(phase === 'JavaScript' || phase === 'Final') && headerContent}
      </h1>
      {renderCodeBlock(phase)}
    </div>
  );

  const handleNext = () => {
    const currentIndex = phases.indexOf(currentPhase);
    if (currentIndex < phases.length - 1) {
      setCurrentPhase(phases[currentIndex + 1]);
    }
  };

  const handleRestart = () => {
    window.location.reload();
  };

  const renderFooter = () => (
    <footer className="fixed bottom-0 left-0 right-0 bg-gray-800 p-4 flex justify-center">
      <button className="footer-button" onClick={handleNext}>
        <ArrowRight size={24} />
      </button>
    </footer>
  );

  return (
    <div className={`min-h-screen flex flex-col items-center justify-start p-8 transition-all duration-300 ${isHovering ? 'bg-black' : 'bg-gray-100'}`}>
      <div className={`flex-grow w-full max-w-7xl transition-opacity duration-300 ${isHovering ? 'opacity-0' : 'opacity-100'}`}>
        {currentPhase !== 'Final' ? (
          <>
            {renderPhase(currentPhase)}
            {renderFooter()}
          </>
        ) : (
          <div className="w-full flex flex-wrap justify-between gap-4">
            {phases.slice(0, 3).map((lang) => (
              <div key={lang} className="flex-1 min-w-[30%] transition-all duration-1000 ease-in-out opacity-0 translate-y-10 animate-fade-in-up">
                {renderPhase(lang)}
              </div>
            ))}
          </div>
        )}
      </div>
      {currentPhase === 'Final' && (
        <button
          onClick={handleRestart}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          className={`restart-button group relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-white rounded-md shadow-2xl transition duration-300 ease-out ${isHovering ? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-indigo-500 hover:bg-indigo-600'} mt-8`}
        >
          <span className={`absolute inset-0 w-full h-full ${isHovering ? 'bg-gradient-to-br from-yellow-300 via-yellow-500 to-yellow-700' : 'bg-gradient-to-br from-teal-400 via-indigo-500 to-purple-600'}`}></span>
          <span className={`absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 ${isHovering ? 'bg-yellow-600' : 'bg-purple-500'} rounded-full opacity-30 group-hover:rotate-90 ease`}></span>
          <span className="relative flex items-center">
            <RefreshCw className="w-5 h-5 mr-2" />
            Restart
          </span>
        </button>
      )}
    </div>
  );
}

export default App;