import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashAlt,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

const ImageWithIcons = ({deleteImage, reOpenModal }) => {
  const [isHoveredLeft, setIsHoveredLeft] = useState(false);
  const [isHoveredRight, setIsHoveredRight] = useState(false);
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = (hover) => {
    if (hover === "left") {
      setIsHoveredLeft(true);
    } else {
      setIsHoveredRight(true);
    }
    setIsHover(true);
  };

  const handleDeleteImage = () => {
    deleteImage()
  }

  const handleOpenModal = () => {
    reOpenModal()
  }
  
  const handleMouseLeave = (hover) => {
    if (hover === "left") {
      setIsHoveredLeft(false);
    } else {
      setIsHoveredRight(false);
    }
    setIsHover(false);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        position: "relative",
        visibility: hasImage ? "visible" : "hidden",
        width: "100%",
      }}
    >

      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginLeft: "auto",
        }}
      >
        <div
          style={{
            width: "10%",
            height: "100%",
            borderStartStartRadius: "16px",
            borderEndStartRadius: "16px",
            background: isHover ? "rgba(245, 245, 220, 0.1)" : "rgba(245, 245, 220, 0.0)", 
          }}
          onMouseEnter={() => handleMouseEnter("left")}
          onMouseLeave={() => handleMouseLeave("left")}
        >
          {isHoveredLeft && (
            <button
              onClick={() => handleOpenModal()}
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                position: "relative",
              }}
            >
              <FontAwesomeIcon
                className="server-icon"
                icon={faMagnifyingGlass}
              ></FontAwesomeIcon>
            </button>
          )}
        </div>
        <div
          style={{
            width: "10%",
            height: "100%",
            borderStartEndRadius: "16px",
            borderEndEndRadius: "16px",
            background:  isHover ? "rgba(245, 245, 220, 0.1)" : "rgba(245, 245, 220, 0.0)",
          }}
          onMouseEnter={() => handleMouseEnter("right")}
          onMouseLeave={() => handleMouseLeave("right")}
        >
          {isHoveredRight && (
            <button
              onClick={() => handleDeleteImage()}
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                position: "relative",
              }}
            >
              <FontAwesomeIcon
                className="server-icon"
                icon={faTrashAlt}
              ></FontAwesomeIcon>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageWithIcons;
