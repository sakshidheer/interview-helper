import { Button, IconButton } from '@material-ui/core';
import { IoMdAdd } from 'react-icons/io';
import { BsFillGrid3X3GapFill, BsList } from 'react-icons/bs';
import classes from './QuestionsAnswersHeader.module.css'
import Filter from './Filter/Filter';
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
        <Filter/>
    </div>
}

export default QuestionsAnswersHeader;