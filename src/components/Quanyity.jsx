// Quanyity.jsx ( src - components )
import React, { useState } from "react";

export default function Quanyity(){
  let [ count, setCount ] = useState(0)

  const handleCount = (e) => {
    const calc = e.target.innerText;
    const number = calc === '+' ? 1 : -1;
    
    if (count + number < 0 || count + number >= 11) {
      alert(count+number < 0 ? '0개 이하는 불가능합니다' : '최대 10개까지 담을 수 있습니다')
      return
    }
    setCount(count => count + number)
  }

  const handleSubtract = () => {
    count <= 1 ? setCount(count = 0) : setCount(count -1);
  }


  return(
    <p className="cart_container">
      <input type="checkbox" name="" id="" />
      <button className="cart_btn" onClick={handleCount}>-</button>
      <span>{count}</span>
      <button className="cart_btn" onClick={handleCount}>+</button>
    </p>
  );
}


