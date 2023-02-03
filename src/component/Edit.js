import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Typography from "@mui/material/Typography";
import { AccordionDetails } from "@mui/material";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";

const Edit = () => {
  const location = useLocation();
  const data = location.state;
  const [status, setStatus] = useState(data.data);



  return (
    <div>
      <Typography sx={{textAlign:"center",color:"blue",fontSize:"39px"}}>History Page</Typography>
      {status.map((list) => {
        return (
          <div>
            <Accordion sx={{width:"50%",margin:"auto"}}>
              <AccordionSummary
                expandIcon={<ArrowDropDownIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography sx={{textAlign:"center"}}> {list.name}</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{width:"50%"}} >
              <Card sx={{justifyContent:"center"}}>
            <CardHeader
              avatar={
                <Avatar aria-label="recipe">
                  <CardMedia component="img" image={list.avatar} alt="" />
                </Avatar>
              }
              title={list.name}
            />
            <CardContent>{list.bio}</CardContent>
            <CardActions>
              <Button size="small">
                <a href={list.hlink}>Learn More</a>
              </Button>
            </CardActions>
          </Card>
              </AccordionDetails>
            </Accordion>
          </div>
        );
      })}
    </div>
  );
};

export default Edit;
