import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { PostService } from '../../post/services/post/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  postForm = new FormGroup({
    id: new FormControl('', Validators.required),
  });

  constructor(
    private readonly postService: PostService,
    private readonly snackBar: MatSnackBar,
    private readonly router: Router,
  ) {}

  ngOnInit() {}

  searchPost() {
    const id = this.postForm.controls.id.value;
    this.postService.getOne(id).subscribe({
      next: response => {
        this.postService.setStorageItem(id, response);
        this.router.navigateByUrl(`/posts/${id}`);
      },
      error: error => {
        this.snackBar.open(
          error?.error?.message || 'Error in finding post.',
          'Close',
          { duration: 4500 },
        );
      },
    });
  }
}
