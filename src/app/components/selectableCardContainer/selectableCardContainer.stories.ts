// // also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
// import { Story, Meta, moduleMetadata } from '@storybook/angular';
// import {SelectableCardContainerComponent} from './selectableCardContainer.component';

// import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
// import { faCheck } from '@fortawesome/free-solid-svg-icons';
// import { ButtonComponent } from '../button/button.component';
// import { CheckboxComponent } from '../checkbox/checkbox.component';
// import { CardComponent } from '../card/card.component';


// let declarations = [ButtonComponent, CheckboxComponent, CardComponent]

// // More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
// export default {
//   title: 'Controls/SelectableCardContainer',
//   component: SelectableCardContainerComponent,
//   decorators: [
//     moduleMetadata({
//       //👇 Imports both components to allow component composition with Storybook
//       declarations: declarations,
//       imports: [FontAwesomeModule],
//     })
//   ]
// } as Meta;

// // More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
// const Template: Story<SelectableCardContainerComponent> = (args: SelectableCardContainerComponent) => ({
//   props: args,
// });

// export const Default = () => ({
//     moduleMetadata: {
//         declarations
//     },
//     props: {
//     },
//     template: ` <app-selectableCardContainer>
//                 </app-selectableCardContainer>`
// })