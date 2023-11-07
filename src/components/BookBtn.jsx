// BookBtn.jsx ( src - components )
import React from "react"
import Quanyity from './Quanyity';
import ButtonCart from './ButtonCart';
import ButtonBuy from './ButtonBuy';
import ButtonList from './ButtonList';
import Button from './Button';

export default function BookBtn(){
  return(
    <div className="book_btn">
      <Quanyity />
      <Button className="button_cart" buttonName="카트에 넣기"/>
      <Button className="button_buy" buttonName="바로 구매"/>
      <Button className="button_list" buttonName="리스트에 넣기"/>
      {/* <ButtonCart content="카트에 넣기"/> */}
      {/* <ButtonCart content="바로 구매"/> */}
      {/* <ButtonCart content="리스트에 넣기"/> */}
    </div>
  );
}

