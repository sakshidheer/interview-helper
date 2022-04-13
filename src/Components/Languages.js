import { FormControl, InputLabel, MenuItem, OutlinedInput, Select } from "@material-ui/core";
import { useRef } from "react";
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
    }, []);
    const inputLabel = useRef(null);
    const [labelWidth, setLabelWidth] = useState(0);
    useEffect(() => {
        setLabelWidth(inputLabel.current.offsetWidth);
    }, []);
    const items = langs.map(item => {
        return <MenuItem value={item.code} key={item.code}>{item.name}</MenuItem>
    })
    return (
        <FormControl style={{ minWidth: 150 }} 
        variant="outlined">
            <InputLabel id="lang-label"
                ref={inputLabel}
                shrink
                htmlFor="outlined-lang">Language</InputLabel>
            <Select
                labelId="lang-label"
                id="lang"
                value={props.lang}
                label="Language"
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
        </FormControl >
    )
}

export default Languages;