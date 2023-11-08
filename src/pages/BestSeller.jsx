// BestSeller.jsx ( src - pages )
import React from "react";
import Book from '../components/Book';
import BookTitle from '../components/BookTitle';

export default function BestSeller(){
  return(
    <>
      <BookTitle title='종합 베스트'/>
      <Book filename='best'/>
    </>
  );
}