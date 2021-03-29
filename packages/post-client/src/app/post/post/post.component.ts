import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../services/post/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  post: postInterface = {};
  postForm = new FormGroup({
    id: new FormControl(''),
    title: new FormControl(''),
    userId: new FormControl(''),
    body: new FormControl(''),
  });

  constructor(
    private readonly postService: PostService,
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router,
    private readonly snackBar: MatSnackBar,
  ) {}

  ngOnInit(): void {
    this.post.id = this.activatedRoute.snapshot.params.id;
    this.findPost();
  }

  findPost() {
    const id = this.post.id?.toString();
    const post = this.postService.getStorageItem(id);
    if (!post) {
      this.postService.getOne(id).subscribe({
        next: response => {
          this.postService.setStorageItem(id, response);
          this.post = response;
          this.updateFormControl();
        },
        error: error => {
          this.snackBar.open(
            "Provided post doesn't exist, please enter valid Id.",
            'Close',
            { duration: 4500 },
          );
          this.router.navigateByUrl(`/home`);
        },
      });
      return;
    }
    this.post = post;
    this.postService.removeStorageItem(id);
    this.updateFormControl();
  }

  updateFormControl() {
    if (!this.post) this.post = {};

    Object.keys(this.post).forEach(key => {
      this.postForm.controls[key].setValue(this.post[key]);
    });
  }
}

export interface postInterface {
  id?: number;
  title?: string;
  userId?: number;
  body?: string;
}
