import styled from 'styled-components';

const StyledTitle = styled.h1`
    font-size: ${props => props.fontSize || "2rem"};;
    letter-spacing: 1px;
    font-family: 'Questrial';
    padding: 0.5rem;
    font-weight:400;
    color: ${props => props.color ||props.theme.colors.black};

    @media ${props => props.theme.media.mobile}{
      font-size: 1.125rem;
      letter-spacing: 0px;
      margin-bottom:1rem;
  }
    @media ${props => props.theme.media.tablet}{
      font-size:1rem;
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
