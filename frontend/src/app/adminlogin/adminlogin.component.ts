import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { ShareService } from '../service/share.service'

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {
  public loginForm: FormGroup;

   constructor(private fb: FormBuilder, private httpClient: HttpClient,private route:Router,private us: ShareService) {
     this.loginForm = this.fb.group({
       mail: ['', [Validators.required, Validators.email]],
       pass: ['', [Validators.required, Validators.minLength(6)]]
     });
   }


   
   onSubmit() {
   
     const { mail, pass } = this.loginForm.value;
    console.log({mail,pass});
     this.httpClient.post('http://localhost:3000/adminlogin', { mail, pass }).subscribe(
         (response) => {
           console.log(response);
          this.us.setvalidate(mail)
           this.route.navigateByUrl('/admin')
         },
         (error) => {
           console.error('Login failed', error);
           alert("Username or password is invalid")
         }
       );
   }
}
