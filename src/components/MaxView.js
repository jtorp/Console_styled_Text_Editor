import { useRef } from 'react';
import useFullscreenStatus from '../hooks/useFullScreen';
import enterFs from '../components/styles/assets/enterFs.png';
import exitFs from '../components/styles/assets/exitFs.png'
import styled from 'styled-components';



const MaxContent = styled.div`
width: 100%
`
const MaxActions = styled.div`
position:absolute;
top:92%;
width: auto;
height:2rem;

button{
    background-color: transparent;
    cursor:pointer;
    color:gray ;
    border: none;
    top:90% !important;
    margin-left:1rem;
}

img{   
    opacity:0.78;   
}

@media ${props => props.theme.media.mobile}{
    position:absolute;
    margin-left: 85%;
    top:72%;
    width: auto;
    height:5rem;
}

span{
    font-family: 'Questrial';
    font-size: 0.7rem;
    opacity:30%;
    font-style: italic;
}



`

function MaxView({ children, backgroundColor }) {
    const fsElement = useRef(null);
    let isFullscreen, setFullScreen;
    let errorMessage;

    try {
        [isFullscreen, setFullScreen] = useFullscreenStatus(fsElement);
    } catch (error) {
        errorMessage = "Fullscreen not supported"

    }

    const handleExitFullScreen = () => {
        document.exitFullscreen();
    }

    return (
        <div
            ref={fsElement}
            className={`maxview-container ${isFullscreen ? "fullscreen" : " default"}`}
            style={{ backgroundColor: isFullscreen ? backgroundColor : null }}
        >
            <MaxContent>{children}</MaxContent>
            <MaxActions>
                {
                    errorMessage ? (
                        <span>
                            {errorMessage}
                        </span>
                    ) :
                        isFullscreen ? (<button onClick={handleExitFullScreen}>
                            <img alt="exit fullscreen"
                                src={exitFs} />
                        </button>)
                            : (
                                <button onClick={setFullScreen}>
                                    <img alt="enter fullscreen"
                                        src={enterFs} />
                                </button>
                            )
                }
            </MaxActions>
        </div>
    );
}
export default MaxView;