import styled, { keyframes } from 'styled-components';

const StyledTitle = styled.h1`
    font-size: 2rem;
    letter-spacing: -10px;
    font-family: 'Apple';
    padding: 0.5rem;
    font-weight:400;
    color: ${props => props.color ||props.theme.colors.primary};

    @media ${props => props.theme.media.mobile}{
      font-size: 1.125rem;
      letter-spacing: 0px;
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
