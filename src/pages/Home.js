import React from 'react';
import moment from 'moment';
import Title  from '../components/styles/Title';
import FlexDiv from '../components/styles/FlexDiv';
import Button from '../components/styles/Button';
import Textarea from '../components/styles/Textarea';

function Home() {
   let currentDateTime=moment().format("ddd, Do of MMM YYYY, h:mm a"); 
   return (
     <>
      <FlexDiv justify="flex-start" margin="0.25 rem, 3rem">
         <Title> {currentDateTime} </Title>
         </FlexDiv>
       <Textarea />
   </>
  );
}
export default Home;
