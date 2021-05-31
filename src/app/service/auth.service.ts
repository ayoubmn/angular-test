import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import firebase from 'firebase/app';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: Observable<any>;

  constructor(public firebaseAuth: AngularFireAuth) {
    this.user = firebaseAuth.authState;
  }

  // Sign in with Google
  GoogleAuth() {
    return this.AuthLogin(new firebase.auth
      .GoogleAuthProvider());
  }  

  // Auth logic to run auth providers
  AuthLogin(provider: firebase.auth.AuthProvider) {
    return this.firebaseAuth.signInWithPopup(provider)
    .then((result) => {
        console.log('You have been successfully logged in!')
    }).catch((error) => {
        console.log(error)
    })
  }


  signup(email: string, password: string) {
    this.firebaseAuth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Registration success!', value);
      })
      .catch(err => {
        console.log('error:',err.message);
      });
  }

  login(email: string, password: string) {
    this.firebaseAuth
      .signInWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Login success');
      })
      .catch(err => {
        console.log('error:',err.message);
      });
  }

  logout() {
    this.firebaseAuth.signOut();
  }
}
