import styled from 'styled-components';

const StyledLine = styled.div`
    font-size: 1rem;
    letter-spacing: 0px;
    margin-left:1rem;
    margin-top: 0.5rem;
    padding-top:0.125rem;
    overflow: auto;
    opacity:0.5;
    line-height:1.1rem;
    color: ${props => props.color || props.theme.colors.brown};

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