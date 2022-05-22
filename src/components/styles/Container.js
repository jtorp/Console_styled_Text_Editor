import styled from 'styled-components';
import whitebackground from "./assets/whitebackground.png";



const StyledContainer  = styled.div`
width: 100%;
height: 100vh;
top:0;
position:fixed;
color:${props =>props.color || props.theme.colors.black};
background-color: ${props => props.background || props.theme.backgrounds.secondary};
background: url(${whitebackground})  no-repeat center center fixed;
-webkit-background-size: cover;
-moz-background-size: cover;
-o-background-size: cover;
background-size: cover;
z-index:10;


@media ${props => props.theme.media.mobile}{
  background-image: none;
  scroll:auto
}
`;

const Container = (props)=> {
    return (
      <StyledContainer {...props}>
      </StyledContainer>
    );  
}

export default Container;

