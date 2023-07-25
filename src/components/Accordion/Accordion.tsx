import React from "react";


type AccordionPropsType = {
  title: string,
  collapsedMenu: () => void
  accordionCollapsed: boolean
}
export const Accordion = (props: AccordionPropsType) => {
  return ( <>
      <AccordionTitle title={ props.title } collapsedMenu={ props.collapsedMenu }/>
      { props.accordionCollapsed && <AccordionBody/> }
    </>

  )
}

type AccordionTitlePropsType = {
  title: string;
  collapsedMenu: () => void

}
const AccordionTitle = (props: AccordionTitlePropsType) => {
  return (
    <>
      <h3 onClick={ (e) => props.collapsedMenu() }>{ props.title }</h3>
    </>
  )
}

const AccordionBody = () => {

  return ( <>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  </> )
}
export default Accordion
