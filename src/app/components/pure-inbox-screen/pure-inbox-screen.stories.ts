
import type { Meta, StoryObj } from '@storybook/angular';

 import { importProvidersFrom } from '@angular/core';

 import { Store, NgxsModule } from '@ngxs/store';
 import { TasksState } from '../../state/task.state';

 import { moduleMetadata, applicationConfig } from '@storybook/angular';

import { CommonModule } from '@angular/common';

import PureInboxScreenComponent from './pure-inbox-screen.component';

const meta: Meta<PureInboxScreenComponent> = {
  component: PureInboxScreenComponent,
  title: 'PureInboxScreen',
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      declarations: [PureInboxScreenComponent],
      imports: [CommonModule],
    }),
   applicationConfig({
     providers: [Store, importProvidersFrom(NgxsModule.forRoot([TasksState]))],
    }),
  ],
};

export default meta;
type Story = StoryObj<PureInboxScreenComponent>;

export const Default: Story = {};

export const Error: Story = {
  args: {
    error: true,
  },
};
