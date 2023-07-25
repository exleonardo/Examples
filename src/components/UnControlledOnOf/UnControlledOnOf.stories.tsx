import { UncontrolledOnOf } from "./UncontrolledOnOf";
import { action } from "@storybook/addon-actions";


export default {
  title: "UncontrolledOnOf",
  component: UncontrolledOnOf,
  tags: [ "autodocs" ],
  argTypes: {
    backgroundColor: {control: "color"},
  },
};

const callback = action("On or off clicked")
export const OnModeUnControl = () => <UncontrolledOnOf defaultOn={ true } onChange={ callback }/>
export const OfModeUnControl = () => <UncontrolledOnOf defaultOn={ false } onChange={ callback }/>

export const DefaultInputValues = () => <input defaultValue="yo"/>