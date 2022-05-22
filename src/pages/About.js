import React from "react";
import FlexDiv from "../components/styles/FlexDiv";
import Title from '../components/styles/Title';
import Typist from 'react-text-typist';


const About = () => {
  return (
    
    <FlexDiv margin="5rem 3rem" justify="flex-start" >
      <Title>
      <Typist
          sentences={['Sometimes, technology can be awfully distracting.',
          'Here you can practice mindfulness,', 'by expressive writing.',
          'Type your thoughts without regard to punctuation, or grammar',
          'Let loose and write whatever is on your mind',
          'Here are no rules', ' – write what you want','- when you want', '- how you want']}
        loop={true}
        typingSpeed={55}
        startDelay={5}
        cursorBlinkSpeed={500}
        cursorSmooth={true}
        cursorColor={"#8e8384"}
      />
      </Title>
    </FlexDiv>
     
    
  );
};

export default About;
