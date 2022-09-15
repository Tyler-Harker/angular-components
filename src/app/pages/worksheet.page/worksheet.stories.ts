// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import {WorksheetPageComponent} from './worksheet.page.component';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { ExpanderComponent } from 'src/app/components/expander/expander.component';
import { CheckboxComponent } from 'src/app/components/checkbox/checkbox.component';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export

let declarations = [ExpanderComponent, CheckboxComponent]
export default {
  title: 'Pages/WorkSheet',
  component: WorksheetPageComponent,
  decorators: [
    moduleMetadata({
      //👇 Imports both components to allow component composition with Storybook
      declarations,
      imports: [FontAwesomeModule, ],
    })
  ]
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<WorksheetPageComponent> = (args: WorksheetPageComponent) => ({
  props: args,
});
export const DefaultBasic = Template.bind({});
DefaultBasic.args = {
}
