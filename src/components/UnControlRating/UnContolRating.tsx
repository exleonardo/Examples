import React, {useState} from "react";

type RatingPropsType = {}
export const UnContolRating = (props: RatingPropsType) => {


  let [value, setValue] = useState<boolean | number>(0)

  const setVal = (val: number) => {
    setValue(val)
  }
  console.log(value)
  return (<div>
    <Star selected={value > 0} setValue={setVal} value={1}/>
    <Star selected={value > 1} setValue={setVal} value={2}/>
    <Star selected={value > 2} setValue={setVal} value={3}/>
    <Star selected={value > 3} setValue={setVal} value={4}/>
    <Star selected={value > 4} setValue={setVal} value={5}/>
  </div>)
}

type StarPropsType = {
  selected: boolean
  setValue: (val: number) => void
  value: number
}
const Star = (props: StarPropsType) =>
  <span onClick={() => props.setValue(props.value)}>{props.selected ? <b>star</b> : "star"} </span>

// props.selected ? <span onClick={() => props.setValue(props.value)}><b>star</b> </span> :
//   <span onClick={() => props.setValue(props.value)}>star </span>


export default UnContolRating