import styled from "styled-components";

export const PostContainer = styled.div`
    width: 385px;
    margin: 0 25px 40px 25px;
    /* display: flex;
    flex-direction: column; */

`
export const PostImg = styled.img`
    width: 385px;
    height: 280px;
    object-fit: cover;
    border-radius: 7px;

`

export const PostInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

`

export const PostCategories = styled.div`
    

`
export const PostCategory = styled.span`
    color: #be9656;
    font-weight: 400;
    font-size: 11px;
    line-height: 19px;
    margin-top: 15px;
    margin-right: 10px;
    cursor: pointer;
`

export const PostTitle = styled.span`
    font-size: 24px;
    font-weight: 900;
    margin-top: 15px;
    cursor: pointer;
`
export const PostDate = styled.span`
    font-weight: 400;
    font-size: 13px;
    color:#999999;
    margin-top: 15px;


`

export const PostDesc = styled.p`
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color:#444444;
    margin-top: 15px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient:vertical;




`