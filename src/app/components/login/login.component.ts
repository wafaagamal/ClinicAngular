import { Component, OnInit } from '@angular/core';
import { LoginViewModel } from 'src/app/modules/LoginViewModel';
import { LoginService } from 'src/app/services/login/login.service';
import { FormBuilder, FormGroup, Validators, FormControl, FormControlName } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public selectedItem: string | undefined;
  private user = {} as LoginViewModel;
  public formBody = {} as FormGroup;


  constructor(private _loginService: LoginService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formBody = this.formBuilder.group({
      email: [],
      password: [],
      selectedItem: []
    })
  }
  get f() { return this.formBody.controls; }

  onSubmit() {
     console.log(this.formBody.value.selectedItem,"=========this.selectedItem==============");
    if (this.formBody.value.selectedItem == 'Doctor') {
      this.loginDoctor();
    } else {
      this.loginSecretary()
    }
  }
  loginDoctor() {
    console.log(this.formBody.value, "#### this.formBody.value#############");

    if (!this.formBody.invalid) {
      this.user = this.formBody.value;
      console.log(this.user, "================");
      this._loginService.LoginDoctor(this.user)
        .subscribe(() => {
        }, (err) => {
          alert(err);
        });
    }
  }
  loginSecretary() {
    if (!this.formBody.invalid) {
      this.user = this.formBody.value;
      console.log(this.user, "================");
      this._loginService.LoginSecretary(this.user)
        .subscribe(() => {
        }, (err) => {
          alert(err);
        });
    }
  }

}
