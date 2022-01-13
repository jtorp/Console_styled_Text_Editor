import styled, { keyframes } from 'styled-components';

const pulsate = keyframes`
   
100% {
    text-shadow:
    0 0 4px green,
    0 0 11px green,
    0 0 19px green,
    0 0 40px limegreen,
    0 0 80px limegreen,
    0 0 90px limegreen,
    0 0 100px limegreen,
    0 0 150px limegreen;
} 

0% {
text-shadow:
  0 0 4px green,
  0 0 10px green,
  0 0 18px green,
  0 0 38px limegreen,
  0 0 73px limegreen,
  0 0 80px limegreen,
  0 0 94px limegreen,
  0 0 140px limegreen;
}
`
const StyledTitle = styled.h1`
    font-size: 2rem;
    letter-spacing: -10px;
    padding: 0.5rem;
    font-weight:400;
    color: ${props => props.color ||props.theme.colors.primary};

    &:hover{
      animation: ${pulsate} 0.10s ease-in-out infinite alternate;  
      cursor: pointer; 
    }

    @media ${props => props.theme.media.mobile}{
      font-size: 1.125rem;
      letter-spacing: -8px;
      margin-bottom:1rem;
  }
    @media ${props => props.theme.media.tablet}{
      font-size:2.125rem;
      margin-bottom: 1rem;
    }

  `;


const Title = (props) => {
    return (
      <>
       <StyledTitle {...props}/>
      </>
       
  );
}

export default Title;
