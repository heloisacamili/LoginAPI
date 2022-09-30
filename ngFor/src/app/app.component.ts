import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {               
  title = 'ngFor';
  name : string = '';
  telefone : string = '';
  public users : Array<any> = []
  valid : boolean = false;

  constructor (private httpClient : HttpClient){

  }
  
  public adicionar() {
      if(this.valid == true){
        this.httpClient.post('http://localhost:3019/', {name : this.name, telefone : this.telefone}).toPromise().then((response : any) => {
      })
      } else {
        console.log("Algo deu errado!");
      }
  }

  public list() {
    if(this.valid == true){
      this.httpClient.get('http://localhost:3019/', {} ).toPromise().then((response : any) => {
     this.users = response;
    })
    } else {
      console.log("Algo deu errado!");
    }
  }

  public delete(){
    if(this.valid == true){
      this.httpClient.post('http://localhost:3019/delete', {name : this.name, telefone : this.telefone}).toPromise().then((response : any) => {
      this.users = response;
    })
    } else {
      console.log("Algo deu errado!");
    }
  }

  public logar(){
    this.httpClient.post('http://localhost:3019/login', {name : this.name, telefone : this.telefone}).toPromise().then((response : any) => {
        console.log(response);
        this.valid = true;
        console.log(this.valid);
      })
  }
}
