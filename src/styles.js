import styled from 'styled-components';

export const Title = styled.h4`
font-size: 1 rem;
color: blue
`

export const Wrapper = styled.section`
padding: 4rem;

`;
 export const Button = styled.button`
 color:${props=>props.primary? 'white':'blue'};
 background:${props=>props.primary?'blue':'white'};
 border: 2px solid blue
 `;
 
 export const Thing = styled.div.attrs(()=>({tabIndex:0}))`
 color:blue;
 padding-top:10px;
 cursor:pointer;

 &:hover{
     color:red
 }
& ~ &{
   background-color:orange 
}
 & + &{
     background-color:lime
 }
&.color-bc{
    background-color:orange
}
 .color-bc-a &
 {

 background-color:red
 }
 `