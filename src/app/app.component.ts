import { Component } from '@angular/core';
import { AuthService } from './service/auth.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'inpt-cloud-mamgas';
  email: string;
  password: string;
  data = '';

  constructor(public authService: AuthService, private _httpClient: HttpClient) {
    this.email = '';
    this.password = '';
    this.getData();
  }

  getData(){
    return this._httpClient.get("https://us-central1-cours-tp.cloudfunctions.net/helloWorld").subscribe(dataFirestore => {
      console.log("data", dataFirestore);
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
