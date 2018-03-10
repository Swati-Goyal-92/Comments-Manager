import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { Comment } from '../models/comment';

@Component({
    selector: "<my-comment></my-comment>",
    templateUrl: "comment.component.html"
})
export class CommentComponent implements OnInit {
    @Input() comment: Comment;
    @Output() onComment = new EventEmitter<number>();
    @Output() onLike = new EventEmitter<boolean>();
    liked = false;
    message = "";
   
    constructor(private route: ActivatedRoute,private router: Router) {}

    ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
        // this.image = this.imageService.cache[id];        
    }


    like(status: boolean) {
        // this.onLike.emit(status);
        if (isNaN(this.comment.likes)) {
            this.comment.likes = 1;
        } else {
            this.comment.likes += 1;
        }
        this.liked = true;
    }

    addComment(status: boolean) {
        this.onComment.emit(this.comment.id)
    }

}