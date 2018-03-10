import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Comment } from '../models/comment';
import { DataService } from '../app.data.service';

@Component({
    selector: "<my-comment></my-comment>",
    templateUrl: "comment.component.html"
})
export class CommentComponent implements OnInit {
    comment: Comment;
    constructor(private route: ActivatedRoute, private router: Router, private dataService: DataService) {
        console.log('inside detail page');
     }

    ngOnInit() {
        const id = this.route.snapshot.paramMap.get('id');
        this.comment = this.dataService.get[id];
    }

}