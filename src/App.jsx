import React from 'react'; // 👈 Importa React explícitamente
import ChessBoard from './components/ChessBoard/Index';


function App() {
  return (
    <div className='bg-red'>
      <div className="flex justify-center items-center min-h-screen bg-gray-600">
        <ChessBoard />
      </div>

    </div>
  );
}

export default App;
