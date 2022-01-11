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
        color:  ${props => props.theme.colors.secondary};
        background:${props => props.filled};
        transition: all .3s ease;
        
    };
    @media (max-width: ${({ theme }) => theme.mobile}) {
        font-size: 1rem;
        letter-spacing: -5px;
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

// const ButtonXL = styled(StyledButton)`
// font-size: 2rem;
// `;

const Button = (props)=> {

    return (
      <StyledButton {...props}/>
    );
  
}

export default Button;