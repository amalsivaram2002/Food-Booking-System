import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { ShareService } from '../service/share.service'

export class User{
    constructor(public mail:any,public pass:any){}
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
   public loginForm: FormGroup;

   constructor(private fb: FormBuilder, private httpClient: HttpClient,private route:Router,private us: ShareService) {
     this.loginForm = this.fb.group({
       mail: ['', [Validators.required, Validators.email]],
       pass: ['', [Validators.required, Validators.minLength(6)]]
     });
   }


   // Define a constructor that injects HttpClient as a dependency

 
   // Define a ngOnInit method that runs when the component is initialized
  //  ngOnInit() {
  //    // Define the data to send as an object
  //    const data = {
  //      email: 'example@example.com',
  //      password: '123456'
  //    };
 
  //    // Define the URL of the server
  //    const url = 'http://localhost:3000/login';
 
  //    // Define the headers for the request
  //    const headers = new HttpHeaders({
  //      'Content-Type': 'application/json'
  //    });
 
  //    // Send a POST request using httpClient and handle the response
  //    this.httpClient.post(url, data, { headers })
  //      .subscribe(response => {
  //        // Log the response data
  //        console.log(response);
  //      }, error => {
  //        // Log the error message
  //        console.error(error.message);
  //      });
  //  }
 
   // submit the form data to the backend server
   onSubmit() {
   
     const { mail, pass } = this.loginForm.value;
    console.log({mail,pass});
     this.httpClient.post('http://localhost:3000/login', { mail, pass }).subscribe(
         (response) => {
           console.log(response);
          this.us.setvalidate(mail)
           this.route.navigateByUrl('/order')
         },
         (error) => {
           console.error('Login failed', error);
           alert("Username or password is invalid")
         }
       );
   }
}