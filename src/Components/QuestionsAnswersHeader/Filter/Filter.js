import { Button, IconButton } from "@material-ui/core";
import { AiFillFilter } from "react-icons/ai"
import Experience from "../../Experience";
import Languages from "../../Languages";
import { GrPowerReset } from 'react-icons/gr';


const Filter = () => {
    return (<div>
        <Languages />
        <Experience />
        <Button color="secondary" variant="contained">
            Search
        </Button>
        <Button color="primary" variant="contained">
            Reset
        </Button>

    </div>)
}

export default Filter;