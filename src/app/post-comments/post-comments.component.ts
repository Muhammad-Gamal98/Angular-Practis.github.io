import { PostsService } from './../posts/posts.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post-comments',
  templateUrl: './post-comments.component.html',
  styleUrls: ['./post-comments.component.scss'],
})
export class PostCommentsComponent implements OnInit {
  postId: any;
  postData: any;
  constructor(
    private PostsService: PostsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.PostsService.getPosts().subscribe(
      (data) => {
        this.postData = data;
      },
      (errorData) => {
        this.postData = errorData;
      }
    );
  }
}
