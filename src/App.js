import './App.css';
import Button from './components/ButtonComponent/Button.tsx';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
         Thankyou for trying to make a contribution to UILab
        </h1>
        <h3>Buttons</h3>
        <Button className='primary p-12'>Primary button</Button>
        <Button className='secondary br-8' >secondary button</Button>
        <Button className='tertiary font-12' >Tertiary button</Button>
      </header>
    </div>
  );
}

export default App;
