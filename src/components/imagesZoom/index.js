import React, {useState} from 'react';
import PropTypes from 'prop-types'

import Slick from 'react-slick'
import {Overlay, CloseBtn, Global , Header , SlickWrapper , ImageWrapper} from './styles'
/*케루셀 리엑트 슬릭
* 넘겨서 보기*/

const ImagesZoom = ({images,onClose}) => {
    const [currentSlide , setCurrentSlide] = useState(0);
    return (
        <Overlay>
            <Global/>
            <Header>
                <h1 style={{marginBottom : '-0.5em'}}>상세 이미지</h1>
                <CloseBtn onClick={onClose}/>
            </Header>
            <SlickWrapper>
                <div>
                    <Slick
                        initialSlide={0}
                        beforeChange={(slide)=>setCurrentSlide(slide)}
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
