import styled,{css} from 'styled-components';

const StyledButton = styled.button`
  display: inline-block;
  position: relative;
  border: none;
  color: ${props => props.color || props.theme.colors.black};
  cursor: pointer;
  margin: 1rem 1.330rem;
  background:  ${props => props.color || props.theme.colors.white};

  &:focus{
    outline: 0;
  }

  &:before{
    content:"";
    width: 0;
    height: 2px;
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
    height: 2px;
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

  ${props => props.dark && css`
  background:  ${props => props.color || props.theme.colors.gray};
  color: ${props => props.theme.colors.white};
  &:hover{
    color: ${props => props.theme.colors.black};
  }
  `
  }

  span{
    display: block;
    font-family: 'Questrial';
    margin: .825rem;
    font-size: 1rem;
    padding: 0.325rem 1.1rem;
    font-weight: 300;
    text-transform: uppercase;

    @media ${props => props.theme.media.mobile}{
        font-size: 0.7rem;
        padding: 0.325rem 1rem;
    }

    @media ${props => props.theme.media.tablet}{
        font-size:0.8rem;
        padding: 0.325rem 1rem;
    }

    &:before{
        content:"";
        width:2px;
        height:0;
        position: absolute;
        transition: all 0.2s linear;
        background: ${props => props.color || props.theme.colors.black};
        left: 0;
        top: 0;
      }
      &:after{
        content:"";
        width:2px;
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