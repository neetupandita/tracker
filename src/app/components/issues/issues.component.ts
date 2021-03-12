import { Component, OnInit } from '@angular/core';
import { IssueService } from './../../service/issue.service';
import { Issue } from './../../interfaces/issue';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.scss']
})
export class IssuesComponent implements OnInit {
  
  issues: Issue[] = [];
  constructor(private issueService: IssueService) {}

  ngOnInit(): void {
    this.getIssues();
  }
  
  getIssues(): void {
    this.issueService.getIssues()
    .subscribe(issues => this.issues = issues);
  }
}
