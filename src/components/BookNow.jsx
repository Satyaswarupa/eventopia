import React from "react";
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Button,
} from "@chakra-ui/react";

const BookNow = () => {
  return (
    <div className="formCotainer">
      <h1>Get in touch with</h1>
  <div className="form">
  <div className="form1">
       <FormControl mt={"5px"}>
        <FormLabel color={"white"}>Your Name</FormLabel>
        <Input type="name" placeholder="Enter your name" />
      </FormControl>

      <FormControl mt={"5px"}>
        <FormLabel color={"white"}>Email address</FormLabel>
        <Input type="email" placeholder="Enter your Email" />
        <FormHelperText>We'll never share your email.</FormHelperText>
      </FormControl>

      <FormControl mt={"5px"}>
        <FormLabel color={"white"}>Phone Number</FormLabel>
        <Input type="string" placeholder="Enter your Number" />
      </FormControl>

      <FormControl mt={"5px"}>
        <FormLabel color={"white"}>Message</FormLabel>
        <Input type="name" placeholder="Enter your Message" />
      </FormControl>
      <Button colorScheme="yellow" w={"30%"} mt={"20px"} variant={'solid'} justifyContent={'center'} ml={'35%'} >
        Send
      </Button>
     </div>

     <div className="formImg">
      <img src="https://i.ibb.co/bN8pb9N/pngwing-com-1.png" alt="formImg"  />
     </div>
  </div>

      <div className="add">
        <div className="cntA">
          <h2>Address:</h2>
          <hr/>
          <br />
          <p>At:Kalpana Electricals</p>
          <p>Near nani leath</p>
          <p>Stadium Road pin:756100 </p>
          </div>
        <div className="cntN">
          <h2>Contact Info:</h2>
          <hr/>
          <br />
          <p>+91 7609929929</p>
          <p>+91 6370151031</p>
          <p>eventopia@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default BookNow;
