import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {message: 'Привет React', likeCount: 34, id: 0},
                {message: 'Это мое первое приложение', likeCount: 4, id: 1},
                {message: 'Оу', likeCount: 10, id: 2},
            ],
            newTextChange: ''

        },
        dialogsPage: {
            dialog: [
                {name: 'Костя', id: 0},
                {name: 'Петя', id: 1},
                {name: 'Вася', id: 2},
                {name: 'Настя', id: 3},
                {name: 'Даня', id: 4},
                {name: 'Маня', id: 5},
            ],
            message: [
                {message: 'Привет', id: 0},
                {message: 'Это мой первый проект на Реакте', id: 1},
                {message: 'Реакт это круто', id: 2},
                {message: 'Я в шаге от своей цели, я уверен, что у меня все получится', id: 3},
            ],
            newMessageChange: ''

        }
    },
    _rerender() {
    },
    getstate() {
        return this._state
    },
    subscriber(observer) {
        this._rerender = observer
    },

    dispatch(action) {
        profileReducer(this._state.profilePage, action)
        dialogsReducer(this._state.dialogsPage, action)
        this._rerender(this._state)
    }
}


/*let store = {
    _state: {
        profilePage: {
            posts: [
                {message: 'Hi how are you?', likeCount: '12', id: '1'},
                {message: 'It`s my first post', likeCount: '54', id: '2'},
            ],
            changeText: ''
        },
        messagePage: {
            message: [
                {message: 'Hi', id: '1'},
                {message: 'How is your it-kamasutra?', id: '2'},
                {message: 'Yo', id: '3'},
            ],
            dialogs: [
                {name: 'Dima', id: '1'},
                {name: 'Andrey', id: '2'},
                {name: 'Alex', id: '3'},
                {name: 'Denis', id: '4'},
                {name: 'Diana', id: '5'},
                {name: 'Sasha', id: '6'},
                {name: 'Kostya', id: '7'},
                {name: 'Pete', id: '8'},
            ]
        }
    },
    _callSubscriber() {
        console.log('subscribe')
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    addMessage(pageMessage) {
        let newMessage = {
            message: pageMessage,
            id: 4,
        }
        //state.messagePage.message.push(addMessage())
        //_callSubscriber();
    },

    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                message: this._state.profilePage.changeText,
                id: 5,
                likeCount: 0,
            };
            this._state.profilePage.posts.push(newPost)
            this._callSubscriber(this._state);
            this._state.profilePage.changeText = ''
        }
        else if (action.type === 'CHANGE') {
            let newchange = action.change;
            store._state.profilePage.changeText = newchange
            this._callSubscriber(this._state);
        }
        else if(action.type === 'ADD-MESSAGE'){

        }
    }
}
*/
export default store;
window.store = store;
