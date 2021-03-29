export const initialState = {
    mainPosts : [{
        id:1,
        User:{
            id:1,
            nickname:'황경하',
        },
        content:'첫 번재 게시글 #해시 #리엑트',
        Images:[{ //시퀄라이즈 시 대문자로 반환되기에 대문자로 (조인연산인듯?)
            src: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTAyMTZfNTkg%2FMDAxNjEzNDUzMDkzODQx.7efhBANV9v18I0DUQhH-Tc27xuI5uYSc0E6GYhoGJNEg.FKljN_JtNtpnt6jLFmXp9xXAdatehRbeMnQbxN54To4g.PNG.kcm2874%2F%25C1%25A6%25B8%25F1%25C0%25BB_%25C0%25D4%25B7%25C2%25C7%25D8%25C1%25D6%25BC%25BC%25BF%25E4._001_%2528100%2529.png&type=sc960_832',
        }, {
            src: 'https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726',
        }, {
            src:"../images/그림1.png",
        }],
        Comments: [{
            User:{
                nickname:'he',
            },
            content : "aaaa",
        }]
    }],
    imagePaths:[],//이미지 업로드시에 이미지 저장
    postAdded: false,
};

const ADD_POST = 'ADD_POST';
export const addPostAction = {
    type: ADD_POST,
}

const dummyPostAction = {
    id: 2,
    content:'더미',
    Images : [{
        src:"https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTAyMTZfNTkg%2FMDAxNjEzNDUzMDkzODQx.7efhBANV9v18I0DUQhH-Tc27xuI5uYSc0E6GYhoGJNEg.FKljN_JtNtpnt6jLFmXp9xXAdatehRbeMnQbxN54To4g.PNG.kcm2874%2F%25C1%25A6%25B8%25F1%25C0%25BB_%25C0%25D4%25B7%25C2%25C7%25D8%25C1%25D6%25BC%25BC%25BF%25E4._001_%2528100%2529.png&type=sc960_832",
    },
    ],
    User:{
        id:2,
        nickname:'황경하',
    },
}

const reducer = (state = initialState , action) =>{
    switch (action.type){
        case ADD_POST:
            return{
                ...state,
                mainPosts: [dummyPostAction, ...state.mainPosts],
                postAdded: true,
            };
        default:
            return {
                ...state,
            };
    }
}

export default reducer