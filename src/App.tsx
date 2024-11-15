import { useState } from 'react';
import Sidebar from './components/Sidebar';
import PersonaCard from './components/PersonaCard';
import { personas } from './data/personas';

function App() {
  const [selectedPersona, setSelectedPersona] = useState(personas[0]);

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar 
        personas={personas} 
        selectedPersona={selectedPersona} 
        onSelectPersona={setSelectedPersona} 
      />
      <main className="flex-1 overflow-auto">
        <PersonaCard persona={selectedPersona} />
      </main>
    </div>
  );
}

export default App;