import React from "react";


const Branches = (props) => {
  const options = [
    {
      text: "Web Development",
      handler: props.actionProvider.handleCareerList,
      id: 1
    },
    { text: "Mobile Development", handler: () => {}, id: 2 },
    { text: "Others", handler: () => {}, id: 3 }
  ];

  const optionsMarkup = options.map((option) => (
    <button
      className="p-1 rounded-pill bg-transparent border border-success m-1"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return <div className="learning-options-container">{optionsMarkup}</div>;
};

export default Branches;
