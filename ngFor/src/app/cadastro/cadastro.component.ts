import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {
  name : string = '';
  telefone : string = '';
  public users : Array<any> = []
  valid : boolean = true;

  constructor(private httpClient : HttpClient) { }

  ngOnInit(): void {
  }
  
  public adicionar() {
      this.valid = true;
      this.httpClient.post('http://localhost:3019/cadastro', {name : this.name, telefone : this.telefone}).toPromise().then((response : any) => {
      })
      console.log("Deu certo!");
  }

  public list() {
    this.valid = true;
    this.httpClient.get('http://localhost:3019/cadastro', {} ).toPromise().then((response : any) => {
    this.users = response;
    })
    console.log("Deu certo!");
  }

  public delete(){
    this.valid = true;
      this.httpClient.post('http://localhost:3019/delete', {name : this.name, telefone : this.telefone}).toPromise().then((response : any) => {
      this.users = response;
    })
      console.log("Deu certo!");
  }
}
