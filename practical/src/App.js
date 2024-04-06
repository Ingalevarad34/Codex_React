import Card from './card';
import './App.css'

function App() {
  return (
    <div>
      <h1 className="couses-title1">Courses</h1>
      <div className="first-row">
        <Card />
        <Card />
        <Card />
      </div>

      <h1 className="couses-title2">Testmonials</h1>
      <div className="second-row">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default App;
