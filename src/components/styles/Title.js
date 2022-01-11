import styled from 'styled-components';


const StyledTitle = styled.h1`
    font-size: 2rem;
    letter-spacing: -10px;
    padding: 0.5rem;
    font-weight:400;
    color: ${props => props.color ||props.theme.colors.primary};


    @media (max-width: ${({ theme }) => theme.mobile}) {
      flex-direction: column;
      font-size: 1rem;
      letter-spacing: -5px;
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
