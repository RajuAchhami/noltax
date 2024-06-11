import React, { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

const ChildComponent = ({ slides }) => {
  const [current, setCurrent] = useState(0);

  const prev = () => {
    const isFirstSlide = current === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : current - 1;
    setCurrent(newIndex);
  };

  const next = () => {
    if (current < slides.length - 1) {
      setCurrent((prev) => prev + 1);
    } else {
      setCurrent(0);
    }
  };

  return (
    <div className="overflow-hidden relative rounded-3xl">
      <div
        className="flex transition ease-in-out  duration-300"
        style={{ transform: `translateX(-${current * 100}%` }}
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
