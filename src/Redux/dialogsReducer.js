const ADD_MESSAGE = 'ADD-MESSAGE'
const NEW_MESSAGE_TEXT = 'NEW-MESSAGE-TEXT'

export const addMessage = (message) => ({ type: 'ADD-MESSAGE', message })

let initialState = {
    dialog: [
        { name: 'Костя', id: 0 },
        { name: 'Петя', id: 1 },
        { name: 'Вася', id: 2 },
        { name: 'Настя', id: 3 },
        { name: 'Даня', id: 4 },
        { name: 'Маня', id: 5 },
    ],
    message: [
        { message: 'Привет', id: 0 },
        { message: 'Это мой первый проект на Реакте', id: 1 },
        { message: 'Реакт это круто', id: 2 },
        { message: 'Я в шаге от своей цели, я уверен, что у меня все получится', id: 3 },
    ]
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage = {
                message: action.message,
                id: state.message.length
            }
            return {
                ...state,
                message: [...state.message, newMessage]
            }
        }
        default:
            return state;
    }

}

export default dialogsReducer;