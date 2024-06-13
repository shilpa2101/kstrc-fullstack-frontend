import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddUser from './components/AddUser';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<AddUser/>}/>
    </Routes></BrowserRouter>
  );
}

export default App;
