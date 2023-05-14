import './App.css';

function App() {

  async function getPredictions(){
    fetch('http://localhost:8000/predict/?input_review="I love you"').then(res=>res.json())
    .then((data)=>{
      console.log(data);
    })
}



  return (
    <div className="App">
      <header className="App-header">
        Huuuu
      </header>

      <button className="button" onClick={()=>{
        getPredictions();
      }}>button</button>
    </div>
  );
}

export default App;
