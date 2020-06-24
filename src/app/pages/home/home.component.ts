import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user = null;
  userName: string;
  Error = null;

  constructor(private ref: ChangeDetectorRef, private githubService: GithubService) { }

  ngOnInit(): void {
  }

  handleFind() {
    this.githubService.getUserDetails(this.userName).subscribe(
      (user) => {
        this.user = user;
        this.Error = null;
        this.ref.detectChanges()
      },
      (err) => {
        this.user = null;
        this.Error = 'User Not Found';
        this.ref.detectChanges();
      }
    )
  }

}
