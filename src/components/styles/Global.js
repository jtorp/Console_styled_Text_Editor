import {createGlobalStyle} from  'styled-components';

const Global = createGlobalStyle`

*,body{
font-size: 16px;
border-size: border-box;
margin:0;
padding:0;
color:"white";
overflow: auto;
font-family: 'Apple';


}

, body {
font-family: 'Consolas';
color:"white"
},
ul {
    list-style: none;
}
  ul li {
    margin-bottom: 0.750rem;
  }

`


export default Global;
