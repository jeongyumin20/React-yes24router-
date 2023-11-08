// BookTitle.jsx ( src - components )
import React from "react";
import '../css/bookTitle.css';

export default function BookTitle(props){
  return(
    <div className="booktitle_container">
      <p className="title_box">
        <span className="title">국내도서</span>
        <span>{props.title}</span>
      </p>
    { props.isBtn 
      ? 
        <div className="toggle_btn">
          <button>월별</button>
          <button>주별</button>
        </div> 
      : null
    }
    { props.isSub ? <span className="sub_info">( 정가제 Free )</span> : null}
    </div>
  );
}