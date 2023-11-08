import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonService } from 'src/services/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private service:CommonService, private formBuilder: FormBuilder) {}

  title!: string;
  getUsers: any;
  loginForm!: FormGroup;

  ngOnInit() {
    this.loginForm = new FormGroup({
      userName: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    });
    this.service.getUsers().subscribe(data=>{
      this.getUsers= data
    })
  }

  handleData(data: string) {
    this.title = data;
  }

  protected onSubmit(): void {
    console.log(this.loginForm, 'loginData');
  }
}
