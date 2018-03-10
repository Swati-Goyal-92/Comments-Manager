import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Comment } from '../models/comment';

@Component({
    selector: "<add-comment></add-comment>",
    templateUrl: "add.component.html"
})
export class AddComponent {

    first: Comment = {
        id: 1,
        username : "Swati",
        body: "",
        likes: 0,
        comments: [],
        timeStamp: Date.now()
    };

    @Output() onComment = new EventEmitter<Comment>();

    addComment() {
        this.onComment.emit(this.first);
        console.log('sending')    ;
    }

}