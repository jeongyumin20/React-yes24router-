// SteadySeller.jsx (src - pages)
import React from "react";
import { useParams } from "react-router-dom";
import Book from '../components/Book';
import BookTitle from "../components/BookTitle";

export default function SteadySeller(){
  // const {filename} = useParams();

  return(
    <>
      <BookTitle title='스테디셀러'/>
      <Book filename='steady' />
    </>
  );
}