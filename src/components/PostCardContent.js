import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link'


const PostCardContent = ({ postData }) => { // 첫 번재 게시글 #해시 #리엑트 #익스프래스
    return (
        <div>
            {postData.split(/(#[^\s#]+)/g).map((v , i)=>{
                if(v.match(/(#[^\s#]+)/)) {
                    return (
                        <Link href={`/hashtag/${v.slice(1)}`} key = {i}>
                            <a>{v}</a>
                        </Link>
                    );
                }
                return v;
            })}
        </div>
    );
};

PostCardContent.propTypes = {
    postData : PropTypes.string.isRequired,
}


export default PostCardContent;
