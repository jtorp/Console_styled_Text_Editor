import { ThemeProvider} from  'styled-components';
import { BrowserRouter } from "react-router-dom";
import React from 'react';
import FlexDiv from './components/styles/FlexDiv'
import Global from './components/styles/Global';
import Navbar from './components/styles/Navbar';
import AppRouter from './AppRouter';
import Container from './components/styles/Container';

const theme = {
  colors:{
    black:"#040404",
    gray: "#C7C4BB",
    white:"#f5f5f5",
    brown:"#8e8384"
  },
  btns:{
    primary: "#C7C4BB", 
    secondary: "#8e8384"
  },
  backgrounds:{
    primary:"#040404",
    secondary: "#f5f5f5",
    
  },
  svgs:{
    primary:"#8e8384",
    secondary: "#C7C4BB",
  },
  media: {
    mobile:"(max-width:428px)",
    tablet:"(max-width: 834px) and (min-width:428px) ",
  },
}

function App() {
  const navLinks = [
    {name:"About", to:"/about"}, 
    {name: "Write", to:"/console"},
  ]
   return (
     <BrowserRouter> 
     <ThemeProvider theme={theme}>
       <Global/>
       <Container>
         <FlexDiv margin={"2rem 0"}>
         <Navbar justify={"flex-end"} navLinks={navLinks}/>
         </FlexDiv>
         <AppRouter/>
       </Container>
     </ThemeProvider>
     </BrowserRouter>
 
  );
}

export default App;
