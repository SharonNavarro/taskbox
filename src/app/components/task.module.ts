
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';

import TaskComponent from './task/task.component';
import TaskListComponent from './task-list/task-list.component';
import { TasksState } from '../state/task.state';
import PureTaskListComponent from './pure-task-list/pure-task-list.component';
import InboxScreenComponent from './inbox-screen/inbox-screen.component';
import PureInboxScreenComponent from './pure-inbox-screen/pure-inbox-screen.component';
@NgModule({
  imports: [CommonModule, NgxsModule.forFeature([TasksState])],
  exports: [TaskComponent, TaskListComponent, InboxScreenComponent],
  declarations: [TaskComponent, TaskListComponent, PureTaskListComponent, InboxScreenComponent, PureInboxScreenComponent],
  providers: [],
})
export class TaskModule {}
