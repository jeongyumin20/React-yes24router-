// MonthWeekBestSeller.jsx ( src - pages )
import React from "react";
import { useParams } from "react-router-dom";
import Book from '../components/Book';
import BookTitle from '../components/BookTitle';

export default function MonthWeekBestSeller(){
  // const {filename} = useParams();

  return(
    <>
      <BookTitle title='월별/주별 베스트' isBtn={true}/>
      <Book filename='hotprice'/>
    </>
  );
}