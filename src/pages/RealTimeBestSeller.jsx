// RealTimeBestSeller.jsx ( src - pages )
import { useParams } from 'react-router-dom';
import Book from '../components/Book';
import BookTitle from '../components/BookTitle';

export default function RealTimeBestSeller(){
  // const {filename} = useParams();

  return(
    <>
      <BookTitle title='실시간 베스트'/>
      <Book filename='realtime' />
    </>
  );
}