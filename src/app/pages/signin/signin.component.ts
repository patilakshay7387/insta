import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
user = {
        firstName: 'John',
        password:  'test'
    };
    
    onSubmitTemplateBased(user:any) {
        console.log(user);
    }
  constructor() { }

  ngOnInit(): void {
  }

}
