import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  createForm = this.fb.group({
    title: ['', Validators.required],
    type: [''],
    status: [''],
    priority: [''],
    resolution: [''],
    affectsVersion: [''],
    fixVersion: [''],
    component: [''],
    assignee: [''],
    labels: [''],
    reporter: [''],
    sprint: [''],
    description: [''],
    storyPoints: [''],
    attachment: [''],
  });
  
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }
   
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.createForm.value);
  }
}
