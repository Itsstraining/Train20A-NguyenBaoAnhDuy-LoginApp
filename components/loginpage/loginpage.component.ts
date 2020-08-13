import { Component, OnInit } from '@angular/core';

import{LoginService} from '../../service/login.service'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { from } from 'rxjs';
@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss']
})
export class LoginpageComponent implements OnInit {
  hide = true;
 public loginGroup = new FormGroup({
    nameControl: new FormControl('', Validators.required),
    passwordControl: new FormControl('', Validators.required)
  })
  constructor(public authService:LoginService) { }

  ngOnInit(): void {
  }

}
