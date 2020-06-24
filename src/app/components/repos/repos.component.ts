import { Component, OnInit, Input, OnChanges, ChangeDetectorRef } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit, OnChanges {
  @Input() repoUrl: string;
  repos = []
  constructor(private githubService: GithubService, private ref: ChangeDetectorRef) { }

  ngOnInit(): void { }
  ngOnChanges(): void {
    if (this.repoUrl) {
      this.githubService.getRepos(this.repoUrl).subscribe(
        (repos: []) => {
          this.repos = repos; // left this.repos is the array repos=[] and right is coming from subscribe
          this.ref.detectChanges();
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }
}
