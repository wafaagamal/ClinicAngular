import { Component, OnInit } from '@angular/core';
import { IAppointmentResult } from 'src/app/modules/IAppointmentResult';
import { IDayOfWeek } from '../../modules/IDayOfWeek';
import { AppointmentService } from 'src/app/services/appointment/appointment.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css'],
})
export class AppointmentComponent implements OnInit {

  constructor(private _appointmentService:AppointmentService) { }
  public Id: number = 2;
  public From = 0;
  public To =0;
  public appoinmentsData : IAppointmentResult[] = [];
  public _dayOfweek =IDayOfWeek;
  public selectedItem: any
  public enumNames:any;

  ngOnInit(): void {
    this.get_appointments() ;
    this.enumNames=Object.keys(this._dayOfweek).filter(function (el) {
      return isNaN(parseInt(el));
    });
  }


  
  get_appointments() {
    console.log(this._dayOfweek,"=======================");

    this._appointmentService.appointments(this.Id)
      .subscribe((data: IAppointmentResult[]) => {
        for (let k in data) {
          //console.log(data[k],"===============data===============");
          this.appoinmentsData.push(data[k])
        }
      }, (err) => {
        alert(err);
      });
  }
  get_appointmentsRange() {
    // console.log(this.selectedItem,"=======================");
    // console.log(this.From,"=======================");
    // console.log(this.To,"=======================");
    this.appoinmentsData=[]
    this._appointmentService.appointmentsFromTO(this.Id,this.From,this.To,this.selectedItem)
      .subscribe((data: IAppointmentResult[]) => {
      
        for (let k in data) {
         console.log(data[k],"===============data===============");
          this.appoinmentsData.push(data[k])
        }
      }, (err) => {
        alert(err);
      });
  }
}
