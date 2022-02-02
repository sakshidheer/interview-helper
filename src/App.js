import classes from './App.module.css';
import Login from './pages/Login/Login'
import {InputAdornment, TextField} from '@material-ui/core';
import {AccountCircle} from '@material-ui/icons';

function App() {
  return (
    <div className={classes.App}>
      <Login/>
      <form>
      <TextField
        className={classes.margin}
        id="input-with-icon-textfield"
        label="TextField"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
      />
      </form>
    </div>
  );
}

export default App;
