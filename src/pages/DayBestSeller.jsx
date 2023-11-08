// DayBestSeller.jsx ( src - pages )
import { useParams } from "react-router-dom";
import Book from '../components/Book';
import BookTitle from '../components/BookTitle';

export default function DayBestSeller(){
  // const {filename} = useParams();

  return(
    <>
      <BookTitle title='일별 베스트'/>
      <Book filename='day'/>
    </>
  );
}