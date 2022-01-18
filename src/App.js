import { ThemeProvider} from  'styled-components';
import { BrowserRouter } from "react-router-dom";
import React from 'react';
import FlexDiv from './components/styles/FlexDiv'
import Global from './components/styles/Global';
import GlobalFontStyles from './components/styles/GlobalFonts';
import Navbar from './components/styles/Navbar';
import AppRouter from './AppRouter';
import Container from './components/styles/Container';

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
    secondary:"#darkgray"
  },
  svgs:{
    primary: "limegreen",
    secondary:"orange"
  },
  media: {
    mobile:"(max-width:425px)",
    tablet:"(max-width: 768px) and (min-width:425px) ",
  },
}

function App() {
  const navLinks = [
    {name:"About", to:"/about"}, 
    {name: "Console", to:"/console"},
    {name: "Link_3", to:"/*"},
    {name: "Link_4", to:"/*"},
  ]
   return (
     <BrowserRouter> 
     <ThemeProvider theme={theme}>
       <GlobalFontStyles/>
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
