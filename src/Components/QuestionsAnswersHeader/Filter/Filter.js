import { Button, FormControl, TextField } from "@material-ui/core";
import { useState } from "react";
import Experience from "../../Experience";
import Languages from "../../Languages";
import classes from './Filter.module.css';


const Filter = () => {
    let [lang,setLang] =useState('');
    let [experience, setExperience] = useState('');
    let [text,setText] = useState('');
    return (<div className={classes.filter}>
        <FormControl style={{ maxWidth: 150 }} variant="standard">
            <TextField
                id="text"
                label="Text"
                value={text}
                variant="outlined"
                InputLabelProps={{
                    shrink: true,
                }}
            />
        </FormControl>
        <Languages lang={lang}/>
        <Experience experience={experience}/>
        <Button color="secondary" variant="contained">
            Search
        </Button>
        <Button color="primary" variant="contained">
            Reset
        </Button>

    </div>)
}

export default Filter;