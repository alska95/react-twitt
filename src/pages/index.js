import React, {useEffect} from 'react'
import AppLayout from "../components/AppLayout";
import {useDispatch, useSelector} from "react-redux";
import PostForm from "../components/PostForm";
import PostCard from "../components/PostCard";
import {LOAD_POST_REQUEST} from "../reducers/post";

const Home = () => {
    const dispatch = useDispatch()
    const { isLoggedIn } = useSelector(state => state.user);
    const { mainPosts , hasMorePost } = useSelector(state => state.post);

    useEffect(()=>{
        if(hasMorePost){
            dispatch({
                type : LOAD_POST_REQUEST,
            })
        }

    })
    useEffect(()=>{
        function onScroll(){
            console.log(window.scrollY , document.documentElement.clientHeight,
                document.documentElement.scrollHeight);
            if(window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight-300){

                        dispatch({
                            type:LOAD_POST_REQUEST,
                        });
            }
        }
        window.addEventListener('scroll', onScroll);
        return ()=>{
            window.removeEventListener('scroll', onScroll);
        }
    }, [hasMorePost])

    return (
        <AppLayout>
            {isLoggedIn && <PostForm />}
            {mainPosts.map((c) => {
                return (
                    <PostCard key={c.id} post={c} />
                );
            })}
        </AppLayout>
    );
};
export default Home;