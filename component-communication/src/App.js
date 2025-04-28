// import logo from './logo.svg';
import './App.css';
import ParentComponent from './components/ParentComponent.jsx';
import "./style.css";

function App() {
  const message = "Hello from Parent Component! Passing data down the hierarchy.";
  const object = {
    name: "Sonali Surpatne",
    age: 25,
    city: "Pune",
    hobbies: ["Reading", "Traveling", "Cooking"]
  }
  return (
    <>
    <ParentComponent msg = {message} obj = {object} />
    </>
  );
}

export default App;
