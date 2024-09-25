
import { useState } from 'react';

export default function Button_increment(){
    const[counter , setCounter] = useState(0);
  
      function Evento_clicar(){
      setCounter(counter + 1);
      }
    
      return (
    
        <button onClick={Evento_clicar}>
        O botão foi clicado {counter} vezes ;3
        </button>
    
    
      );
  }
  