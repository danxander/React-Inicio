import React from 'react';
import './App.css';
import ejemplos from './Ejemplos/ejemplos.json';
console.log(ejemplos);

class App extends React.Component{
  state={
    ejemplos: ejemplos
  }
  render(){
    return(
      <h1>Ola ke ase</h1>
    )
  }

}
export default App;
