import { IoMdAdd } from 'react-icons/io';
import classes from './QuestionsAnswersHeader.module.css'
const QuestionsAnswersHeader = () =>{
    return <div className={classes.header}>
        <IoMdAdd size="1.5em" color='#f50057'/>
    </div>
}

export default QuestionsAnswersHeader;