import { Button, FormControl, InputLabel, OutlinedInput } from "@material-ui/core";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../Components/Logo";
import classes from './SignUp.module.css'
const SignUp = () => {
    let [password, setPassword] = useState('');
    let [email, setEmail] = useState('');    
    let [confirmPassword, setConfirmPassword] = useState('');
    return (
        <div className={classes.signup}>
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
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        labelWidth={70}

                    />
                </FormControl>
                <FormControl variant="outlined">
                    <InputLabel htmlFor="standard-adornment-password">Confirm Password</InputLabel>
                    <OutlinedInput
                        id="standard-adornment-password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        labelWidth={140}

                    />
                </FormControl>
                <Button size="large"
                    variant="contained"
                    color="secondary">
                    Sign Up
                </Button>
            </form>
            <div>Already Have am account ? <NavLink to="/">Sign In</NavLink></div>
        </div>
    )
}

export default SignUp;
