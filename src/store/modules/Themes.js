export default {
    state: {
        UserName:'',
        Layout:'',
        Themes:'',
        TagStyle:'',
        Column:'',
        Tag: false,
        TagIcon: false,
        HeaderFixed: false,
        Notice: true,
        FullScreenBtn:true,
        NoticeStyleCss:{
            position: 'static',
        }
    },
    mutations: {
        GetUserName:( state,name) =>{
            state.UserName= name;
        },

        //布局
        ChangeLayout: (state,msg) => {
            console.log(msg)
        },
        //主题
        ChangeThemes: (state,msg) => {
            console.log('state3',res)
        },
        //标签风格
        ChangeTagStyle: (state,msg) => {
            console.log('state2',res)
        },
        //消息显示
        ChangeNotice: (state,Notice) =>{
            state.Notice= Notice;
        },
        //全屏按钮
        ChangeFullScreenBtn: (state,FullScreenBtn) =>{
            state.FullScreenBtn= FullScreenBtn;
        },
        //头部固定
        ChangeHeaderFixed:(state,Fixed) =>{
            if(Fixed){
                state.NoticeStyleCss.position = 'fixed';
            }else{
                state.NoticeStyleCss.position = 'static';
            }
        },

    }
}