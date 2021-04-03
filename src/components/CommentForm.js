import React, {useCallback, useEffect, useState} from 'react';
import {Form, Input ,Button} from "antd";
import useInput from "../hooks/useInput";
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from "react-redux";
import {ADD_COMMENT_REQUEST, ADD_POST_REQUEST} from "../reducers/post";

/*리덕스 ,리엑트 폼 참고*/
const CommentForm = ({post}) => {
    const addCommentDone = useSelector((state)=>{state.post.comment.addCommentDone});
    const dispatch = useDispatch();
    const id = useSelector((state)=>state.user.me?.user);/*로그인 안한경우 고려*/

    const [commentText , setCommentText ] = useState('');
    const onChangeCommentText = useCallback((data)=>{
        setCommentText(data.target.value);
    },[]);


    useEffect(()=>{
        if(addCommentDone){
            setCommentText('');
        }
    },[addCommentDone])

    const onSubmitComment = useCallback(()=>{
        console.log(post.id , commentText);
        dispatch({
            type : ADD_COMMENT_REQUEST,
            data: {content: commentText , postId: post.id ,userId: id},
        });
    } , [commentText , id]);

    return (
        <Form onFinish={onSubmitComment}>
            <Form.Item>
                <Input.TextArea value={commentText} onChange={onChangeCommentText} rows={4}/>
                <Button type={"primary"} htmlType={"submit"}>입력</Button>
            </Form.Item>
        </Form>
    );
};

CommentForm.propTypes = {
    post: PropTypes.object.isRequired,
}

export default CommentForm;
