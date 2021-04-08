import React, {useCallback, useState} from 'react';
import {Avatar, Button, Card, Popover, List, Comment} from "antd";
import {RetweetOutlined , MessageTwoTone, HeartOutlined,HeartTwoTone , MessageOutlined, EllipsisOutlined } from '@ant-design/icons'
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from "react-redux";
import PostImages from "./PostImages";
import CommentForm from "./CommentForm";
import PostCardContent from "./PostCardContent";
import {REMOVE_POST_REQUEST} from "../reducers/post";

const ButtonGroup = Button.Group;

//cover antd기능
//popover 마우스 올리면 더보기
const PostCard = ({post}) => {
    const [liked,setLiked] = useState(false);
    const [commentFormOpened , setCommentFormOpened] = useState(false);
    const me = useSelector((state)=>state.user.user);
    const removePostLoading = useSelector((state)=> state.post.removePostLoading);
    const id = me && me.id;
    const dispatch = useDispatch();

    const onToggleLike = useCallback(()=>{
        setLiked((prev)=>!prev);
    } , []);
    const onToggleComment = useCallback(()=>{
        setCommentFormOpened((prev)=>!prev);
    } , []);

    const removePost = useCallback(()=>{
        dispatch({
            type:REMOVE_POST_REQUEST,
            data:post.id,
        })
    })
    {/*만약 로그인 했으면 아이디가 있음.
    내 아이디와 게시글 장성자 아이디와 같다면
    포스트 수정 가능*/}
    return (
        <div style={{marginBottom:10}}>
            <Card
                cover={post.Images[0] && <PostImages images = {post.Images}/>}
                actions={[
                    <RetweetOutlined key ="retweet"/>,
                    liked ?
                            <HeartTwoTone twoToneColor = "red" key ="heart" onClick ={onToggleLike}/>
                            :<HeartOutlined key ="heart" onClick ={onToggleLike}/> ,
                    commentFormOpened ?
                        <MessageTwoTone  key ="commnet" onClick = {onToggleComment}/>:
                        <MessageOutlined key ="commnet" onClick = {onToggleComment}/>,
                    <Popover key ="more" content={(
                        <>
                            {id && post.User.id === id ?(
                                <ButtonGroup>
                                    <Button>수정</Button>
                                    <Button type={'danger'} onClick={removePost} loading={removePostLoading}>삭제</Button>
                                </ButtonGroup>
                            ) : <Button>신고</Button>}

                        </>
                    )}>
                        <EllipsisOutlined />,
                    </Popover>
                ]}>
                <Card.Meta
                    avatar={<Avatar>
                        {post.User.nickname}
                    </Avatar>}
                    title ={post.User.nickname}
                    description={<PostCardContent postData = {post.content}/>}
                />
            </Card>
            {commentFormOpened && (
                <div>
                    <CommentForm post = {post}/>
                    <List
                        header={`${post.Comments.length} 댓글`}
                        itemLayout={"horizontal"}
                        dataSource={post.Comments}
                        renderItem={(item)=>(
                            <li>
                                <Comment
                                    author={item.User.nickname}
                                    avatar={<Avatar>{item.User.nickname[0]}</Avatar>}
                                    content={item.content}
                                />

                            </li>
                        )}
                        />
                    댓글 부분
                </div>
            )}
{/*
            <Comments/>*/}
        </div>
    );
};


PostCard.propTypes = {
    post : PropTypes.object.isRequired,
}
export default PostCard;
