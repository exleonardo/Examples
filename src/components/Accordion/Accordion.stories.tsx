import { action } from "@storybook/addon-actions";
import Accordion from "./Accordion";
import { useState } from "react";


export default {
  title: "Accordion",
  component: Accordion,
  tags: [ "autodocs" ],
  argTypes: {
    backgroundColor: {control: "color"},
  },
};
const callback = action("accordion Mode change event fired")
export const CollapsedMode = () => <Accordion title={ "Hello" } collapsedMenu={ callback } accordionCollapsed={ true }/>
export const UsersCollapsedMode = () => <Accordion title={ "Users" } collapsedMenu={ callback }
                                                   accordionCollapsed={ false }/>
export const ModeChanging = () => {
  const [ value, setValue ] = useState<boolean>(true)

  return <Accordion title={ "Users" } collapsedMenu={ () => setValue(!value) }
                    accordionCollapsed={ value }/>
}

