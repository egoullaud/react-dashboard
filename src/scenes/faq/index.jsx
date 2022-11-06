import React from 'react'
import {useTheme, Box} from "@mui/material"
import Header from '../../components/Header'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import Typography from "@mui/material/Typography"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { tokens } from "../../theme"

function FAQ() {
const theme= useTheme();
const colors = tokens(theme.palette.mode);

  return (
    <Box 
    m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions"/>

      <Accordion 
      sx={{
        background: colors.primary[400]
      }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Recusandae distinctio optio eius fuga voluptatem quod.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion   
      sx={{
        background: colors.primary[400]
      }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Super Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
           Officiis soluta impedit, distinctio nihil cum numquam, nostrum 
           explicabo ullam recusandae eaque doloremque ex!
            Illo exercitationem quos amet! Facilis quos cum nihil.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion 
        sx={{
          background: colors.primary[400]
        }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          Another Super Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
          Nobis numquam pariatur laudantium soluta neque sed, dolores, officia 
          unde eum aliquid consequatur et asperiores possimus? Fugit ad odit 
          laboriosam, nulla nobis neque, sequi harum eum rerum est quas provident 
          aperiam delectus?
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion 
        sx={{
          background: colors.primary[400]
        }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Annoying but Popular Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
          Ab excepturi ipsa iure eos eaque perspiciatis ipsam quas incidunt ea laborum.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  )
}

export default FAQ
