import React, { FC, useState } from "react";

interface Props {
  title: string;
  imageUrl: string;
  altImage: string;
  skills: string[];
}

const Card: FC<Props> = (props) => {
  const [showAbout, setShowAbout] = useState(false);

  const handleShowAbout = () => {
    setShowAbout(!showAbout);
  };

  return (
    <div
      className="card p-4 rounded-xl shadow-lg md:w-3/12 cursor-pointer
     hover:border-[#6600FF] hover:border-s-4 hover:border-b-[3px] min-h-[300px]"
      onClick={handleShowAbout}
    >
      {!showAbout && (
        <div
          id="presentation"
          className="flex flex-col justify-center items-center"
        >
          <img
            src={props.imageUrl}
            alt={props.altImage}
            className="w-48 mb-6"
          />
          <h1 className="text-2xl text-center">{props.title}</h1>
        </div>
      )}
      {showAbout && (
        <div id="about">
          <h1 className="text-2xl">{props.title}</h1>
          <ul id="skills">
            {props.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Card;
