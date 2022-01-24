import styled from "styled-components";
import { Icon } from "../../globalStyles";

export const SinglePostContainer = styled.div`
    flex: 9;
`

export const SinglePostWrapper = styled.div`
    padding: 20px;
    padding-right: 0;
    &>img{
        width: 100%;
        height: 300px;
        border-radius: 5px;
        object-fit: cover;
    }

`
export const SinglePostTitle = styled.h1`
    text-align: center;
    margin: 10px;
    font-size: 28px;
`
export const PostEdit = styled.div`
     float: right;
`

export const EditIcon = styled(Icon)`
color: teal;
.trash&{
    color:tomato
}
`
export const SinglePostInfo = styled.div`
   margin-bottom: 20px;
   display: flex;
   justify-content: space-between;
   font-size: 16px;
   color: #be9656

`
export const AuthorName = styled.span`
    margin-left: 5px;
    &>b{
    color:#666
    }
`
export const SinglePostDesc = styled.p`
    color:#666;
    font-size: 18px;
    line-height: 25px;
&::first-letter{
    margin-left: 20px;
    font-size: 30px;
    font-weight: 600;
}

`