import { useEffect, useState } from 'react';
import QuestionAsAccordion from '../../Components/QuestionAsAccordion/QuestionAsAccordion';
import QuestionsAnswersHeader from '../../Components/QuestionsAnswersHeader/QuestionsAnswersHeader';
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
            <QuestionsAnswersHeader/>
            <QuestionAsAccordion data={quesAns}/>
        </div>)
}

export default QuestionsAnswers;