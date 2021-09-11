import { Injectable } from '@angular/core';
import { HttpClient ,HttpErrorResponse} from '@angular/common/http';
import { Observable,throwError  } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IAppointmentResult } from 'src/app/modules/IAppointmentResult';
@Injectable({
  providedIn: 'root'
})
export class SecretaryService {

  constructor(private http:HttpClient) { }

  appointments(docId:number,patId:number,schId:number):Observable<IAppointmentResult>{
    return this.http.get<IAppointmentResult>(environment.baseUrl+ "Secretary/appointment/"+docId+"/"+patId+"/"+schId)
            .pipe(catchError(this.errorHandeler));
          
  }
  errorHandeler(error: HttpErrorResponse) {
    return throwError("server error" + error.message);
  }
}
