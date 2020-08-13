import { Injectable } from '@angular/core';
import{AngularFireAuth} from '@angular/fire/auth'
import * as firebase from 'firebase'
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public user : firebase.User = null;
  constructor(private auth:AngularFireAuth, public route:Router) { }

  public async login(){
    try{
    let provider = new firebase.auth.GoogleAuthProvider;
    await this.auth.signInWithPopup(provider);
    this.user = await this.auth.currentUser;
  }
  catch(e) {
    console.log(e);
  }    
  this.route.navigate(["/navbar"])}

  public async Logout(){
    await this.auth.signOut();
    this.route.navigate([""]);
  }
}
