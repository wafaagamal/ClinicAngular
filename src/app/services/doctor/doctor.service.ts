import { Injectable } from '@angular/core';
import { HttpClient ,HttpErrorResponse,HttpHeaders} from '@angular/common/http';
import { Observable,throwError  } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IDoctor } from '../../modules/Idoctor';
@Injectable({
  providedIn: 'root'
})

export class DoctorService {
  HTTP_OPTIONS =  new HttpHeaders({
    'Content-Type': 'application/json',
    // 'Access-Control-Allow-Origin': '*',
    // 'Access-Control-Allow-Headers': 'Content-Type',
    // 'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
  });
  constructor(private http:HttpClient) { }

  getDoctor(Id:number):Observable<IDoctor>{
    return this.http.get<IDoctor>(environment.baseUrl+ "doctor/"+Id,{ 'headers':this. HTTP_OPTIONS })
            .pipe(catchError(this.errorHandeler));
            
  }
  getDoctors():Observable<IDoctor>{
    return this.http.get<IDoctor>(environment.baseUrl+ "doctor")
            .pipe(catchError(this.errorHandeler));
          
  }
  errorHandeler(error: HttpErrorResponse) {
    return throwError("server error" + error.message);
  }
}


