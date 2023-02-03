import React, { useState } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
const SearchPage = () => {
 
  const [gitname, setGitname] = useState("");
  const [choose, setChoose] = useState(false);
  const [gitdata, setGitdata] = useState({
    name: "",
    avatar: "",
    htlink: "",
    bio: "",
  });
  const local=JSON.parse(localStorage.getItem("name") || "[]")
  const[alldata,setalldata]=useState(local);
 
 
  const searchGit = (e) => {
    axios.get(`https://api.github.com/users/${gitname}`).then((response) => {
      console.log(response);
      setGitdata({
        name: gitname,
        avatar: response.data.avatar_url,
        hlink: response.data.html_url,
        bio:
          response.data.bio === null
            ? "empty bio of htis username"
            : response.data.bio,
      });
     
      console.log(response.data.bio);
      
    });
    setalldata([...alldata,gitdata])
    localStorage.setItem("name",JSON.stringify(alldata));
    if (e.target.value !== "") {
      setChoose(false);
    } else {
      setChoose(true);
    }
    
    console.log("ddd",alldata);
    
  };
 

  console.log('mm',gitdata)
  return (
      <>
      <Typography sx={{textAlign:"center",color:"black",fontSize:"39px",margin:"3rem -2rem"}}>Git Data by userName</Typography>
    <div>
      <FormControl fullWidth sx={{ m: 1, width: "50%", margin: "0rem 21rem" }}>
        <InputLabel htmlFor="outlined-adornment-amount">userName</InputLabel>
        <OutlinedInput
          onChange={(e) => {
            setGitname(e.target.value);
          }}
          id="outlined-adornment-amount"
          label="userName"
        />
        <div sx={{display:"flex"}}>
        <Button sx={{width:"30%",margin:"2rem 1rem"}} onClick={searchGit} variant="contained">
          Search Git
        </Button>
       
       <Button variant="contained"> <Link to="/Edit" state={{data:alldata}}>
          History</Link>
        </Button></div>
      </FormControl>

      <div>
        
        {choose ? (
          <Card sx={{ maxWidth: 350, maxHeight: 350 ,margin:"auto"}}>
            <CardHeader
              avatar={
                <Avatar aria-label="recipe">
                  <CardMedia component="img" image={gitdata.avatar} alt="" />
                </Avatar>
              }
              title={gitdata.name}
            />
            <CardContent>{gitdata.bio}</CardContent>
            <CardActions>
              <Button size="small">
                <a href={gitdata.hlink}>Learn More</a>
              </Button>
            </CardActions>
          </Card>
        ):""}
      </div>
    </div>
    </> );
};

export default SearchPage;
