import styled from 'styled-components';
import FlexDiv from './FlexDiv'
import Line from './Line'
import React,{ useState } from 'react';



const StyledTextarea = styled.textarea`
    width:90%;
    height:70vh;
    background-color: ${props => props.background ||'black'}; 
    color: ${props => props.color || props.theme.colors.primary};
    font-size: 0.8125rem;
    letter-spacing: 1px;
    resize:none;
    border:none;
    overflow: hidden;



    &:focus{
        outline: 0;
    }

    
  `;


const Textarea = ({color, ...props})=> {
    const [lines,setNewLine] =  useState([' > ']);

    const onPressEnter = (e) => {
        if (e.charCode ===  13) {
            setNewLine([...lines, ' > '])
        }
    }
    return (
        <FlexDiv>
            <FlexDiv direction="column" margin="0 5px 0 10px">
            {lines.map(line=> <Line color = {color}>{line}</Line>)}
            </FlexDiv>

            <StyledTextarea 
            onKeyPress={onPressEnter}
            color={color}
            {...props}></StyledTextarea>

        </FlexDiv>
      
    );
  
}

export default Textarea;