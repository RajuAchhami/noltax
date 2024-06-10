import React, { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

const defaultSlides = [
  {
    header: "OUR COURSES",
    title: "With Scholar Teachers, Everything Is Easier",
    desc: "Scholar is free CSS template designed by TemplateMo for online educational related websites. This layout is based on the famous Bootstrap v5.3.0 framework.",
    btn: "What's Scholar?",
    imgUrl: "/banner-item-01.jpg",
  },
  {
    header: "BEST RESULT",
    title: "Get the best result out of your effort",
    desc: "You are allowed to use this template for any educational or commercial purpose. You are not allowed to re-distribute the template ZIP file on any other website.",
    btn: "What's the best result?",
    imgUrl: "/banner-item-02.jpg",
  },
  {
    header: "ONLINE LEARNING",
    title: "Online Learning helps you save the time",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporious incididunt ut labore et dolore magna aliqua suspendisse.",
    btn: "What's Online Course  ?",
    imgUrl: "/banner-item-03.jpg",
  },
];

const ChildComponent = () => {
  const [slides, setSlides] = useState(defaultSlides);

  console.log(slides);

  const [current, setCurrent] = useState(0);

  const prev = () => {
    const isFirstSlide = current === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : current - 1;
    setCurrent(newIndex);
  };

  const next = () => {
    
    const isLastSlide = current === slides.length - 1;
    if (isLastSlide)setSlides((prev) => {
      return [...prev, ...defaultSlides];
    });
    const newIndex = isLastSlide ? 0 : current + 1;
    setCurrent(newIndex);
  };
  return (
    <div className="overflow-hidden relative rounded-3xl">
      <div
        className="flex transition duration-300 ease-in-out  "
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((s, i) => {
          return <img src={s.imgUrl} alt="" key={i} />;
        })}
      </div>
      <div className="absolute top-0 h-full w-full text-white flex justify-between px-10 text-3xl">
        <button onClick={prev}>
          <BsArrowLeftCircleFill />
        </button>
        <button onClick={next}>
          <BsArrowRightCircleFill />
        </button>
      </div>
    </div>
  );
};

export default ChildComponent;
