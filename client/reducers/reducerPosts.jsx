export default function(state = [], action) {
  switch(action.type) {
    case "FETCH_POSTS" :
      console.log("Got the POSTS");
      console.log("postDATA is", action.posts);
      return action.posts;
    default:
      return state;
  }
}

