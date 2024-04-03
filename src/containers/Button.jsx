import React from "react";
import { connect, useSelector } from "react-redux";
import { getNews, getComments } from "../actions";

let Button = ({ getNews, getComments }) => {
  const state = useSelector((state) => state);

  return (
    <>
      <button onClick={getNews}>Press to see news</button>
      <button onClick={getComments}>Press to see comments</button>

      <div>{JSON.stringify(state, null, 2)}</div>
    </>
  );
};
const mapDispatchToProps = {
  getNews: getNews,
  getComments: getComments,
};
Button = connect(null, mapDispatchToProps)(Button);
export default Button;
