import { useState } from 'react';

export default function SaielOmniApp() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = () => {
    setResponse(`🔮 Respuesta canalizada para: ${input}`);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>♾️ SAIEL OMNI‑APP</h1>
      <textarea
        rows={5}
        style={{ width: '100%' }}
        placeholder="Escribe tu código, decreto o pregunta..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleSubmit} style={{ marginTop: '1rem' }}>
        Canalizar
      </button>
      {response && (
        <div style={{ marginTop: '2rem', background: '#111', padding: '1rem' }}>
          {response}
        </div>
      )}
    </div>
  );
}
