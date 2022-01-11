import styled from 'styled-components';



const StyledLine = styled.div`
    font-size: 0.8125rem;
    letter-spacing: 0px;
    overflow: hidden;
    color: ${props => props.color || props.theme.colors.primary};

`



const Line = (props)=> {
    return (
      <StyledLine {...props}/>
    );
  
}

export default Line;