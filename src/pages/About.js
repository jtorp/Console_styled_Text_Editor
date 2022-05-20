import React from "react";
import FlexDiv from "../components/styles/FlexDiv";
import Title from '../components/styles/Title';
import Typist from 'react-text-typist';


const About = () => {
  return (
    
    <Title>
       <FlexDiv margin="5rem 3rem" justify="flex-start" >      <Typist
        sentences={['Sometimes, technology can be awfully distracting.', 'Here you can focus on writing.', 'Write one sentence at a time.','One sentence - one line.', 'Focus.', 'Just type it.']}
        loop={true}
        typingSpeed={55}
        startDelay={5}
        cursorBlinkSpeed={500}
        cursorSmooth={true}
        cursorColor={"hotpink"}
      />
       </FlexDiv>
      </Title>
     
    
  );
};

export default About;
