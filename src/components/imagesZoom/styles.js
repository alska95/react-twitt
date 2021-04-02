import styled, {createGlobalStyle} from "styled-components";
import {Button} from "antd";

export const Overlay = styled.div`
  position:fixed;
  z-index: 5;
  top:0;
  right: 0;
  bottom: 0;
`
export const Header = styled.header`
  header:55px;
  background: white;
  position: relative;
  padding: 0;
  text-align: center;
  &h{
    margin : 0;
    font-size: 17px;
    color: #333;
    line-height: 44px;
  }

`;

export const clsButton = styled.button`
    position: absolute;
    right: 0;
    top: 0;
    padding: 5px;
    line-height: 14px;
    font-size: 20px;
    cursor: pointer;
`
/*슬릭에 스타일 덮어쓰기*/
export const Global = createGlobalStyle`
  .slick-slide{
    display: inline-block;
  }
`

export const SlickWrapper = styled.div`
  height: calc(100% - 44px);
  background: #090909;
`;

export const ImageWrapper = styled.div`
  padding: 32px;
  text-align: center;
  
  &img{
    margin: 0 auto;
    max-height: 750px;
  }
`;
/* > 는 자식선택자이다.*/
export const indicator = styled.div`

  text-align: center;
  
  & > div{
    width: 75px;
    height: 30px;
    line-height: 30px;
    border-radius: 15px;
    background: #313131;
    display: inline-block;
    text-align: center;
    color: white;
    font-size: 15px;
  }
`
