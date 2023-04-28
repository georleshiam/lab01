import React from "react";
import { useState } from "react";
function HornedBeast (props)  {
  const [imageIsLiked, setImageIsLiked] = useState(false) //declare state
  const [likes, setLikes] = useState(0)
  let heart = "🤍" //default color for heart
  if(imageIsLiked === true) {
    heart = "💗"
  } else {
    heart = "🤍"
  }

return (
<div>
  <h1>{props.title}</h1>
<img width={200} src={props.image} />
<h1> {props.description}</h1>
<h1 onClick={function () {
  if(likes === 0){
    setLikes(1)
  }
  setImageIsLiked(true)
  if(heart === "💗"){
    setLikes(likes + 1)
  }
}}> {heart} {likes} </h1>
  </div>
);

}

export default HornedBeast;