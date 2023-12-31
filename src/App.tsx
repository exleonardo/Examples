import React, { useState } from "react";
import "./App.css";
import { Accordion } from "./components/Accordion/Accordion";
import { Rating, RatingValueType } from "./components/Rating/Rating";
// import OnOf from "./components/OnOf/OnOf";

import { UnControlledAccordion } from "./components/UnControlledAccordion/UnControlledAccordion";
import { UnContolRating } from "./components/UnControlRating/UnContolRating";
import { UncontrolledOnOf } from "./components/UnControlledOnOf/UncontrolledOnOf";
import Select from "./components/Select/Select";
import Selected from "./components/Select/Select";
import Time , {NewTime} from "./components/Time/Time";


const App = () => {
  let [ ratingValue, setRatingValue ] = useState<RatingValueType>(0)
  let [ accordionCollapsed, setAccordionCollapsed ] = useState<boolean>(false)
  let [ switchOn, setSwitchOn ] = useState<boolean>(false)

  return (
    <div>
      {/*<PageTitle title={ `this is APP component` }/>*/}
      {/*/!*<Accordion title={`Users`} collapsedMenu={setAccordionCollapsed}/>*/ }
      {/*<Accordion onClick={ () => {} } title={ `Menu` }*/}
      {/*           collapsedMenu={ () => setAccordionCollapsed(!accordionCollapsed) }*/}
      {/*           accordionCollapsed={ accordionCollapsed } items={ [] }/>*/}
      {/*<Rating value={ ratingValue } onClick={ setRatingValue }/>*/}
      {/*/!*<Rating value={2}/>*/ }
      {/*/!*<Rating value={3}/>*/ }
      {/*/!*<Rating value={4}/>*/ }
      {/*/!*<Rating value={5}/>*/ }
      {/*/!*<OnOf on={ switchOn } onChange={ setSwitchOn }/>*/ }
      {/*<UncontrolledOnOf onChange={ setSwitchOn }/>{ switchOn.toString() }*/}
      {/*<UnControlledAccordion title={ "Menu" }/>*/}
      {/*<UnContolRating onChange={ () => {} }/>*/}
      {/*  <Selected onChange={ () => {} } items={[*/}
      {/*      {title: "CSS", value: 1}, {title: "HTML", value: 2},*/}
      {/*      {title: "JS", value: 3}, {title: "React", value: 4}*/}
      {/*  ] }/>*/}
        <Time/>
     <NewTime/>
    </div>
  )
};

type PagePropsTitle = {
  title: string
}
const PageTitle = (props: PagePropsTitle) => {
  return (
    <h1>{ props.title }</h1>
  )
}


export default App;

