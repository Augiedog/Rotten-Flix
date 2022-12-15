import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './components/Register/Register';
import Home from "./components/Home/Home"
import Login from './components/Login/Login';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Register/>} />
                <Route path='/login' element={<Login/>} />
                <Route path='/home' element={<Home/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;