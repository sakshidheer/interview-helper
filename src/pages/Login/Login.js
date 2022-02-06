import { Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../Components/Logo";
import classes from './Login.module.css';

const Login = () => {
    let [showPassword, setShowPassword] = useState(false);
    let [password, setPassword] = useState('');
    let [email, setEmail] = useState('');
    let navigate = useNavigate();
    return (
        <div className={classes.login}>
            <Logo />
            <form>
                <FormControl variant="outlined">
                    <InputLabel htmlFor="standard-adornment-email">Email</InputLabel>
                    <OutlinedInput
                        id="standard-adornment-email"
                        type='text'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        labelWidth={70}

                    />
                </FormControl>
                <FormControl variant="outlined">
                    <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                    <OutlinedInput
                        id="standard-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        }
                        labelWidth={70}

                    />
                </FormControl>
                <Button size="large"
                    variant="contained"
                    color="primary">
                    Log In
                </Button>
            </form>
            <hr/>
            <Button size="medium"
                    variant="contained"
                    color="secondary"
                    onClick={() => navigate("/signup")}>
                    Sign Up
                </Button>
        </div>
    )
}

export default Login;