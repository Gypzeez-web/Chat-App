import React from "react";

const List = (props) => {
  console.log(props);
  const linkMarkup = props.options.map((link) => (
    <li
      key={link.id}
      className="text-left d-flex flex-row justify-content-center align-items-center"
    >
      {link.text}
    </li>
  ));
  return <ul className="link-list">{linkMarkup}</ul>;
};

export default List;
