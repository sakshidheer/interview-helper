import { useEffect, useState } from 'react';
import Languages from '../../Components/Languages';
import QuestionAsAccordion from '../../Components/QuestionAsAccordion/QuestionAsAccordion';
import classes from './QuestionsAnswers.module.css';

const QuestionsAnswers = () => {
    const [quesAns, setQuesAns] = useState([]);
    useEffect(() => {
        const fetchQuesAns = async () => {
            let response = await fetch('http://127.0.0.1:8000/getAllQuestionsAndAnswers')
            const data = await response.json();
            setQuesAns(data)
        }
        fetchQuesAns();
    },[]);
    return (
        <div className={classes.home}>
            <QuestionAsAccordion data={quesAns}/>
        </div>)
}

export default QuestionsAnswers;