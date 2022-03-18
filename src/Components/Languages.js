import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import { useEffect } from "react";
import { useState } from "react";

const Languages = (props) => {
    const [langs, setLangs] = useState([]);
    useEffect(() => {
        const fetchLangs = async () => {
            let response = await fetch('http://127.0.0.1:8000/getLanguages')
            const data = await response.json();
            setLangs(data)
        }
        fetchLangs();
    },[]);
    const items = langs.map(item =>{
        return <MenuItem value={item.code}>{item.name}</MenuItem>
    })
    return (
        <FormControl style={{minWidth: 120}} variant="standard">
            <InputLabel id="demo-simple-select-label">Language</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={props.lang}
                label="Age"
                autoWidth
            >{items}
            </Select>
        </FormControl>
    )
}

export default Languages;