import React from 'react';
import moment from 'moment'
import Title  from '../components/styles/Title';
import FlexDiv from '../components/styles/FlexDiv'
import Button from '../components/styles/Button';
import Textarea from '../components/styles/Textarea';

function Home() {
   let currentDateTime =moment().format("ddd, Do of MMM YYYY, h:mm a"); 
   return (
     <>
      <FlexDiv justify="flex-start" margin="0.25 rem, 3rem">
         <Title> {currentDateTime} </Title>
         </FlexDiv>
         <Textarea/>

      <FlexDiv  direction={"column"} margin={".750rem 0.5rem"}>
        <Button 
          outlined
          alignSelf="flex-end"
          onClick = {()=>{}}> send </Button>
    
      </FlexDiv>
   </>
  );
}
export default Home;
