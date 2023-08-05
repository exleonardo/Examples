import React, { useState, KeyboardEvent, useEffect } from "react";
import s from "./selected.module.css"


type ItemType = {
  title: string;
  value: any;
}
type SelectPropsType = {
  value?: any;
  onChange: (value: any) => void
  items: ItemType[]
}
export const Select = (props: SelectPropsType) => {
  const selectedItem = props.items.find((el) => el.value === props.value)

  const [ active, setActive ] = useState(false)
  const [ hoveredElementValue, setHoveredElementValue ] = useState(props.value)
  const hoveredItem = props.items.find((el) => el.value === hoveredElementValue)

  useEffect(() => {
    setHoveredElementValue(props.value)
  }, [ props.value ])

  const toggleItems = () => {
    setActive(!active)
  }
  const onItemClick = (value: any) => {
    props.onChange(value)
    toggleItems()
  }
  const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      for ( let i = 0; i < props.items.length; i++ ) {
        if (props.items[i].value === hoveredElementValue) {
          const pretendentElement = e.key === "ArrowDown" ? props.items[i + 1] : props.items[i - 1]

          if (pretendentElement) {
            setHoveredElementValue(pretendentElement.value)
            return
          }
        }
      }
      if (!selectedItem) {
        props.onChange(props.items[0].value)
      }

    }
    if (e.key === "Enter" || e.key === "Escape") {
      toggleItems()
    }

  }
  return (
    <>
      <div className={ s.select } tabIndex={ 0 } onKeyUp={ onKeyUp }>
        <span onClick={ toggleItems } className={ s.main }>
          { selectedItem && selectedItem.title }
        </span>
        { active &&
          <div className={ s.items }>
            { props.items.map((el, index) => <div onMouseEnter={ () => setHoveredElementValue(el.value) }
                                                  className={ s.item + " " + ( hoveredItem === el ? s.selected : "" ) }
                                                  onClick={ () => onItemClick(el.value) }
                                                  key={ index }>{ el.title }</div>) }
          </div> }
      </div>
    </>
  )

};

export default Select;


/*
const [ title, setTitle ] = useState(false)
  const onClickDiv = () => {
    setTitle(!title)
  }

  const blockStyleOpen = {
    width: 0,
    height: 0,
    borderLeft: "5px solid transparent",
    borderRight: "5px solid transparent",
    borderBottom: "10px solid #f95959",
  }
  const blockStyleClose = {
    width: 0,
    height: 0,
    borderLeft: "5px solid transparent",
    borderRight: "5px solid transparent",
    borderTop: "10px solid #00FD96FF",
  }

  const [ parentValue, setParentValue ] = useState<string | undefined>("Menu")
  const onChange = (title: string) => {
    setParentValue(title)
    setTitle(!title)
  }
  const selectedItems = props.items.find((el) => el.title === props.value)
  return (
    <div className={ s.selectMenu }>
      <div className={ s.styleSelect } onClick={ onClickDiv }>{ selectedItems ? selectedItems.title : parentValue }
        <div style={ title ? blockStyleOpen : blockStyleClose }></div>
      </div>
      <div className={ title ? s.styleMenu : "" }>{ title ? props.items.map((i, index) =>
        <option value={ index } onClick={ (title) => onChange(i.title) }
                className={ s.title }>{ i.title }</option>
      ) : <></> }</div>

    </div>
  );
 */