import React from 'react';

const Slider = (props) => {
  const { min, max, currentVal, change, label } = props;

  return (
    <div className="w-full p-10">
      <label className="block">{label}</label>
      <input className="py-2 px-3 align-middle" type="range" min={min} max={max} step="1" value={currentVal} onChange={change} />
      <label className="block">{currentVal}</label>
    </div>
  );
};

export default Slider;