import { PostsService } from './posts.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  constructor(
    private PostsService: PostsService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}
  postsList: any;
  errorMsg: any;
  ngOnInit(): void {
    this.PostsService.getPosts().subscribe(
      (data) => {
        this.postsList = data;
      },
      (errorData) => {
        this.errorMsg = errorData;
      }
    );
  }
  goToPost(post: any) {
    this.router.navigate(['/postsDetail', post.id]);
  }
}
