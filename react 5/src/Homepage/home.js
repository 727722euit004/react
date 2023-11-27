import React from 'react';
import SearchAppBar from "./navbar";
import Button from '@mui/material/Button';
import './home.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Home = () => {
  return (
    <>
      <div className="buttongrid">
        <Button variant="contained" className="button" style={{ marginBottom: "10px", backgroundColor: "green" }} href="/login">
          Sign in
        </Button>
        <Button variant="outlined" style={{ marginBottom: "10px" }} href="/reg">
          Sign Up
        </Button>
      </div>
      <SearchAppBar/>
      <div className="page" >
        <div>
          <img src="https://m.media-amazon.com/images/I/61s3uLKk4KL._AC_SR405%2C405_.jpg" style={{marginTop:"10px",backgroundSize:"contain"}} 
          width="450"/>
        </div>
      </div>
      <div className="bigdiv"  style={{backgroundColor:"black"}}>
      <div style={{borderRadius:'10px',margin:'10px',border:'1px solid black',height:'700',width:'230px',backgroundColor:"white"}}>
              <div className='cardimg' style={{height:'250px',width:'300px',marginTop:"10p"}}>
              <img style={{marginLeft:'10px',width:'200px',height:'200px',backgroundSize:"cover"}} src="https://m.media-amazon.com/images/I/61+C5NBJCFL._AC_UY218_.jpg"/>
              </div>
              <div className='price'>
                <ul >
                  <li><b>Good Habits</b></li>
                  <li>By James</li>
                  <li>Best price*<span style={{color:'red'}}> Rs. 1,950.40</span></li>
                  <Button style={{marginTop:'5px'}} variant="contained">Add to Cart</Button>
                </ul>
                </div>
        </div>
      <div style={{borderRadius:'10px',margin:'10px',border:'1px solid black',height:'700',width:'230px',backgroundColor:"white"}}>
              <div className='cardimg' style={{height:'250px',width:'300px',marginTop:"10p"}}>
              <img style={{marginLeft:'10px',width:'200px',height:'250px',backgroundSize:"cover"}} src="https://m.media-amazon.com/images/I/81ZeeOjADFL._AC_UY218_.jpg"/>
              </div>
              <div className='price'>
                <ul >
                  <li><b>Happy Life</b></li>
                  <li>By Ikigai</li>
                  <li>Best price*<span style={{color:'red'}}> Rs. 1,000.40</span></li>
                  <Button style={{marginTop:'5px'}} variant="contained">Add to Cart</Button>
                </ul>
                </div>
        </div>
      <div style={{borderRadius:'10px',margin:'10px',border:'1px solid black',height:'700',width:'230px',backgroundColor:"white"}}>
              <div className='cardimg' style={{height:'250px',width:'300px',marginTop:"10p"}}>
              <img style={{marginLeft:'10px',width:'200px',height:'250px',backgroundSize:"cover"}} src="https://images-eu.ssl-images-amazon.com/images/I/71g6xyjw8IL._AC_UL160_SR160,160_.jpg"/>
              </div>
              <div className='price'>
                <ul >
                  <li><b>Power of Mind</b></li>
                  <li>Josephy Murphy</li>
                  <li>Best price*<span style={{color:'red'}}> Rs. 1,999.99</span></li>
                  <Button style={{marginTop:'5px'}} variant="contained">Add to Cart</Button>
                </ul>
                </div>
        </div>
      <div style={{borderRadius:'10px',margin:'10px',border:'1px solid black',height:'700',width:'230px',backgroundColor:"white"}}>
              <div className='cardimg' style={{height:'250px',width:'300px',marginTop:"10p"}}>
              <img style={{marginLeft:'10px',width:'200px',height:'250px',backgroundSize:"cover"}} src="https://images-eu.ssl-images-amazon.com/images/I/61aFAS1mW7L._AC_UL160_SR160,160_.jpg"/>
              </div>
              <div className='price'>
                <ul >
                  <li><b>Talk to Any</b></li>
                  <li>Leil Lownder</li>
                  <li>Best price*<span style={{color:'red'}}> Rs. 1,950.40</span></li>
                  <Button style={{marginTop:'5px'}} variant="contained">Add to Cart</Button>
                </ul>
                </div>
        </div>
      </div>
      

      <footer className="site-footer" style={{ alignItems: "center", textAlign: "center" }}>
        <div className="social-icons" style={{ alignItems: "center", textAlign: "center" }}>
          <a href="#" className="text-white"><InstagramIcon style={{ height: "50px", width: "70px" }} /></a>
          <a href="#" className="text-white1"><FacebookIcon style={{ height: "50px", width: "70px" }} /></a>
          <a href="#" className="text-white1"><LinkedInIcon style={{ height: "50px", width: "70px" }} /></a>
          <a href="#" className="text-white1"><TwitterIcon style={{ height: "50px", width: "70px" }} /></a>
          <a href="#" className="text-white2"><YouTubeIcon style={{ height: "50px", width: "70px" }} /></a>
          <a href="#" className="text-white3"><WhatsAppIcon style={{ height: "50px", width: "70px" }} /></a>
        </div>
      </footer>
    </>
  );
}

export default Home;
