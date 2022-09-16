// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import {BasketCardComponent} from './basketCard.component';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { CardComponent } from '../card/card.component';
import { ButtonComponent } from '../button/button.component';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Examples/Products/Components/BasketCard',
  component: BasketCardComponent,
  decorators: [
    moduleMetadata({
      //👇 Imports both components to allow component composition with Storybook
      declarations: [CardComponent, ButtonComponent],
      imports: [FontAwesomeModule],
    })
  ]
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<BasketCardComponent> = (args: BasketCardComponent) => ({
  props: args,
});
export const Default = Template.bind({});
Default.args = {
    basketItems: [
      {
        qty: 1,
        product: {
          id:'1',
          name: 'Pencil',
          price: .25,
          imgUrl: '',
        }
      },
      {
        qty: 3,
        product: {
          id:'2',
          name: 'Pen',
          price: .75,
          imgUrl: '',
        }
      },
      {
        qty: 2,
        product: {
          id:'3',
          name: 'Eraser',
          price: 1.25,
          imgUrl: '',
        }
      }
    ]
}
