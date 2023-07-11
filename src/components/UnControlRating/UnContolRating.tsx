import React, {useState} from "react";

type RatingPropsType = {}
export const UnContolRating = (props: RatingPropsType) => {


  let [value, setValue] = useState(0)


  console.log(value)
  return (<div>
    <Star selected={value > 0} setValue={() => setValue(1)}/>
    <Star selected={value > 1} setValue={() => setValue(2)}/>
    <Star selected={value > 2} setValue={() => setValue(3)}/>
    <Star selected={value > 3} setValue={() => setValue(4)}/>
    <Star selected={value > 4} setValue={() => setValue(5)}/>
  </div>)
}

type StarPropsType = {
  selected: boolean
  setValue: () => void

}
const Star = (props: StarPropsType) =>
  <span onClick={() => props.setValue()}>{props.selected ? <b>star</b> : "star"} </span>

// props.selected ? <span onClick={() => props.setValue(props.value)}><b>star</b> </span> :
//   <span onClick={() => props.setValue(props.value)}>star </span>


export default UnContolRating