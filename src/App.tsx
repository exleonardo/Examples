import React from "react";
import "./App.css";
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import OnOf from "./components/OnOf/OnOf";
import UnControlledAccordion from "./components/UnControlledAccordion/UnControlledAccordion";
import UnContolRating from "./components/UnControlRating/UnContolRating";

const App = () => {

  return (
    <div>
      <PageTitle title={`this is APP component`}/>
      <Accordion title={`Users`} collapsedMenu={true}/>
      <Accordion title={`Menu`} collapsedMenu={false}/>
      {/*<Rating value={1}/>*/}
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

