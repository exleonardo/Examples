import React, { useReducer } from "react";
import { reducer, TOGGLE_COLLAPSED } from "./Reducer";


export type AccordionPropsType = {
  title: string,
  // collapsedMenu: boolean
}
export const UnControlledAccordion = (props: AccordionPropsType) => {
  //let [ collapsedMenu, setcollapsedMenu ] = useState(true)
  let [ state, dispatch ] = useReducer(reducer, {collapsed: false})

  return ( <>
      <AccordionTitle title={ props.title } onClick={ () => dispatch({type: TOGGLE_COLLAPSED}) }/>
      { !state.collapsed && <AccordionBody/> }
    </>

  )
}

export type AccordionTitlePropsType = {
  title: string
  onClick: () => void
}
export const AccordionTitle = (props: AccordionTitlePropsType) => {

  return (
    <>
      <h3 onClick={ () => {
        props.onClick()
      } }>{ props.title }</h3>
    </>
  )
}

export const AccordionBody = () => {

  return ( <>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  </> )
}

