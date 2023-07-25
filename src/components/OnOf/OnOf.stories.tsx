import { OnOf } from "./OnOf";
import { action } from "@storybook/addon-actions";


export default {
  title: "OnOf",
  component: OnOf,
  tags: [ "autodocs" ],
  argTypes: {
    backgroundColor: {control: "color"},
  },
};
const callback = action("on or off clicked")
export const OnMode = () => <OnOf on={ true } onChange={ callback }/>
export const OffMode = () => <OnOf on={ false } onChange={ callback }/>
