import styled from 'styled-components';
import FlexDiv from './FlexDiv';
import Button from './Button';
import Line from './Line';
import moment from 'moment'
import React,{ useState, useRef } from 'react';



const StyledTextarea = styled.textarea`
    width:90%;
    height:66vh;
    background-color: ${props => props.background ||'#000606'}; 
    color: ${props => props.color || props.theme.colors.primary};    
    font-size: 0.8125rem;
    letter-spacing: 1px;
    resize:none;
    border:none;
    overflow: hidden;
    
    &:focus{
        outline: 0;
    }
     
  @media ${props => props.theme.media.mobile}{
      font-size:1.125rem;
      letter-spacing: 0;
  }
    
    @media ${props => props.theme.media.tablet}{
        font-size:1rem;
 }
    
  `;


const Textarea = ({ color, ...props }) => {
    const [typedArray, setTypedArray] = useState([]);

    let currentDateTime=moment().format("ddd, Do of MMM YYYY, h:mm a"); 
    const [lines, setNewLine] = useState([' > ']);
    const ref = useRef();

    const onPressEnter = (e) => {
        if (e.charCode ===  13) {
            setNewLine([...lines, ' > '])
        }
    }

    const downloadTxtFile = (typedArray) => {
        typedArray = ref.current.value;
        console.log(typedArray)
            const element = document.createElement("a");
            const file = new Blob([currentDateTime," From TYPE IT.", "\r\n", [typedArray]], {
              type: "text/plain"
            });
            element.href = URL.createObjectURL(file);
            element.download = "myFile.txt";
            document.body.appendChild(element);
            element.click();
          };

 
    

    return (
        <>
       
        <FlexDiv>
            <FlexDiv direction="column" margin="0 5px 0 10px">
            {lines.map(line=> <Line color = {color}>{line}</Line>)}
            </FlexDiv>

            <StyledTextarea 
            ref={ref}
            onKeyPress={onPressEnter}
            color={color}
            {...props}></StyledTextarea>
            
            </FlexDiv>
            <FlexDiv
                 margin={"0, 0rem, 0.5rem 3rem"}>
            <Button 
                    green
                    onClick={downloadTxtFile}> SAVE
                </Button>
                <Button 
                    pink
                    onClick={()=> ref.current.value = ""}> Clear
                      </Button>
                </FlexDiv>
            </>
      
    );
  
}

export default Textarea;