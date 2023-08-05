import Select from "./Select";
import { action } from "@storybook/addon-actions";
import { useState } from "react";


export default {
  title: "Select",
  component: Select,
  parameters: {
    layout: "fullscreen",
  }
}

export const BaseExample = () => {
  const [ value, setValue ] = useState("2")
  return (
    <><Select value={ value } onChange={ setValue } items={
      [
        {value: "1", title: "Minsk"},
        {value: "2", title: "Moskow"},
        {value: "3", title: "Kiew"},
        {value: "4", title: "Gomel"}
      ]
    }/>
    </>
  )
}
export const WithOutValue = () => {
  const [ value, setValue ] = useState(null)
  return (
    <>
      <Select value={ value } onChange={ setValue } items={
        [
          {value: "1", title: "Minsk"},
          {value: "2", title: "Moskow"},
          {value: "3", title: "Kiew"},
          {value: "4", title: "Gomel"}
        ]
      }/>
    </>
  )
}