import styled,{css} from 'styled-components';

const StyledButton = styled.button`
    cursor: pointer; 
    width:140px;
    border:none;
    border-radius: 3px;
    font-size: 3rem;
    font-family: 'Apple';
    margin: 1rem 2em;
    margin-bottom:5rem;
    font-size: 1rem;
    padding: 0.58em 1em;
    font-weight: 500;
    text-transform: uppercase;
    align-self:  ${props => props.alignSelf || 'center'};
  
    &:focus{
        outline: 0;
    }
    
    @media ${props => props.theme.media.mobile}{
        font-size: 1.625rem;
        width:100%;

    }
        
    @media ${props => props.theme.media.tablet}{
            font-size: 1.125rem;
     }

        ${props => props.green && css`
        background:transparent;
        border: 1px solid ${props=>props.color || props.theme.colors.primary};
        color:  ${props => props.color || props.theme.colors.primary};
        &:hover{
            color: ${props=>props.theme.colors.primary};
            transition: all .3s ease-in-out;
            text-shadow: 0.125rem 0.125rem 0.625rem  ${props=>props.theme.colors.primary};
            box-shadow: 0 0 1rem 0 ${props=>props.theme.colors.primary} inset, 0 0 1rem 0.125rem ${props=>props.theme.colors.primary};      
        }
        `}

        ${props => props.pink && css`
        background:transparent;
        border: 1px solid ${props=>props.color || props.theme.colors.secondary};
        color:  ${props => props.color || props.theme.colors.secondary};
        &:hover{
            transition: all .3s ease-in-out;
            box-shadow: 0 0 1rem 0 ${props=>props.theme.colors.secondary} inset, 0 0 1rem 0.125rem ${props=>props.theme.colors.secondary}; 
            text-shadow: 0.125rem 0.125rem 0.625rem  ${props=>props.theme.colors.secondary};
        }
        `} 
`
const Button = (props)=> {

    return (
        <StyledButton {...props}>
           
        </StyledButton>
    
     );
  
}

export default Button;