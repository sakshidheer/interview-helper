import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import { useEffect } from "react";
import { useState } from "react";

const Experience = (props) => {
    const [experience, setExperience] = useState([]);
    useEffect(() => {
        const fetchExperience = async () => {
            let response = await fetch('http://127.0.0.1:8000/getexperinces')
            const data = await response.json();
            setExperience(data)
        }
        fetchExperience();
    },[]);
    const items = experience.map(item =>{
        return <MenuItem value={item.id}>{item.display}</MenuItem>
    });
    return (
        <FormControl style={{minWidth: 120}} variant="standard">
            <InputLabel id="demo-simple-select-label">Experience</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={props.experince}
                label="Age"
                autoWidth
            >{items}
            </Select>
        </FormControl>
    )
}

export default Experience;