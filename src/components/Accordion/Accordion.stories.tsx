import { action } from "@storybook/addon-actions";
import { Accordion } from "./Accordion";
import { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";


const meta: Meta<typeof Accordion> = {
  component: Accordion,
  tags: [ "autodocs" ],
  argTypes: {},
};
export default meta

export type Story = StoryObj<typeof Accordion>;
export const callback = action("accordion Mode change event fired")
export const onClick = action("some item was clicked")

export const Primary: Story = {
  args: {
    title: "Hello",
    collapsedMenu: callback,
    accordionCollapsed: true,
  },
};
export const Secondary: Story = {
  args: {
    ...Primary.args,
    accordionCollapsed: false
  },
};

export const CollapsedMode = () => <Accordion items={ [] } title={ "Hello" } collapsedMenu={ callback }
                                              accordionCollapsed={ true } onClick={ onClick }/>

export const UsersCollapsedMode = () => <Accordion onClick={ onClick }
                                                   items={ [
                                                     {title: "Dimych", value: 1}, {
                                                       title: "Valera",
                                                       value: 2
                                                     }, {title: "victor", value: 3}
                                                   ] } title={ "Users" }
                                                   collapsedMenu={ callback }
                                                   accordionCollapsed={ false }/>
export const ModeChanging = () => {
  const [ value, setValue ] = useState<boolean>(true)
  return <Accordion onClick={ (id) => alert(`Users witd ID:${ id } should be happy`) }
                    items={ [ {title: "Dimych", value: 1}, {title: "Valera", value: 2}, {title: "victor", value: 3} ] }
                    title={ "Users" }
                    collapsedMenu={ () => setValue(!value) }
                    accordionCollapsed={ value }/>
}
