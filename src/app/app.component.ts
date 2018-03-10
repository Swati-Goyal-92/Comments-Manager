import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { Comment } from './models/comment';
import { DataService } from './app.data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  comments: Array<Comment> = [];

  constructor(private dataService: DataService,private router: Router){};

  onComment(newComment: Comment) {
    console.log('received');
    console.log(newComment);
    this.comments.unshift({...newComment});
    this.dataService.add({...newComment});
  }

  goToComment(id:number){
    console.log(id);
    this.router.navigateByUrl('/comment/' + id);
  }

}
