import shortId from 'shortid';
import produce from "immer";
import faker from "faker"

/*더미데이터 생성
* 1.shortId : 겹치기 힘든 아이디를 생성해준다.
* 2.faker : 각종 더미데이터 제공*/

export const initialState = {
    mainPosts : [
    //     {
    //     id:1,
    //     User:{
    //         id:1,
    //         nickname:'황경하',
    //     },
    //     content:'첫 번재 게시글 #해시 #리엑트',
    //     Images:[{ //시퀄라이즈 시 대문자로 반환되기에 대문자로 (조인연산인듯?)
    //         id: shortId.generate(),
    //         src: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTAyMTZfNTkg%2FMDAxNjEzNDUzMDkzODQx.7efhBANV9v18I0DUQhH-Tc27xuI5uYSc0E6GYhoGJNEg.FKljN_JtNtpnt6jLFmXp9xXAdatehRbeMnQbxN54To4g.PNG.kcm2874%2F%25C1%25A6%25B8%25F1%25C0%25BB_%25C0%25D4%25B7%25C2%25C7%25D8%25C1%25D6%25BC%25BC%25BF%25E4._001_%2528100%2529.png&type=sc960_832',
    //     }, {
    //         id: shortId.generate(),
    //         src: 'https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726',
    //     }, {
    //         id: shortId.generate(),
    //         src:"../images/그림1.png",
    //     }],
    //     Comments: [{
    //         id: shortId.generate(),
    //         User:{
    //             id: shortId.generate(),
    //             nickname:'he',
    //         },
    //         content : "aaaa",
    //
    //     }],
    // }
    ],
    imagePaths:[],//이미지 업로드시에 이미지 저장
    hasMorePost:true,
    addPostLoading : false,
    addPostDone : false,
    addPostError : false,

    loadPostLoading : false,
    loadPostDone : false,
    loadPostError : false,

    removePostLoading : false,
    removePostDone : false,
    removePostError : false,

    addCommentLoading : false,
    addCommentDone : false,
    addCommentError : false,

};

export const generateDummyPost = (number) =>     Array(number).fill().map(()=>({
    id: shortId.generate(),
    User:{
        id : shortId.generate(),
        nickname : faker.name.findName()
    },
    Images : [{
        src: faker.image.imageUrl(),
    }],
    Comments: [{
        User: {
            id: shortId.generate(),
            nickname: faker.name.findName(),
        },
        content: faker.lorem.sentence(),
    }],
    content : faker.lorem.sentence(),
}));

export const LOAD_POST_REQUEST = 'LOAD_POST_REQUEST';
export const LOAD_POST_SUCCESS = 'LOAD_POST_SUCCESS';
export const LOAD_POST_FAILURE = 'LOAD_POST_FAILURE';

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

export const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
export const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
export const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';

export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';

export const ADD_POST_TO_ME = 'ADD_POST_TO_ME';
export const REMOVE_POST_OF_ME = 'REMOVE_POST_OF_ME';

export const addPostRequestAction = (data) =>({
    type: ADD_POST_REQUEST,
    data,
})

export const addCommentRequestAction = (data) =>({
    type: ADD_POST_REQUEST,
    data
})

const dummyPostAction = (data) =>({
    id: data.id,
    content:data.content,
    Images : [{
        src:"https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTAyMTZfNTkg%2FMDAxNjEzNDUzMDkzODQx.7efhBANV9v18I0DUQhH-Tc27xuI5uYSc0E6GYhoGJNEg.FKljN_JtNtpnt6jLFmXp9xXAdatehRbeMnQbxN54To4g.PNG.kcm2874%2F%25C1%25A6%25B8%25F1%25C0%25BB_%25C0%25D4%25B7%25C2%25C7%25D8%25C1%25D6%25BC%25BC%25BF%25E4._001_%2528100%2529.png&type=sc960_832",
    },
    ],
    User:{
        id:1,
        nickname:'황경하',
    },
    Comments: [{
        User:{
            nickname:'he',
        },
        content : "aaaa",
    }],
})

const dummyComment = (data) =>({
    id: shortId.generate(),
    content:data,
    User:{
        id: shortId.generate(),
        nickname:'황경하',
    },
});

//이전 상태를 액션을 통해 다음상태를 만들어내는 함수가 리듀서다. 불변성을 지키면서.
//-->produce를 사용하면 불변성이 보장된다.
const reducer = (state = initialState , action) =>{
    return produce(state, (draft)=>{
        switch (action.type) {

            case LOAD_POST_REQUEST:
                draft.loadPostLoading = false;
                draft.loadPostDone = false;
                draft.loadPostError = null;
                break;

            case LOAD_POST_SUCCESS:
                draft.loadPostLoading = true;
                draft.loadPostDone = false;
                draft.mainPosts = action.data.concat(draft.mainPosts);
                draft.hasMorePost = draft.mainPosts.length < 30;
                //게시물 50개만 보겠다
                break;
            case LOAD_POST_FAILURE:
                draft.loadPostLoading = false;
                draft.loadPostDone = action.error;
                draft.loadPostError = false;
                break;

            case ADD_POST_REQUEST:
                draft.addPostLoading = false;
                draft.addPostDone = false;
                draft.addPostError = null;
                break;

            case ADD_POST_SUCCESS:
                draft.addPostLoading = true;
                draft.addPostDone = false;
                draft.mainPosts.unshift([dummyPostAction(action.data), ...state.mainPosts]);
                break;
            case ADD_POST_FAILURE:
                draft.addPostLoading = false;
                draft.addPostDone = action.error;
                draft.addPostError = false;
            case REMOVE_POST_REQUEST:
                draft.removePostLoading = false;
                draft.removePostDone = false;
                draft.removePostError = true;
                break;
            case REMOVE_POST_SUCCESS:
                draft.removePostLoading = draft.mainPosts.filter((v) => v.id !== action.data);
                draft.removePostDone = false;
                draft.removePostError = false;
                break;

            case REMOVE_POST_FAILURE:
                draft.removePostLoading = false;
                draft.removePostDone = action.error;
                draft.removePostError = true;
                break;

            case ADD_COMMENT_REQUEST:
                draft.addCommentDone = false;
                draft.addCommentLoading = true;
                break;

            case ADD_COMMENT_SUCCESS: {
                /*action.data.comment , userid , postid*/
                /*immer 사용하면 훨씬 쉽게 할 수 있다. */
                /*                const postIndex = state.mainPosts.findIndex((y)=>
                                    y.id === action.data.postId);
                                const post = state.mainPosts[postIndex];
                                post.Comments = [dummyComment(action.data.content) , ...post.Comments]; /!*배열의 앞으로 새로운 댓글을 집어넣는다.*!/
                                const mainPosts = [...state.mainPosts];
                                mainPosts[postIndex] = post;

                                return{
                                    ...state,
                                    addCommentDone: true,
                                    addCommentLoading: false,
                                };*/
                const post = draft.mainPosts.findIndex((v) => v.id === action.data.postId);
                post.Comment.unshift(dummyComment(action.data.content));
                draft.addCommentLoading = false;
                draft.addCommentDone = true;
                break;
            }

            case ADD_COMMENT_FAILURE:
                draft.addCommentDone = false;
                draft.addCommentError = action.error;
                draft.addCommentLoading = false;
                break;

            default:
                break;
        }
    });
}

export default reducer