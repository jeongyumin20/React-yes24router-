// BookInfo.jsx ( src - components )
import React from "react"

export default function BookInfo(props){
  return(
    <div className="book_box">
      <div className="title_box">
        <span className="title">{props.title}</span>  
        <span className="subtitle">{props.sub_title}</span>
      </div>
      <div className="info_box">
        <span className="author">{props.author}</span>
        <span> 저 |</span>
        <span className="company">{props.company}</span>
        <span className="date">| {props.date}</span>
      </div>
      <div className="price_box">
        <span className="price">{props.price}</span>
        <span>원</span>
        <span className="discount">({props.discount}% 할인)</span>
      </div>
      <div className="review_box">
        <span className="sale">판매지수 {props.sale_cnt} |</span>
        <span className="review">회원리뷰(<span className="review_cnt">{props.review_cnt}건</span>)</span>
      </div>
    </div>
  );
}

