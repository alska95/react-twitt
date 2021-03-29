import React, {useState} from 'react';
import PropTypes from 'prop-types'
import {Button} from "antd";
import Slick from 'react-slick'
import styled, {createGlobalStyle} from "styled-components";
/*케루셀 리엑트 슬릭
* 넘겨서 보기*/
const Overlay = styled.div`
  position:fixed;
  z-index: 5;
  top:0;
  right: 0;
  bottom: 0;
`
const Header = styled.header`
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
  &button{
    position: absolute;
    right: 0;
    top: 0;
    padding: 15px;
    line-height: 14px;
    cursor: pointer;
  }
`;
/*슬릭에 스타일 덮어쓰기*/
const Global = createGlobalStyle`
  .slick-slide{
    display: inline-block;
  }
`

const SlickWrapper = styled.div`
  height: calc(100% - 44px);
  background: #090909;
`;

const ImageWrapper = styled.div`
  padding: 32px;
  text-align: center;
  
  &img{
    margin: 0 auto;
    max-height: 750px;
  }
`;
/* > 는 자식선택자이다.*/
const indicator = styled.div`

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

const ImagesZoom = ({images,onClose}) => {
    const [currentSlide , setCurrentSlide] = useState(0);
    return (
        <Overlay>
            <Global/>
            <Header>
                <h1>상세 이미지</h1>
                <button onClick={onClose}>X</button>
            </Header>
            <SlickWrapper>
                <div>
                    <Slick
                        initialSlide={0}
                        afterChange={(slide)=>setCurrentSlide(slide)}
                        infinite
                        arrows={false}
                        slidesToshow={1}
                        slidesToScroll={1}
                    >
                        {images.map((v)=>(
                            <ImageWrapper key={v.src}>
                                <img src={v.src} alt={v.src}/>
                            </ImageWrapper>
                        ))}
                    </Slick>
                </div>
            </SlickWrapper>
        </Overlay>
    );
};

ImagesZoom.propTypes = {
    images:PropTypes.arrayOf(PropTypes.object).isRequired,
    onClose:PropTypes.func.isRequired,
}

export default ImagesZoom;
