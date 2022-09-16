// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import {ProductCardComponent} from './productCard.component';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { CardComponent } from '../card/card.component';
import { ButtonComponent } from '../button/button.component';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Examples/Products/Components/ProductCard',
  component: ProductCardComponent,
  decorators: [
    moduleMetadata({
      //👇 Imports both components to allow component composition with Storybook
      declarations: [CardComponent, ButtonComponent],
      imports: [FontAwesomeModule],
    })
  ]
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<ProductCardComponent> = (args: ProductCardComponent) => ({
  props: args,
});
export const Default = Template.bind({});
Default.args = {
  name: '2018 Aston Martin Vantage DB11',
  id: '1',
  price: 329999,
  imgUrl: 'https://th.bing.com/th/id/OIP.q-2mqKgmZrMNUIyJMucmFQHaE7?w=252&h=180&c=7&r=0&o=5&pid=1.7',
  numberInCart: 0
}
