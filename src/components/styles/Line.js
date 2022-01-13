import styled from 'styled-components';



const StyledLine = styled.div`
    font-size: 0.8125rem;
    letter-spacing: 0px;
    overflow: hidden;
    opacity:0.7;
    color: ${props => props.color || props.theme.colors.primary};

    @media ${props => props.theme.media.mobile}{
      font-size:1.125rem;
    }

`



const Line = (props)=> {
    return (
      <StyledLine {...props}/>
    );
  
}

export default Line;