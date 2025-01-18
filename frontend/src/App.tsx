import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import { NavigationHeader } from './components/NavigationHeader';
import { Footer } from './components/Footer';
import { Upload } from './pages/Upload';
import { Library } from './pages/Library';
import { Chatbot } from './pages/Chatbot';

function App() {
  const [showFooter, setShowFooter] = useState(true); // Track footer visibility

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-primary">
        <header className="sticky top-0 z-10 bg-primary w-full">
          <NavigationHeader />
        </header>

        <main className="flex-grow overflow-hidden flex flex-col justify-between">
          <Routes>
            <Route path="/upload" element={<Upload />} />
            <Route path="/library" element={<Library />} />
            <Route
              path="/"
              element={<Chatbot setShowFooter={setShowFooter} />} // Passing setShowFooter to Chatbot component
            />
          </Routes>
        </main>

        {showFooter && <footer className="flex-shrink-0"><Footer /></footer>} {/* Conditionally render footer */}
      </div>
    </Router>
  );
}

export default App;
