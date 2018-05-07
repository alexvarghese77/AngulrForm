import { Component, OnInit } from '@angular/core';
import { TabsComponent } from '../tabs/tabs.component';
import {FormGroup,FormControl,Validators} from '@angular/forms' 

@Component({
  selector: 'personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit {
  tabs: TabsComponent;

  constructor(tabs: TabsComponent) { 
    this.tabs = tabs;
  }
  ngOnInit(){

  }
  userForm = new FormGroup({
    fname: new FormControl(null,Validators.required),
    lname: new FormControl(null,Validators.required),
    mname: new FormControl(),
    dni: new FormControl(),
    dob: new FormControl(null,Validators.required),
    gender: new FormControl(null,Validators.required),
    email: new FormControl(null,[Validators.required,Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
    mobile: new FormControl(null,Validators.required),
    lanline: new FormControl(),
}); 

  continue() {
    this.tabs.arrangeTabs(1);
  }
}
