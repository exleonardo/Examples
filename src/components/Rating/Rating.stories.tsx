import { Rating, RatingValueType } from "./Rating";
import { useState } from "react";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: "Rating stories",
  component: Rating,
  tags: [ "autodocs" ],
  argTypes: {
    backgroundColor: {control: "color"},
  },
};

export const EmptyStar = () => <Rating value={ 0 } onClick={ () => {} }/>
export const Rating1 = () => <Rating value={ 1 } onClick={ () => {} }/>
export const Rating2 = () => <Rating value={ 2 } onClick={ () => {} }/>
export const Rating3 = () => <Rating value={ 3 } onClick={ () => {} }/>
export const Rating4 = () => <Rating value={ 4 } onClick={ () => {} }/>
export const Rating5 = () => <Rating value={ 5 } onClick={ () => {} }/>
export const ChangeRating = () => {
  const [ rating, setRating ] = useState<RatingValueType>(3)
  return <Rating value={ rating } onClick={ setRating }/>
}
