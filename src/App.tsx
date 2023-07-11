import React, {useState} from "react";
import "./App.css";
import Accordion from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import OnOf from "./components/OnOf/OnOf";
import UnControlledAccordion from "./components/UnControlledAccordion/UnControlledAccordion";
import UnContolRating from "./components/UnControlRating/UnContolRating";

const App = () => {
  let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
  let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
  return (
    <div>
      <PageTitle title={`this is APP component`}/>
      {/*<Accordion title={`Users`} collapsedMenu={setAccordionCollapsed}/>*/}
      <Accordion title={`Menu`} collapsedMenu={() => setAccordionCollapsed(!accordionCollapsed)}
                 accordionCollapsed={accordionCollapsed}/>
      <Rating value={ratingValue} onClick={setRatingValue}/>
      {/*<Rating value={2}/>*/}
      {/*<Rating value={3}/>*/}
      {/*<Rating value={4}/>*/}
      {/*<Rating value={5}/>*/}
      <OnOf/>
      <UnControlledAccordion title={"Menu"}/>
      <UnContolRating/>
    </div>
  )
};

type PagePropsTitle = {
  title: string
}
const PageTitle = (props: PagePropsTitle) => {
  return (
    <h1>{props.title}</h1>
  )
}


export default App;

