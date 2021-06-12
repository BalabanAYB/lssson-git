import profileReducer, { addPost, deletePost, getStatus } from "./profileReducer"

let   state = {
   posts: [
      { message: 'Привет React', likeCount: 34, id: 0 },
      { message: 'Это мое первое приложение', likeCount: 4, id: 1 },
      { message: 'Оу', likeCount: 10, id: 2 },
  ],
  status: ''
}

it ('There should be a fourth post here', () => {

let action = addPost("Воу, воу, воу, тише-тише")

   let newState = profileReducer (state, action)

   expect(newState.posts.length).toBe(4)
})

it ('Posts should be reduced', () => {

let action = deletePost(2)

   let newState = profileReducer (state, action)

   expect(newState.posts.length).toBe(2)
})

it ('Posts should be reduced', () => {

let action = getStatus("Совсем чуть-чуть осталось")

   let newState = profileReducer (state, action)

   expect(newState.status).toEqual("Совсем чуть-чуть осталось")
})