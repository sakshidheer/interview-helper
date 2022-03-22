import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@material-ui/core"
import React from "react";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import classes from './QuestionAsAccordion.module.css';
const QuestionAsAccordion = ({ data }) => {

    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };
    const items = data.map(item => {
        let id = item.id;
        return (
            <Accordion className={classes.accordion}
                expanded={expanded === id}
                key={id}
                onChange={handleChange(id)}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={"panel"+id}
                    id={id+"-header"}
                >
                    <Typography sx={{ width: "33%", flexShrink: 0 }}>
                        {item.ques}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        {item.ans}
                    </Typography>
                </AccordionDetails>
            </Accordion>)
    })
    return (<div>
        {items}
    </div>)
}

export default QuestionAsAccordion;