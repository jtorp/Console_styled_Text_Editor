import styled from 'styled-components';
import FlexDiv from './FlexDiv';
import Button from './Button';
import Line from './Line';
import moment from 'moment'
import React, { useState, useRef } from 'react';


const StyledTextarea = styled.textarea`
    width:55%;
    height:75vh;
    background-color: ${props => props.background ||'transparent'}; 
    color: ${props => props.color || props.theme.colors.black};    
    font-size: 1rem;
    letter-spacing: length;
    padding-top:0.125rem;
    padding-left:0.125rem;
    resize:none;
    border:none;
    overflow: auto;
    font-family: 'Tomorrow';

    ::-webkit-input-placeholder {
        opacity: 0.25; /*Change the opacity between 0 and 1*/
   }
    
    &:focus{
        outline: 0;
    }
     
  @media ${props => props.theme.media.mobile}{
      font-size:1.125rem;
      letter-spacing: 0;
      width:98%;
      max-height:70vh;
  }
    
    @media ${props => props.theme.media.tablet}{
     font-size:1rem;
     width:65%;
     z-index:122
 }    
  `;


const Textarea = ({ color, ...props }) => {
    let currentDateTime = moment().format("ddd,Do of MMM YYYY,h:mma");
    const [lines, setNewLine] = useState([' ¶ ']);
    const ref = useRef();

    const onPressEnter = (e) => {
        if (e.charCode === 13) {
            setNewLine([...lines, ' ¶ '])
        }
    }

    const downloadTxtFile = (typedArray) => {
        typedArray = ref.current.value;
        const element = document.createElement("a");
        const file = new Blob([currentDateTime, " @TYPE IT.", "\r\n", "\r\n", [typedArray]], {
            type: "text/plain"
        });
        element.href = URL.createObjectURL(file);
        element.download = "TypeIt.txt";
        document.body.appendChild(element);
        element.click();
    };

    const clearFile = () => {
        setNewLine([' ¶ ']);
        ref.current.value = ""
    }

    return (
        <>
            <FlexDiv>
                <FlexDiv direction="column" margin="0 5px 0 10px">
                    {lines.map(line => <Line color={color}>{line}</Line>)}
                </FlexDiv>

                <StyledTextarea
                    placeholder=" Write whatever is on your mind..."
                    ref={ref}
                    onKeyPress={onPressEnter}
                    color={color}
                    {...props}></StyledTextarea>

            </FlexDiv>
            <FlexDiv
                margin={"0, 0rem, 0.5rem 3rem"}>
                <Button
                    onClick={downloadTxtFile}>
                    <span>save</span>  </Button>
                <Button dark
                    onClick={clearFile}
                > <span> Clear</span>
                </Button>
            </FlexDiv>
        </>
    );
}

export default Textarea;