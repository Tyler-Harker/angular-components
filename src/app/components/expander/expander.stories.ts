// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import {ExpanderComponent} from './expander.component';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { ButtonComponent } from '../button/button.component';
import { CheckboxComponent } from '../checkbox/checkbox.component';


let declarations = [ButtonComponent, CheckboxComponent]

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Controls/Expander',
  component: ExpanderComponent,
  decorators: [
    moduleMetadata({
      //👇 Imports both components to allow component composition with Storybook
      declarations: declarations,
      imports: [FontAwesomeModule],
    })
  ]
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<ExpanderComponent> = (args: ExpanderComponent) => ({
  props: args,
});

export const Default = () => ({
    moduleMetadata: {
        declarations
    },
    props: {
        headerText: 'Title',
        displayPreview: false,
    },
    template: ` <app-expander [headerText]="headerText" [displayPreview]=displayPreview>
                    <div header>
                    </div>
                    <div preview>
                        test
                    </div>
                    <div content>
                        content
                    </div>
                </app-expander>`
})
export const ButtonInTitle = () => ({
    moduleMetadata: {
        declarations
    },
    props: {
        headerText: 'Title',
        displayPreview: false,
    },
    template: ` <app-expander [headerText]="headerText" [displayPreview]=displayPreview>
                    <div header>
                        <app-button></app-button>
                    </div>
                    <div preview>
                        test
                    </div>
                    <div content>
                        content
                    </div>
                </app-expander>`
})
export const ButtonInPreview = () => ({
    moduleMetadata: {
        declarations
    },
    props: {
        headerText: 'Title',
        displayPreview: true,
    },
    template: ` <app-expander [headerText]="headerText" [displayPreview]=displayPreview>
                    <div header>
                        
                    </div>
                    <div preview>
                        <app-button></app-button>
                    </div>
                    <div content>
                        content
                    </div>
                </app-expander>`
})
export const ButtonInTitleAndPreview = () => ({
    moduleMetadata: {
        declarations
    },
    props: {
        headerText: 'Title',
        displayPreview: true,
    },
    template: ` <app-expander [headerText]="headerText" [displayPreview]=displayPreview>
                    <div header>
                        <app-button></app-button>
                    </div>
                    <div preview>
                        <app-button></app-button>
                    </div>
                    <div content>
                        content
                    </div>
                </app-expander>`
})
export const ButtonInEverySection = () => ({
    moduleMetadata: {
        declarations
    },
    props: {
        headerText: 'Title',
        displayPreview: true,
    },
    template: ` <app-expander [headerText]="headerText" [displayPreview]=displayPreview>
                    <div header>
                        <app-button></app-button>
                    </div>
                    <div preview>
                        <app-button></app-button>
                    </div>
                    <div content>
                        <app-button></app-button>
                    </div>
                </app-expander>`
})

export const SelectableWithBanner = () => ({
    moduleMetadata: {
        declarations
    },
    props: {
        headerText: 'Title',
        displayPreview: true,
        isSelectable: true,
        isSelected: true,
        hasPrimaryBanner: true
    },
    template: ` <app-expander [headerText]="headerText" [displayPreview]=displayPreview [isSelectable]="isSelectable" [(isSelected)]="isSelected" [hasPrimaryBanner]="hasPrimaryBanner">
                    <div header>
                    </div>
                    <div preview>
                        Preview Text
                    </div>
                    <div content>
                        content
                    </div>
                </app-expander>`
})
