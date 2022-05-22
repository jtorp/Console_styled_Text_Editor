import { Link } from "react-router-dom";
import React, { useState } from "react";
import styled, {keyframes} from 'styled-components';
import FlexDiv from './FlexDiv';
import TYPEIT from "../styles/assets/TYPEIT.png"

const bounce =keyframes`
0%,
20%,
60%,
100%{
transform: translateY(0);
}
40%{
  transform: translateY(-10px);
}
80%{
  transform: translateY(-5px);
}
`

const StyledHeader = styled.header`
width:100%;
height:4rem;
position: fixed;
top: 0;
left: 0;
display:flex;
align-items: baseline;
z-index: 90;
background-color: ${props => props.background || props.theme.backgrounds.secondary};
`

const Logo = styled.a`
  padding: 0.825rem;
  top:3%;
  margin-left:1rem;
  color: ${props => props.color || props.theme.colors.black};
  text-decoration: none;
  font-weight: 800;
  font-size: 1.7rem;

  img{
    display:flex;
    width: 4.125rem;
  }
`;

const Hamburger = styled.div`
display: none;
flex-direction: column;
cursor: pointer;
position: fixed;
top:3%;
right:4%;

svg{
  stroke: ${props => props.color || props.theme.colors.brown};
  stroke-width:2;
}
@media ${props => props.theme.media.tablet}{
  display:flex;  
}

@media ${props => props.theme.media.mobile}{
  display:flex;
}
&:hover{
  animation: ${bounce} 1s;  
}
`

const StyledNav = styled.nav`
width: 100%;
display:flex;
align-self:center;
justify-content: ${props => props.justify || 'stretch'};

@media ${props => props.theme.media.mobile}{
  flex-direction: column;
  position:fixed;
  overflow: hidden;
  right:0;
  top:4rem;
  width:60%;
  align-items:center;
  background-color:inherit;
  transform:  ${({ isHamActive }) => (isHamActive ? "0": "translateX(100%)")};
  transition: transform 0.8s cubic-bezier(.16,1,.3,1);
  -webkit-transition: transform 0.8s cubic-bezier(.16,1,.3,1);
    -moz-transition: transform 0.8s cubic-bezier(.16,1,.3,1);
    -o-transition:transform 0.8s cubic-bezier(.16,1,.3,1);
    -ms-transition:transform 0.8s cubic-bezier(.16,1,.3,1);
  transition-delay: 0.15s;

}
@media ${props => props.theme.media.tablet}{
  flex-direction: column;
  position:fixed;
  overflow: hidden;
  right:0;
  top:4rem;
  width:60%;
  align-items:center;
  background-color:inherit;
  transform:  ${({ isHamActive }) => (isHamActive ? "0": "translateX(100%)")};
  transition: transform 0.8s cubic-bezier(.16,1,.3,1);
  -webkit-transition: transform 0.8s cubic-bezier(.16,1,.3,1);
    -moz-transition: transform 0.8s cubic-bezier(.16,1,.3,1);
    -o-transition:transform 0.8s cubic-bezier(.16,1,.3,1);
    -ms-transition:transform 0.8s cubic-bezier(.16,1,.3,1);
  transition-delay: 0.15s;
}
`

const StyledLink = styled(Link)`
    cursor: pointer;
    font-family: 'Questrial';
    position: relative;
    text-decoration: none;
    font-size: 1rem;
    text-transform:uppercase;
    font-weight: 300;
    padding:1rem;
    word-spacing:-10px;
    letter-spacing: 0.15rem;
    color: ${props => props.color || props.theme.colors.brown};

      &:before {
      content: '';
      position: absolute;
      transition: transform .5s ease;
      }

    &:focus,
    &:visited{
      border-bottom: 1px  solid ${props => props.color || props.theme.colors.black};
    }

    &:hover {
      color: ${props => props.color || props.theme.colors.black};
    }

    @media ${props => props.theme.media.mobile}{
      font-size:1.1rem;
      padding-bottom:2rem;
      
    }
    @media ${props => props.theme.media.tablet}{
      font-size:1.125rem;
      padding-bottom:2rem;
    }
`;

const Navbar = ({  navLinks,...props}) => {  
  const [isHamActive, setHamActive]= useState(false);

  const handleOpen = () => {
    setHamActive(!isHamActive)
  }

  const handleClose = () => {
    setHamActive(false)
  }

  return ( 
        <StyledHeader>
      <Logo href="/">
        <img src={TYPEIT} alt="Type > it"/>
      </Logo>           
             <FlexDiv onClick={handleOpen}>{
            isHamActive 
            ?
           <Hamburger>
                    <svg  width="25" height="25">  
                    <line rx="2" ry="2" x1="2" y1="5" x2="25" y2="25" />  
                    <line rx="2" ry="2" x1="2" y1="25" x2="25" y2="5"/>  
                  </svg>    
            </Hamburger>
            :
           <Hamburger> 
                  <svg  width="30" height="30">  
                  <line rx="2" ry="2" x1="0" y1="2" x2="25" y2="2" />  
                  <line rx="2" ry="2" x1="0" y1="10" x2="25" y2="10" />  
                  <line rx="2" ry="2" x1="0" y1="18" x2="25" y2="18"/>  
                </svg>  
            </Hamburger> 
            }
           </FlexDiv>
         <StyledNav {...props} isHamActive={isHamActive} onClick={(e)=>e.stopPropagation()}> 
         {navLinks.map(link=> 
                    <StyledLink 
                    onClick={handleClose}
                    to={link.to}>
                    {link.name} 
                    </StyledLink>)}
          </StyledNav>
      </StyledHeader>
  );
};
      
export default Navbar;
