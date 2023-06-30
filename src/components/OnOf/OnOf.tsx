import {useState} from "react";

export type OnOfType = {
  on: boolean
}


const OnOf = (props: OnOfType) => {


  const [on, setOn] = useState(false)

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

  return <div>
    <div onClick={() => {
      setOn(true)
    }} style={onStyle}>On
    </div>
    <div onClick={() => {
      setOn(false)
    }} style={offStyle}>OFF
    </div>
    <div style={indicatorStyle}></div>
  </div>
}

export default OnOf