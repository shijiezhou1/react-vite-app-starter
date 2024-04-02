const reducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_NEWS":
      console.log("a");
      return { ...state, loading: true };
    case "NEWS_RECEIVED":
      console.log("b");
      return { ...state, news: action, loading: false };
    case "GET_COMMENTS":
      console.log("c");
      return { ...state, loading: true };
    case "COMMENTS_RECEIVED":
      console.log("d");
      return { ...state, news: action, loading: false };

    default:
      return state;
  }
};
export default reducer;
