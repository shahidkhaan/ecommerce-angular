import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  public singupForm !: FormGroup;

  constructor(private fromBulder: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.singupForm = this.fromBulder.group({
      fullname: [''],
      email: [''],
      password: [''],
      mobile: [''],
    })
  }

  singUp() {
    console.log(this.singupForm.value);
    this.http.post<any>('http://localhost:3000/signupUsers',
      this.singupForm.value).subscribe(data => {
        alert("Sigup Successfully");
        console.log(data);
        this.singupForm.reset();
        this.router.navigate(['login']);
      }, err => {
        alert("Something went wrong ");
      })

    // this.http.post<any>("http://localhost:3000/signupUsers",this.singupForm.value)
    // alert("success");
    // .subscribe(res => {
    //   alert("Sigup Successfully");
    //   this.singupForm.reset();
    //   this.router.navigate(['login']);
    // },err => {
    //   alert("Something went wrong ");
    // })
  }


}
