import { Button, IconButton } from '@material-ui/core';
import { IoMdAdd } from 'react-icons/io';
import { BsFillGrid3X3GapFill, BsList } from 'react-icons/bs';
import classes from './QuestionsAnswersHeader.module.css'
const QuestionsAnswersHeader = () => {
    
    return <div className={classes.header}>
        <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            startIcon={<IoMdAdd />}
        >
            Add
        </Button>

        <IconButton aria-label="grid" edge="end" color="secondary">
            <BsFillGrid3X3GapFill/>
        </IconButton>
        <IconButton aria-label="list" color="primary">
            <BsList/>
        </IconButton>

    </div>
}

export default QuestionsAnswersHeader;