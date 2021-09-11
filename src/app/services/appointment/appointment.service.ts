import { Injectable } from '@angular/core';
import { HttpClient ,HttpErrorResponse,HttpHeaders} from '@angular/common/http';
import { Observable,throwError  } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IAppointmentResult } from 'src/app/modules/IAppointmentResult';
@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private http:HttpClient) { }
  appointments(docId:number):Observable<IAppointmentResult[]>{
    return this.http.get<IAppointmentResult[]>(environment.baseUrl+ "doctor/appointment/"+docId)
            .pipe(catchError(this.errorHandeler));
          
  }
  appointmentsFromTO(docId:number,from:number,to:number,day:any):Observable<IAppointmentResult[]>{
    return this.http.get<IAppointmentResult[]>(environment.baseUrl+ "doctor/appointment/"+docId+"/"+from+"/"+to+"/"+day)
            .pipe(catchError(this.errorHandeler));
          
  }
  errorHandeler(error: HttpErrorResponse) {
    return throwError("server error" + error.message);
  }
}
