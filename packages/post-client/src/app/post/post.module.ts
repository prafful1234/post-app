import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post-post/post.component';
import { RouterModule, Routes } from '@angular/router';

const routes : Routes = [{ path : ':id', component : PostComponent }]

@NgModule({
  declarations: [PostComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[]
})
export class PostModule { }
