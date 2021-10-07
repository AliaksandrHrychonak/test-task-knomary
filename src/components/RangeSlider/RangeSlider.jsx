import React from 'react';

export const RangeSlider = React.memo(({ value }) => {
  const [sliderVal, setSliderVal] = React.useState(50);

  React.useEffect(() => {
    setSliderVal(value);
    console.log('render');
  }, [value]);

  return (
    <div className="range-slider">
      <input
        type="range"
        defaultValue={sliderVal}
        className="s"
      />
    </div>
  );
});
