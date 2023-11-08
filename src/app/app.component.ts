import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient, private formBuilder: FormBuilder) {}

  title!: string;
  getUsers: any;
  loginForm!: FormGroup;

  ngOnInit() {
    this.loginForm = new FormGroup({
      userName: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    });
  }

  handleData(data: string) {
    this.title = data;
  }

  protected onSubmit(): void {
    console.log(this.loginForm, 'loginData');
  }
}
