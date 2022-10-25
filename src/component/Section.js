import React from "react";
import "./Style.css";
import Fade from "react-reveal/Fade";
function Section({
  title,
  description,
  backgroundImg,
  leftBtnTxt,
  rightBtnTxt
}) {
  const wrap_style = {
    width: "100vw",
    height: "100vh",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center", //horizontal
    backgroundImage: `url("/images/${backgroundImg}")`
  };
  return (
    <div style={wrap_style}>
      <Fade top>
        <div className="section_itemText">
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </Fade>

      <div>
        <Fade bottom>
          <div className="section_buttonGroup">
            <div className="section_leftButton">{leftBtnTxt}</div>
            {rightBtnTxt && (
              <div className="section_rightButton">{rightBtnTxt}</div>
            )}
            {/* show only
          Right Button Exists */}
          </div>
          <img
            className="section_downArrow"
            src="/images/down-arrow.svg"
            alt="arrow_image"
          />
        </Fade>
      </div>
    </div>
  );
}

export default Section;
