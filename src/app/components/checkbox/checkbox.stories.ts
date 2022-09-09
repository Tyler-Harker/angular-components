// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import {CheckboxComponent} from './checkbox.component';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Controls/Checkbox',
  component: CheckboxComponent,
  decorators: [
    moduleMetadata({
      //👇 Imports both components to allow component composition with Storybook
      declarations: [],
      imports: [FontAwesomeModule],
    })
  ]
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<CheckboxComponent> = (args: CheckboxComponent) => ({
  props: args,
});
export const ExtraSmall = Template.bind({});
ExtraSmall.args = {
    size: 12
}

export const Small = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Small.args = {
    size: 15
};

export const Medium = Template.bind({});
Medium.args = {
    size: 18
}

export const Large = Template.bind({});
Large.args = {
    size: 22
}

export const ExtraLarge = Template.bind({});
ExtraLarge.args = {
    size: 26
}