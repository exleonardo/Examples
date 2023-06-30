import React from "react";


type AccordionPropsType = {
  title: string,
  collapsedMenu: boolean
}
const Accordion = (props: AccordionPropsType) => {
  return (<>
      <AccordionTitle title={props.title}/>
      {!props.collapsedMenu && <AccordionBody/>}
    </>

  )
}

type AccordionTitlePropsType = {
  title: string
}
const AccordionTitle = (props: AccordionTitlePropsType) => {
  console.log(`Rendering AccordionTitle`)
  return (
    <>
      <h3>{props.title}</h3>
    </>
  )
}

const AccordionBody = () => {
  console.log(`Rendering AccordionBody`)
  return (<>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  </>)
}
export default Accordion
