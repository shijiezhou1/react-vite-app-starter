import React from "react";
import { connect } from "react-redux";
import { getNews, getComments } from "../actions";

let Button = ({ getNews, getComments }) => {
  return (
    <>
      <button onClick={getNews}>Press to see news</button>
      <button onClick={getComments}>Press to see comments</button>
    </>
  );
};
const mapDispatchToProps = {
  getNews: getNews,
  getComments: getComments,
};
Button = connect(null, mapDispatchToProps)(Button);
export default Button;
