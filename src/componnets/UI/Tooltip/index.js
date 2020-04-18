import React from "react";

import "./Tooltip.scss";

const Tooltip = (props) => {
  return (
    <div onClick={() => props.handleClick(props.storieId)} className={`${"tooltip"}`}>
      <div className={`${props.variant}`}>{props.children}</div>
    </div>
  );
};

export default Tooltip;
