import { Component } from '@angular/core';
import { ShareService } from '../service/share.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})



export class RegisterComponent {
  constructor(private fb: FormBuilder, private httpClient: HttpClient,private route:Router,private us: ShareService){}

  onsubmit()
  {
    this.httpClient.post('http://localhost:3000/register', {  }).subscribe(
    (response) => {
      console.log(response);
    },
    (error) => {
      console.error('Login failed', error);
      //alert("Change mail id")
    }
  );
  }

  
  
}
