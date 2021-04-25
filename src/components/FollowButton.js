import React, {useCallback} from 'react'
import {Button} from "antd";
import PropTypes from 'prop-types'
import {useSelector} from "react-redux";

const FollowButton = ({post}) =>{

    const me = useSelector((state)=>state.user.user)
    const isFollowing = me?.Followings.find((v)=>v.id === post.User.id);
    const onFollow = useCallback(()=>{

    });
    return <Button>팔로우</Button>
};

FollowButton.propTypes = {
    post : PropTypes.object.isRequired,
}

export default FollowButton