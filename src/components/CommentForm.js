import React, {useCallback} from 'react';
import {Form, Input ,Button} from "antd";
import useInput from "../hooks/useInput";
import PropTypes from 'prop-types';
import {useSelector} from "react-redux";

/*리덕스 ,리엑트 폼 참고*/
const CommentForm = ({post}) => {
    const id = useSelector((state)=>state.user.me?.user);/*로그인 안한경우 고려*/
    const [commentText , onChangeCommentText] = useInput('');
    const onSubmitComment = useCallback(()=>{
        console.log(post.id , commentText);
    } , [commentText]);

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
