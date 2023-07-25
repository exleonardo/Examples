import { useState } from "react";


export type OnOfType = {
  onChange: (value: boolean) => void
  defaultOn?: boolean
}


export const UncontrolledOnOf = (props: OnOfType) => {


  const [ on, setOn ] = useState(props.defaultOn ? props.defaultOn : false)

  const onStyle = {
    width: "30px",
    height: "20px",
    border: "1px solid black",
    display: "inline-block",
    padding: "2px",
    marginLeft: "2px",
    backgroundColor: on ? "green" : "grey"
  }
  const offStyle = {
    width: "30px",
    height: "20px",
    border: "1px solid black",
    display: "inline-block",
    padding: "2px",
    marginLeft: "2px",
    backgroundColor: on ? "grey" : "red"
  }
  const indicatorStyle = {
    width: "10px",
    height: "10px",
    borderRadius: "5px",
    border: "1px solid black",
    display: "inline-block",
    marginLeft: "5px",
    backgroundColor: on ? "green" : "red"
  }

  const onClicked = () => {
    setOn(true)
    props.onChange(true)
  }
  const ofClicked = () => {
    setOn(false)
    props.onChange(false)
  }

  return <>
    <div>
      <div onClick={ onClicked } style={ onStyle }>On</div>
      <div onClick={ ofClicked } style={ offStyle }>OFF</div>
      <div style={ indicatorStyle }></div>
    </div>
  </>
}

