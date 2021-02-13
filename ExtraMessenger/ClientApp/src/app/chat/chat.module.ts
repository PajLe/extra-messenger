import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageSegmentComponent } from './message-segment/message-segment.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ChatComponent } from './chat.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    MessageSegmentComponent,
    SidebarComponent,
    ChatComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: ChatComponent, pathMatch: 'full' },
    ])]
})
export class ChatModule { }