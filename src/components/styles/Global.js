import { createGlobalStyle} from 'styled-components';

const Global = createGlobalStyle `

* {
font-size: 16px;
border-size: border-box;
margin:0;
padding:0;
top:0;
}

a{
    text-decoration: none;
    cursor: pointer;
    line-height: inherit;

    &:visited{
        text-decoration: none;
    }
}
`

export default Global;
