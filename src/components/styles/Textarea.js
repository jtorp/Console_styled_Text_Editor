import styled from 'styled-components';
import FlexDiv from './FlexDiv';
import Button from './Button';
import Line from './Line';
import moment from 'moment'
import React, { useState, useRef } from 'react';


const StyledTextarea = styled.textarea`
    width:55%;
    height:80vh;
    max-height:80vh;
    background-color: ${props => props.background || 'transparent'};
    color: ${props => props.color || props.theme.colors.black};    
    font-size: 1rem;
    letter-spacing: length;
    padding-top:0.128rem;
    padding-left:0.125rem;
    resize:none;
    border:none;
    margin-left:0.3rem;
    overflow: none;
    font-family: 'Tomorrow';


    ::-webkit-scrollbar {
    display: none;
  }
    
    &:focus{
        outline: 0;
    }
     
  @media ${props => props.theme.media.mobile}{
      font-size:1.125rem;
      letter-spacing: 0;
      width:80%;
      max-height: 80vh;
  }
    
    @media ${props => props.theme.media.tablet}{
     font-size:1rem;
     width:65%;
     z-index:122;
     max-height: 80vh;

 }    
  `;


const Textarea = ({ color, ...props }) => {
    let currentDateTime = moment().format("ddd,Do of MMM YYYY,h:mma");
    const [lines, setNewLine] = useState(['~']);
    const ref = useRef();

    const downloadTxtFile = (typedArray) => {
        typedArray = ref.current.value;
        const element = document.createElement("a");
        const file = new Blob([currentDateTime, " from TYPE~IT.", "\r\n", "\r\n", [typedArray]], {
            type: "text/plain"
        });
        element.href = URL.createObjectURL(file);
        element.download = "TypeIt.txt";
        document.body.appendChild(element);
        element.click();
    };

    const clearFile = () => {
        setNewLine(['~']);
        ref.current.value = ""
    }

    return (
        <>
            <FlexDiv>
                <FlexDiv direction="column" margin="0 5px 0 10px">
                    {lines.map(line => <Line color="black">{line}</Line>)}
                </FlexDiv>

                <StyledTextarea
                    placeholder=" just type it..."
                    ref={ref}
                    color={color}
                    {...props}></StyledTextarea>

            </FlexDiv>
            <FlexDiv
                margin={"0, 0rem, 0.5rem 3rem"}>
                <Button
                    dark
                    onClick={downloadTxtFile}>
                    <span>save</span>  </Button>
                <Button
                    onClick={clearFile}
                > <span> Clear</span>
                </Button>
            </FlexDiv>
        </>
    );
}

export default Textarea;