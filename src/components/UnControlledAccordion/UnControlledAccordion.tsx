import React, {useState} from "react";


type AccordionPropsType = {
  title: string,
  // collapsedMenu: boolean
}
const UnControlledAccordion = (props: AccordionPropsType) => {
  let [collapsedMenu, setcollapsedMenu] = useState(true)

  return (<>
      <AccordionTitle title={props.title} onClick={() => setcollapsedMenu(!collapsedMenu)}/>
      {/*<button onClick={() => setcollapsedMenu(!collapsedMenu)}>Switch</button>*/}
      {!collapsedMenu && <AccordionBody/>}
    </>

  )
}

type AccordionTitlePropsType = {
  title: string
  onClick: () => void
}
const AccordionTitle = (props: AccordionTitlePropsType) => {

  return (
    <>
      <h3 onClick={() => {
        props.onClick()
      }}>{props.title}</h3>
    </>
  )
}

const AccordionBody = () => {

  return (<>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  </>)
}
export default UnControlledAccordion
