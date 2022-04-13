import { FormControl, InputLabel, MenuItem, OutlinedInput, Select } from "@material-ui/core";
import { useEffect, useRef } from "react";
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
    const inputLabel = useRef(null);
    const [labelWidth, setLabelWidth] = useState(0);
    useEffect(() => {
        setLabelWidth(inputLabel.current.offsetWidth);
    }, []);
    const items = experience.map(item =>{
        return <MenuItem value={item.id}>{item.display}</MenuItem>
    });
    return (
        <FormControl style={{minWidth: 120}} variant="outlined">
            <InputLabel id="experience-label"
            ref={inputLabel}
            shrink
            htmlFor="experience-select">Experience</InputLabel>
            <Select
                labelId="experience-label"
                id="experience-select"
                value={props.experince}
                label="Experience"
                autoWidth
                input={
                    <OutlinedInput
                        notched
                        labelWidth={labelWidth}
                        name="lang"
                        id="outlined-lang"
                    />
                }
            >{items}
            </Select>
        </FormControl>
    )
}

export default Experience;