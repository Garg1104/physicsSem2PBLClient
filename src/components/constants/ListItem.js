import React from "react";

const ListItem = ({ val }) => {
  return (
    <div
      className="listItem"
      dangerouslySetInnerHTML={{
        __html: `${val.symbol} <i>(${val.name})</i> &ensp;-&ensp; ${val.value} ${val.unit}`,
      }}></div>
  );
};

export default ListItem;
