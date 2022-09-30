import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  name : string = '';
  telefone : string = '';
  public users : Array<any> = []
  valid : boolean = false;

  constructor(private httpClient : HttpClient, private router : Router) { 

  }

  ngOnInit(): void {
  }

  public logar(){
    this.httpClient.post('http://localhost:3019/login', {name : this.name, telefone : this.telefone}).toPromise().then((response : any) => {
        console.log(response);
        this.valid = true;
        window.localStorage.setItem('token', response.token);
        this.router.navigate(['/cadastro'])
        console.log(this.valid);
      })
  }
  
}
