// Book.jsx (src - components)
import '../css/book.css';
import React, { useEffect, useState } from "react";
import BookImg from './BookImg';
import BookInfo from './BookInfo';
import BookBtn from './BookBtn';
import BookList from './BookList';

export default function Book({filename}){
  const [bookList, setBookList ] = useState([])

  useEffect( () => {
    fetch(`./data/${filename}_book.json`)
    .then(res => res.json())
    .then(bookList => { 
      // console.log(bookList); 
      setBookList(bookList);
    })
  }, [bookList])

  return(
      <BookList>
        {bookList.map((list) => 
          <div className='book_container'>
            <BookImg image={list.image}/>
            <BookInfo title={list.title} sub_title={list.sub_title} author={list.author} company={list.company} date={list.date} price={list.price} discount={list.discount} sale_cnt={list.sale_cnt} review_cnt={list.review_cnt}/>
            <BookBtn /> 
          </div>
        )}
      </BookList>
    );
}
