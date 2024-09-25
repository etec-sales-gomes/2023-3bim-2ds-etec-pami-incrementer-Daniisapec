import { useState } from 'react';

export default function Button_increment(){
    const[counter , setCounter] = useState(100);

    
  
      function Evento_clicar(){
      setCounter(counter - 1);
      }
    
      return (
    
        <button onClick={Evento_clicar}>
        O botão foi clicado {counter} vezes :/
        </button>
    
    
      );
  }