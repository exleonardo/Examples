import React, {useState} from "react";


type AccordionPropsType = {
  title: string,
  // collapsedMenu: boolean
}
const UnControlledAccordion = (props: AccordionPropsType) => {
  let [collapsedMenu, setcollapsedMenu] = useState(true)

  return (<>
      <AccordionTitle title={props.title}/>
      <button onClick={() => setcollapsedMenu(false)}>SWIPE</button>
      <button onClick={() => setcollapsedMenu(true)}>CLOSE</button>
      {!collapsedMenu && <AccordionBody/>}
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
export default UnControlledAccordion
