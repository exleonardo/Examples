import React, { useState } from "react";


export type AccordionPropsType = {
  title: string,
  // collapsedMenu: boolean
}
export const UnControlledAccordion = (props: AccordionPropsType) => {
  let [ collapsedMenu, setcollapsedMenu ] = useState(true)

  return ( <>
      <AccordionTitle title={ props.title } onClick={ () => setcollapsedMenu(!collapsedMenu) }/>
      { !collapsedMenu && <AccordionBody/> }
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

