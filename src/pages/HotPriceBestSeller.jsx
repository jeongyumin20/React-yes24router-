// HotPriceBestSeller.jsx ( src - pages )
import React from "react";
import { useParams } from "react-router-dom";
import Book from '../components/Book';
import BookTitle from '../components/BookTitle';

export default function HotPriceBestSeller(){
    // const {filename} = useParams();

  return(
    <>
      <BookTitle title='특가 베스트' isSub={true}/>
      <Book filename='hotprice'/>
    </>
  );
}