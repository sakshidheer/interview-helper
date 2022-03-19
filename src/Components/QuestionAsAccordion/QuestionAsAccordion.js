import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@material-ui/core"
import React from "react";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const QuestionAsAccordion= ({data}) =>{

    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
      setExpanded(newExpanded ? panel : false);
    };
    const items = data.map(item =>{
        return (
        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
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
return( <>
{items}
</>)
}

export default QuestionAsAccordion;