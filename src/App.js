import classes from './App.module.css';
import Login from './pages/Login/Login'
import { Route, Routes } from 'react-router';
import SignUp from './pages/SignUp/SignUp';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className={classes.App}>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signup" element={<SignUp/>}/>
      </Routes>

    </div>
  );
}

export default App;
