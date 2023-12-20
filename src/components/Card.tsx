import React, { FC, useState } from "react";

interface Props {
  title: string;
  imageUrl: string;
  altImage: string;
  description: string;
  skills: string[];
}

const Card: FC<Props> = (props) => {
  const [showTechnologies, setShowTechnologies] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

  const handleShowAbout = () => {
    setShowAbout(!showAbout);
  };

  const handleShowTechnologies = () => {
    setShowTechnologies(!showTechnologies);
  };

  return (
    <div
      className="p-4 rounded-xl shadow-lg md:w-1/4 hover:border-[#6600FF]
      hover:border-s-4 hover:border-b-[3px] min-h-[300px] min-w-[240px] max-w-[310px]
      md:max-w-none relative"
    >
      <button onClick={handleShowAbout} className="w-8 absolute top-4 right-4">
        <img src="src/assets/svg/information.svg" alt="Information" />
      </button>
      <br />
      <br />
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
        <div id="about" className="p-4 flex flex-col">
          <h1 className="text-2xl">{props.title}</h1>
          <p className="mt-4">{props.description}</p>
          <button
            className="my-4 bg-[var(--main-color)] py-1 px-3 border border-black rounded-3xl text-white w-fit self-center"
            onClick={handleShowTechnologies}
          >
            Show technologies
          </button>
          {showTechnologies && (
            <ul id="skills" className="flex flex-wrap">
              {props.skills.map((skill, index) => (
                <li key={index} className="px-4">
                  {skill}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default Card;
