import styled,{css} from 'styled-components';



const StyledButton = styled.button`
    cursor: pointer; 
    border:none;
    border-radius: 3px;
    font-size: 1em;
    margin: 1rem 2em;
    font-size: 1rem;
    padding: 0.25em 1em;
    font-weight: 500;
    text-transform: uppercase;
    align-self:  ${props => props.alignSelf || 'center'};
    &:focus{
        outline: 0;
    }
    &:hover{
        transition: all .3s ease-in-out;
        text-shadow: 0.125rem 0.125rem 0.625rem  ${props=>props.theme.colors.primary};
        box-shadow: 0 0 1rem 0 ${props=>props.theme.colors.primary} inset, 0 0 1rem 0.125rem ${props=>props.theme.colors.primary};  
    }
   
    @media ${props => props.theme.media.mobile}{
        font-size: 1.25rem;
        align-self:  center;
    }
        
        @media ${props => props.theme.media.tablet}{
            font-size: 2.0625rem;
            align-self:  center;
     }

        ${props => props.filled && css`background: ${props => props.background || props.theme.btns.primary};
        color:  ${props => props.color || props.theme.colors.primary};
        `}

        ${props => props.outlined && css`
        background:transparent;
        border: 1px solid ${props=>props.color || props.theme.colors.primary};
        color:  ${props => props.color || props.theme.colors.primary};
        `} 
`
const Button = (props)=> {

    return (
      <StyledButton {...props}/>
    );
  
}

export default Button;