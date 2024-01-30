import React, { useEffect, useState } from 'react';

const ColorPalette = ({ onColorChange}) => {
  const [selectedColor, setSelectedColor] = useState('#FF5733'); 

  const colors = ['#FF5733', '#33FF57', '#5733FF', '#FFD133', '#33C4FF'];
  const handleColorClick = (color) => {
    setSelectedColor(color);
    onColorChange(color);
  };

  return (
    <div>
      <h2>Selected Color: {selectedColor}</h2>
      <div style={{ display: 'flex', gap: '10px' }}>
        {colors.map((color, index) => (
          <div
            key={index}
            style={{
              width: '50px',
              height: '50px',
              backgroundColor: color,
              cursor: 'pointer',
              border: color === selectedColor ? '2px solid black' : 'none',
            }}
            onClick={() => handleColorClick(color)}
          />
        ))}
      </div>
    </div>
  );
};

export default ColorPalette;
