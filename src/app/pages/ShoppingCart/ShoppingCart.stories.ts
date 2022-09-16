// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import {ShoppingCartComponent} from './ShoppingCart.component';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { CardComponent } from '../../components/card/card.component';
import { ButtonComponent } from '../../components/button/button.component';
import { ProductCardComponent } from 'src/app/components/productCard/productCard.component';
import { ProductCardListComponent } from 'src/app/components/productCardList/productCardList.component';
import { BasketCardComponent } from 'src/app/components/basketCard/basketCard.component';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Examples/Products/Components/BasketCard',
  component: ShoppingCartComponent,
  decorators: [
    moduleMetadata({
      //👇 Imports both components to allow component composition with Storybook
      declarations: [CardComponent, ButtonComponent, BasketCardComponent, ProductCardComponent, ProductCardListComponent],
      imports: [FontAwesomeModule],
    })
  ]
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<ShoppingCartComponent> = (args: ShoppingCartComponent) => ({
  props: args,
});
export const Default = Template.bind({});
Default.args = {
    availableProducts: [
        {
            id: '1',
            name: 'Pencil',
            price: .75,
            imgUrl: 'https://cdnimg.webstaurantstore.com/images/products/large/469047/1765106.jpg'
        },
        {
            id: '2',
            name: 'Pen',
            price: 3.00,
            imgUrl: 'https://www.reeds.com/pub/media/catalog/product/cache/38c3c1b8e53ef11aa9803a5390245afc/m/o/montblanc_black_meisterst_ck_platinum-plated_legrand_ballpoint_pen-1-18873380-hxafcb1ea4.jpg'
        },
        {
            id: '3',
            name: 'Eraser',
            price: 5.00,
            imgUrl: 'https://cdna.4imprint.com/prod/300/238716.jpg'
        },
        {
            id: '4',
            name: 'Ruler',
            price: 3.50,
            imgUrl: 'https://cdnimg.webstaurantstore.com/images/products/large/430102/2195543.jpg'
        },
        {
            id: '5',
            name: 'Protractor',
            price: 4.00,
            imgUrl: 'https://cdnimg.webstaurantstore.com/images/products/large/384747/1391114.jpg'
        }
    ],
    basketItems: []
    // basketItems: [
    //   {
    //     qty: 1,
    //     product: {
    //       id:'1',
    //       name: 'Pencil',
    //       price: .25,
    //       imgUrl: '',
    //     }
    //   },
    //   {
    //     qty: 3,
    //     product: {
    //       id:'2',
    //       name: 'Pen',
    //       price: .75,
    //       imgUrl: '',
    //     }
    //   },
    //   {
    //     qty: 2,
    //     product: {
    //       id:'3',
    //       name: 'Eraser',
    //       price: 1.25,
    //       imgUrl: '',
    //     }
    //   }
    // ]
}
