import { ThemeProvider} from  'styled-components';
import React from 'react';
import moment from 'moment'

import Container from './components/styles/Container';
import Title  from './components/styles/Title';
import FlexDiv from './components/styles/FlexDiv'
import Footer from './components/Footer';
import Global from './components/styles/Global';
import Button from './components/styles/Button';
import Textarea from './components/styles/Textarea';
import FontStyles from './components/styles/GlobalFonts';

const theme = {
  colors:{
    primary:"limegreen",
    secondary: "hotpink"
  },
  btns:{
    primary:"limegreen",
  },
  backgrounds:{
    primary:"black",
    secondary:"brown"
  },
  media: {
    mobile:"(max-width:425px)",
    tablet:"(max-width: 768px) and (min-width:425px) ",
  },

}

function App() {

   let currentDateTime =moment().format("ddd, Do of MMM YYYY, h:mm a"); 
  
   return (
     <ThemeProvider theme={theme}>
       <FontStyles/>
       <Global/>
       <Container>
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
      </Container>
     </ThemeProvider>
 
  );
}

export default App;
