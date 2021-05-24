import { Component, OnInit } from '@angular/core';
import { AuthService } from './service/auth.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'inpt-cloud-mamgas';
  email: string;
  password: string;
  data: any = {};

  constructor(public authService: AuthService, private _httpClient: HttpClient) {
    this.email = '';
    this.password = '';
    console.log('It works here');

    
  }

  ngOnInit() {
    this.getData();
  }

  getData(){
    console.log("before call API");
    
    return this._httpClient.get("http://us-central1-cours-tp.cloudfunctions.net/helloWorld/").subscribe(dataFirestore => {
      console.log("data", dataFirestore);
      this.data = dataFirestore;
    });
  }

  signup() {
    this.authService.signup(this.email, this.password);
    this.email = this.password = '';
  }

  login() {
    this.authService.login(this.email, this.password);
    this.email = this.password = '';
  }

  logout() {
    this.authService.logout();
  }


}
