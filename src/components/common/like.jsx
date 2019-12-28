import React from "react";

const Like = props => {
  const { liked, onClick } = props;

  let classes = "fa fa-heart";
  if (!liked) classes += "-o";
  let styles = { cursor: "pointer" };
  if (liked) styles.color = "pink";
  return (
    <i
      className={classes}
      style={styles}
      aria-hidden="true"
      onClick={onClick}
    ></i>
  );
};

export default Like;
