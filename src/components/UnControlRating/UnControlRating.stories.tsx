import { UnContolRating } from "./UnContolRating";
import { action } from "@storybook/addon-actions";


export default {
  title: "UnContrRating",
  component: UnContolRating,
  tags: [ "autodocs" ],
  argTypes: {
    backgroundColor: {control: "color"},
  },
};

const callback = action("rating changet inside component")
export const EmptyRating = () => <UnContolRating defaultValue={ 0 } onChange={ callback }/>
export const Rating1 = () => <UnContolRating defaultValue={ 1 } onChange={ callback }/>
export const Rating2 = () => <UnContolRating defaultValue={ 2 } onChange={ callback }/>
export const Rating3 = () => <UnContolRating defaultValue={ 3 } onChange={ callback }/>
export const Rating4 = () => <UnContolRating defaultValue={ 4 } onChange={ callback }/>
export const Rating5 = () => <UnContolRating defaultValue={ 5 } onChange={ callback }/>
