import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post/post.component';
import { RouterModule, Routes } from '@angular/router';
import { PostService } from './services/post/post.service';
import { MaterialModule } from '../shared-imports/material/material.module';
import { FlexLayoutModule, FlexModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [{ path: ':id', component: PostComponent }];

@NgModule({
  declarations: [PostComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FlexModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
  providers: [PostService],
  bootstrap: [],
})
export class PostModule {}
