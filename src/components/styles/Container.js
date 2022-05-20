import styled from 'styled-components'


const StyledContainer  = styled.div`
width: 100%;
height: 100vh;
padding:1rem; 
color:${props =>props.color || props.theme.colors.primary};
background-color: ${props => props.background || props.theme.backgrounds.primary};
overflow: auto
`;

const Container = (props)=> {

    return (
      <StyledContainer {...props}/>
    );
  
}

export default Container;

