import styled, { css } from 'styled-components';

const StyledButton = styled.button`
  position: absolute;
  top:84%;
  left:630px;
  border: none;
  color: ${props => props.color || props.theme.colors.black};
  cursor: pointer;
  width:89px;
  margin: 1rem 1.330rem;
  background:  ${props => props.color || props.theme.colors.white};

  &:focus{
    outline: 0;
  }

  &:before{
    content:"";
    width: 0;
    height: 1px;
    position: absolute;
    transition: all 0.2s linear;
    background: ${props => props.color || props.theme.colors.black};
    transition-delay: 0.2s;
    right: 0;
    top: 0;
  }
  &:after{
    content:"";
    width: 0;
    height: 1px;
    position: absolute;
    transition: all 0.2s linear;
    background: ${props => props.color || props.theme.colors.black};
    transition-delay: 0.2s;
    left: 0;
    bottom: 0;
  }
  &:hover::before, &:hover:after{
    width: 100%;
  }
  @media ${props => props.theme.media.xsmobile}{
    top:76%;
    width:100px !important;
    left:230px !important;
  }
  @media ${props => props.theme.media.mobile}{
    top:76%;
    width:119px;
    left:265px;
  }

  ${props => props.dark && css`
  position: absolute;
  top:84%;
  left:520px;
  border:none;
  background:  ${props => props.color || props.theme.colors.gray};
  color:  ${props => props.color || props.theme.colors.secondary};

  @media ${props => props.theme.media.mobile}{
   top:86%;
   left:265px;
  }

  &:hover{
      transition: all .3s ease-in-out;
      color: ${props => props.theme.colors.white};
      transition: all .5s ease-in-out;
  }
  `
}
  span{
    display: block;
    font-family: 'Questrial';
    margin: 0.825rem;
    font-size: 0.7rem;
    font-weight: 300;
    text-transform: uppercase;

    @media ${props => props.theme.media.mobile}{
        font-size: 1rem;          
      }

    @media ${props => props.theme.media.tablet}{
        font-size:0.8rem;
        padding: 0.325rem 1rem;

    }

    &:before{
        content:"";
        width:1px;
        height:0;
        position: absolute;
        transition: all 0.2s linear;
        background: ${props => props.color || props.theme.colors.black};
        left: 0;
        top: 0;
      }
      &:after{
        content:"";
        width:1px;
        height:0;
        position: absolute;
        transition: all 0.2s linear;
        background: ${props => props.color || props.theme.colors.black};
        right: 0;
         bottom: 0;
      }
      &:hover::before, &:hover:after{
        height: 100%;
      }
  }
   `
const Button = (props) => {
    return (
      <StyledButton {...props}>
      </StyledButton>
     );
  
}

export default Button;