import React, {useCallback, useState} from 'react';
import PropTypes from 'prop-types';
import {PlusOutlined} from "@ant-design/icons/lib";
import ImageZoom from './imagesZoom/index'


const PostImages = ({images}) => {
    const [showImagesZoom , setShowImagesZoom] = useState(false);
    const onClose = useCallback(()=>{
            setShowImagesZoom(false);
            },[])

    const onZoom = useCallback(()=>{
        setShowImagesZoom(true);
    },[])

    if(images.length === 1){
        return (
            <>
                <img src={images[0].src}
                     alt={images[0].src}
                     onClick={onZoom}/>
            </>
        );
    }
    else if(images.length === 2){
        return (
            <>
                <img style={{width:"50%" ,display:'inline-block'}}  src={images[0].src}
                     alt={images[0].src}
                     onClick={onZoom}/>
                <img style={{width:"50%" ,display:'inline-block'}} src={images[1].src}
                     alt={images[1].src}
                     onClick={onZoom}/>
            </>
        );
    }else{
        return(
            <>
            <div>
                <img style={{width:"50%"}} src={images[0].src}
                     alt={images[0].src}
                     onClick={onZoom}/>
                <div
                    style={{display :'inline-block', width:"50%", textAlign:'center' , verticalAlign:'middle'}}
                    onClick={onZoom}>
                    <PlusOutlined />
                    <br/>
                    {images.length-1}
                    개의 사진 더보기

                </div>
            </div>
                {showImagesZoom && <ImageZoom images={images} onClose={onClose}/>}
            </>
        )
    }

};

PostImages.propTypes = {
    images: PropTypes.arrayOf(PropTypes.object),
}

export default PostImages;
