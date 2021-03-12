import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Issue } from './../interfaces/issue';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IssueService {

  constructor(private http: HttpClient) { }

    private issuesUrl = 'api/issues';  // URL to web api

    getIssues(): Observable<Issue[]> {
      return this.http.get<Issue[]>(this.issuesUrl)
    }
}
