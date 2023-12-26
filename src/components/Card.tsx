import React, { FC, useState, useEffect } from "react";
import Back from "../assets/svg/corner-up-left.svg";

interface Props {
  title: string;
  children?: React.ReactNode;
  description: string;
  skills: string[];
}

const Card: FC<Props> = (props) => {
  const [showTechnologies, setShowTechnologies] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isDesktop = screenWidth >= 1060;

  const handleShowAbout = () => {
    setShowAbout(!showAbout);
  };

  const handleShowTechnologies = () => {
    setShowTechnologies(!showTechnologies);
  };

  if (isDesktop) {
    return (
      <div
        className="rounded-xl shadow-lg hover:border-[#6600FF] hover:border-s-4
        hover:border-b-[3px] min-h-[310px] relative border__show flex gap-12 py-5 px-10"
      >
        <div
          id="presentation"
          className="flex flex-col justify-center items-center gap-5"
          onClick={handleShowAbout}
        >
          <h1 className="text-2xl text-center font-bold">{props.title}</h1>
          {props.children}
        </div>
        <div id="about" className="p-4 flex flex-col gap-12">
          <p className="mt-4 italic">{props.description}</p>
          <div>
            <p className="mb-4 font-semibold">Technologies that I have used:</p>
            <ul id="skills" className="flex gap-4">
              {props.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="p-4 rounded-xl shadow-lg hover:border-[#6600FF] hover:border-s-4
      hover:border-b-[3px] min-h-[310px] min-w-[240px] max-w-[310px] relative border__show"
    >
      {!showAbout && (
        <div
          id="presentation"
          className="flex flex-col justify-center items-center"
          onClick={handleShowAbout}
        >
          {props.children}
          <h1 className="text-2xl text-center">{props.title}</h1>
        </div>
      )}
      {showAbout && (
        <div id="about" className="p-4 flex flex-col">
          <button
            onClick={handleShowAbout}
            className="w-8 absolute top-4 left-4"
          >
            <img src={Back.src} alt="Back" />
          </button>
          <br />
          <h1 className="text-2xl">{props.title}</h1>
          <p className="mt-4">{props.description}</p>
          <button
            className="my-4 bg-[#6600FF] py-1 px-3 border border-black
            rounded-3xl text-white w-fit self-center"
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
