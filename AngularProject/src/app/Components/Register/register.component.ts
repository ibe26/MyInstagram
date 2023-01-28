import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private formBuilder:UntypedFormBuilder) { }

  ngOnInit(): void {
    const fb=this.formBuilder.group({
      email:['',Validators.required],
      password:['',Validators.required]
    })
  }


}
