import './App.css';
import Cards from './cards.js';

const Mensaje2 = () => {
return <h1> hola mundo</h1>
}

function App() {
  const mensaje = "mundo2"
  let img = []
  for(let i = 1; i < 8; i++){
    const nameImg = "../img/IMG-"
    const extension =".jpg"
    img.push(<Cards imagen={nameImg + i + extension} />)
  }
  <Cards imagen="../img/IMG-3677.jpg"/>
  return (
    <div className="App">
     hola {mensaje}
     <Mensaje2 />
     {img}
     </div>
  );
}

export default App;
