import { Injectable, EventEmitter } from '@angular/core';
import { Comment } from './models/comment';

@Injectable()
export class DataService {

    comments: Array<Comment> = [];

    get(id: number): Comment {
        return this.comments[id];
    }

    add(newComment: Comment): void {
        this.comments.unshift({ ...newComment });
    }

}
