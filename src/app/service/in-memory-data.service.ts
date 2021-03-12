import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Issue } from './../interfaces/issue';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const issues = [
      { id: 'ID: PD123456', date: 'January 02, 2021', title: 'To Do 1', description:'this is the To Do 1 list. This is just the demo tex', name:'Neetu Pandita', designation:'Software Engineer', status:'High Priority'},
      { id: 'ID: PD123456', date: 'January 02, 2021', title: 'To Do 2', description:'this is the To Do 2 list. This is just the demo tex', name:'Neetu Pandita', designation:'Software Engineer', status:'High Priority'},
      { id: 'ID: PD123456', date: 'January 02, 2021', title: 'To Do 3', description:'this is the To Do 3 list. This is just the demo tex', name:'Neetu Pandita', designation:'Software Engineer', status:'High Priority'},
      { id: 'ID: PD123456', date: 'January 02, 2021', title: 'To Do 4', description:'this is the To Do 4 list. This is just the demo tex', name:'Neetu Pandita', designation:'Software Engineer', status:'High Priority'},
      { id: 'ID: PD123456', date: 'January 02, 2021', title: 'Progress 1', description:'this is the Progress 1 list. This is just the demo tex', name:'Neetu Pandita', designation:'Software Engineer', status:'In Progress'},
      { id: 'ID: PD123456', date: 'January 02, 2021', title: 'Progress 2', description:'this is the Progress 2 list. This is just the demo tex', name:'Neetu Pandita', designation:'Software Engineer', status:'In Progress'},
      { id: 'ID: PD123456', date: 'January 02, 2021', title: 'Done 1', description:'this is the Done 1 list. This is just the demo tex', name:'Neetu Pandita', designation:'Software Engineer', status:'Done'},
      { id: 'ID: PD123456', date: 'January 02, 2021', title: 'Done 2', description:'this is the Done 2 list. This is just the demo tex', name:'Neetu Pandita', designation:'Software Engineer', status:'Done'},
      { id: 'ID: PD123456', date: 'January 02, 2021', title: 'Done 3', description:'this is the Done 3 list. This is just the demo tex', name:'Neetu Pandita', designation:'Software Engineer', status:'Done'},
    ];
    return {issues};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the 
  
  // hero id + 1.
  // genId(issues: Issue[]): number {
  //   return issues.length > 0 ? Math.max(...issues.map(issue => issue.id)) + 1 : 11;
  // }
}