import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';



import { motion } from "framer-motion";
function App() {
  return (
    <div className="App">
       <NavBar />
      <Header/>
     
   
    </div>
  );
}

export default App;
