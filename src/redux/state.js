let state ={
    profilePage: {
        posts: [
            {id: "1", message: "Hi, how are you?", likeCount: "40"},
            {id: "2", message: "What are you doing?", likeCount: "50"},
            {id: "3", message: "How are you going?", likeCount: "25"},
            {id: "4", message: "It\'s is cool", likeCount: "12"}
        ],
    },
    dialogsPage: {
        dialogs: [
            {id: "1", name: "Viktor"},
            {id: "2", name: "Anna"},
            {id: "3", name: "Maxim"},
            {id: "4", name: "Maria"},
            {id: "5", name: "Valera"}
        ],
        messages: [
            {id: "1", message: "Hi!"},
            {id: "2", message: "How are you?"},
            {id: "3", message: "What's going on?"}
        ]
    },
    sidebar: {
        friends: [
            {id: "1", name: "Inna"},
            {id: "2", name: "Anna"},
            {id: "3", name: "Maria"},
        ]
    }
}


export default state;