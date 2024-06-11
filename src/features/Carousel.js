import React from "react";
import ChildComponent from "./ChildComponent";
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



const Carousel = () => {
  return (
    <div className=" w-[60%] m-auto pt-11">
      <ChildComponent slides={defaultSlides} />
    </div>
  );
};

export default Carousel;
