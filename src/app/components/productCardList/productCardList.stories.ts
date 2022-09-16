// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import {ProductCardListComponent} from './productCardList.component';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { CardComponent } from '../card/card.component';
import { ButtonComponent } from '../button/button.component';
import { ProductCardComponent } from '../productCard/productCard.component';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Examples/Products/Components/ProductCardList',
  component: ProductCardListComponent,
  decorators: [
    moduleMetadata({
      //👇 Imports both components to allow component composition with Storybook
      declarations: [CardComponent, ButtonComponent, ProductCardComponent],
      imports: [FontAwesomeModule],
    })
  ]
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<ProductCardListComponent> = (args: ProductCardListComponent) => ({
  props: args,
});
export const Default = Template.bind({});
Default.args = {
    products: [
        {
            name: '2018 Aston Martin Vantage DB11',
            id: '1',
            price: 329999,
            imgUrl: 'https://th.bing.com/th/id/OIP.q-2mqKgmZrMNUIyJMucmFQHaE7?w=252&h=180&c=7&r=0&o=5&pid=1.7',
        },
        {
            name: '2018 Aston Martin Vantage DB11',
            id: '1',
            price: 329999,
            imgUrl: 'https://th.bing.com/th/id/OIP.q-2mqKgmZrMNUIyJMucmFQHaE7?w=252&h=180&c=7&r=0&o=5&pid=1.7',
        },
        {
            name: '2018 Aston Martin Vantage DB11',
            id: '1',
            price: 329999,
            imgUrl: 'https://th.bing.com/th/id/OIP.q-2mqKgmZrMNUIyJMucmFQHaE7?w=252&h=180&c=7&r=0&o=5&pid=1.7',
        },
        {
            name: '2018 Aston Martin Vantage DB11',
            id: '1',
            price: 329999,
            imgUrl: 'https://th.bing.com/th/id/OIP.q-2mqKgmZrMNUIyJMucmFQHaE7?w=252&h=180&c=7&r=0&o=5&pid=1.7',
        }
        
    ]
}
