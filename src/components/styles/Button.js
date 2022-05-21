import styled,{css} from 'styled-components';

const StyledButton = styled.button`
    cursor: pointer; 
    width:6rem;
    border:none;
    font-size: 2rem;
    font-family: 'Questrial';
    margin: 1rem 1.330rem;
    font-size: 1rem;
    padding: 0.58rem 1rem;
    font-weight: 300;
    text-transform: uppercase;
    align-self:  ${props => props.alignSelf || 'center'};

    img{
        height:2rem
    }
  
    &:focus{
        outline: 0;
    }
    
    @media ${props => props.theme.media.mobile}{
        font-size: 1rem;
        padding: 0.58rem;
    }
        
    @media ${props => props.theme.media.tablet}{
        font-size: 1rem;
        padding: 0.58rem;
     }

        ${props => props.outlined && css`
        background:transparent;
        border: 1px solid ${props=>props.color || props.theme.colors.black};
        color:  ${props => props.color || props.theme.colors.primary};
        &:hover{
            color: ${props=>props.theme.colors.white};
            transition: all .5s ease-in-out;
            background: ${props => props.theme.colors.black};            
        }
        `}

        ${props => props.filled && css`
        background:transparent;
        border: 1px solid ${props=>props.color || props.theme.colors.secondary};
        color:  ${props => props.color || props.theme.colors.secondary};
        &:hover{
            transition: all .3s ease-in-out; 
            color: ${props=>props.theme.colors.white};
            transition: all .5s ease-in-out;
            background: ${props => props.theme.colors.brown};      
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