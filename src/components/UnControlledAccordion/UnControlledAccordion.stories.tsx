import { UnControlledAccordion } from "./UnControlledAccordion";
import { action } from "@storybook/addon-actions";


export default {
  title: "UnControlledAccordion",
  component: UnControlledAccordion,
  tags: [ "autodocs" ],
  argTypes: {
    backgroundColor: {control: "color"},
  },
};

const callback = action("accordion title")

export const UnControlledAccordionTitle = () => {
  return <UnControlledAccordion title={ "Hello" }/>
}