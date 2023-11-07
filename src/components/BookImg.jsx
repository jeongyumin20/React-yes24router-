// BookImg.jsx ( src - components )
import React from "react"

export default function BookImg({image}){
  return(
    <div className="img_box">
      <img src={image} alt="" />
      <button type="button">미리보기</button>
    </div>
  );
}

