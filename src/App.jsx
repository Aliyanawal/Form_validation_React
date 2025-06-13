import { Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import TodoList from './components/todo';

function App() {
  return (
    // <Routes>
    //   <Route path="/" element={<Register/>}/>
    //   <Route path="/login" element={<Login />} />
    //   <Route path="/home" element={<Home />} />
    // </Routes>
    <TodoList/>
     
      
    
     
     
    
  );
}

export default App;
