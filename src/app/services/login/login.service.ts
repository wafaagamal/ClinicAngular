import { Injectable } from '@angular/core';
import { HttpClient ,HttpErrorResponse,HttpHeaders} from '@angular/common/http';
import { Observable,throwError  } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { LoginViewModel } from 'src/app/modules/LoginViewModel';
import { RegisterViewModel } from 'src/app/modules/RegisterViewModel';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }
  LoginDoctor(_LoginViewModel:LoginViewModel){
    return this.http.post(environment.baseUrl+ "doctor/login",_LoginViewModel)
            .pipe(catchError(this.errorHandeler));
          
  }
  LoginSecretary(_LoginViewModel:LoginViewModel){
    return this.http.post(environment.baseUrl+ "secretary/login",_LoginViewModel)
            .pipe(catchError(this.errorHandeler));
          
  }
  RegDoctor(_RegisterViewModel:RegisterViewModel){
    return this.http.post(environment.baseUrl+ "doctor/register",_RegisterViewModel)
            .pipe(catchError(this.errorHandeler));
          
  }
  RegSecretary(_RegisterViewModel:RegisterViewModel){
    return this.http.post(environment.baseUrl+ "secretary/register",_RegisterViewModel)
            .pipe(catchError(this.errorHandeler));
          
  }
  errorHandeler(error: HttpErrorResponse) {
    return throwError("server error" + error.message);
  }
}
