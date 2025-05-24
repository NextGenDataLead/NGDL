import React from 'react';
import { Button } from './components/ui/button';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Welcome</h1>
        <Button>Get Started</Button>
      </div>
    </div>
  );
}

export default App;
