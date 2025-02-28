'use client'

import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  

  return (
    <div className="relative transition-all duration-300" >
      {/* Botão */}
       
      <button onClick={() => setIsOpen(!isOpen)} className="flex items-center text-[#fff8e7] hover:text-[#ffcb7c] text-shadow-sm font-semibold px-4 py-2 rounded-lg focus:outline-none transition-all duration-300 outline-none">
         Oque deseja?

         {isOpen ? (
          <ChevronUp className="ml-2 h-5 w-5" /> // Ícone quando aberto
        ) : (
          <ChevronDown className="ml-2 h-5 w-5" /> // Ícone quando fechado
        )}
      </button>

      {isOpen && (
        <div className="absolute mt-2 p-4 bg-white shadow-lg rounded-lg w-48 z-10 transition-all duration-300">
          <a href="#" className="block px-4 py-2 rounded-lg text-gray-500 hover:text-black transition-all duration-300">Eletrônicos</a>
          
        </div>
      )}
    </div>
  );
}