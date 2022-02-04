import classes from './App.module.css';
import Login from './pages/Login/Login'
import {InputAdornment, TextField} from '@material-ui/core';
import {AccountCircle} from '@material-ui/icons';

function App() {
  return (
    <div className={classes.App}>
      <Login/>
    </div>
  );
}

export default App;
