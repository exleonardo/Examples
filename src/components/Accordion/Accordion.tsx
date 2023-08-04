import React from "react";


type ItemType = {
  title: string;
  value: any;
}
export type AccordionPropsType = {
  title: string,
  accordionCollapsed: boolean
  collapsedMenu: () => void
  items: ItemType[]
  onClick: (value: any) => void
}
export const Accordion = (props: AccordionPropsType) => {
  return ( <>
      <AccordionTitle title={ props.title } collapsedMenu={ props.collapsedMenu }/>
      { props.accordionCollapsed && <AccordionBody items={ props.items } onClick={ props.onClick }/> }
    </>

  )
}

type AccordionTitlePropsType = {
  title: string;
  collapsedMenu: () => void

}
export const AccordionTitle = (props: AccordionTitlePropsType) => {
  return (
    <>
      <h3 onClick={ (e) => props.collapsedMenu() }>{ props.title }</h3>
    </>
  )
}
export type AccordionBodyPropsType = {
  items: ItemType[]
  onClick: (value: any) => void
}
const AccordionBody = (props: AccordionBodyPropsType) => {

  return ( <>
    <ul>
      { props.items.map((i, index) => <li onClick={ () => {props.onClick(i.value)} } key={ index }>{ i.title }</li>) }
    </ul>
  </> )
}
