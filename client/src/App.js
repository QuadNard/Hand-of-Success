import './App.css';
import Home from './pages/Home';
import Quote from './pages/Quote';
import Todo from './pages/Todo';
import Zulu from './pages/Zulu';
import { Route, Routes  } from 'react-router-dom';


function App() {
  return (
    <div>
      <Routes>
         <Route path='/' element={<Home/>} />
       <Route path='/quote' element={<Quote/>} />
         <Route path='/todo' element={<Todo/>} />
        <Route path='/zulu' element={<Zulu/>} />         
      </Routes>
    
    </div>

  );
}

export default App;
