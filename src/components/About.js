import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function About() {
    return (
        <div>
            <div className='about-title'>About Netflix</div>
            <div className='about-detail'>
                <Accordion className='detail-header'>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                        aria-controls="panel1a-content"
                    >
                        <Typography>What is Netflix?</Typography>
                    </AccordionSummary>
                    <AccordionDetails className='about-detail-info'>
                        <Typography>
                            Netflix is a streaming service that offers a wide variety
                            of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className='detail-header'>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                        aria-controls="panel2a-content"

                    >
                        <Typography>How much does Netflix cost?</Typography>
                    </AccordionSummary>
                    <AccordionDetails className='about-detail-info'>
                        <Typography>
                            Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
                            streaming device, all for one fixed monthly fee. Plans range from
                            70,000 ₫ to 260,000 ₫ a month. No extra costs, no contracts.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className='detail-header'>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                        aria-controls="panel1a-content"
                    >
                        <Typography>Where can I watch?</Typography>
                    </AccordionSummary>
                    <AccordionDetails className='about-detail-info'>
                        <Typography>
                            Watch anywhere, anytime. Sign in with your Netflix account to watch
                            instantly on the web at netflix.com from your personal computer or on
                            any internet-connected device that offers the Netflix app, including
                            smart TVs, smartphones, tablets, streaming media players and game
                            consoles.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className='detail-header'>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                        aria-controls="panel1a-content"
                    >
                        <Typography>How do I cancel?</Typography>
                    </AccordionSummary>
                    <AccordionDetails className='about-detail-info'>
                        <Typography>
                            Netflix is flexible. There are no pesky contracts and no commitments.
                            You can easily cancel your account online in two clicks. There are no
                            cancellation fees – start or stop your account anytime.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>

        </div>
    )
}
