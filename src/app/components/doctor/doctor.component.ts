import { Component, OnInit } from '@angular/core';
import { IDoctor } from 'src/app/modules/Idoctor';
import { DoctorService } from '../../services/doctor/doctor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {

  constructor(private _doctorSevice: DoctorService,private router: Router) { }
  public Id: number = 2;
  public doctor = {} as IDoctor;
  public doctors: IDoctor[] = [];
  ngOnInit(): void {
    this.getDoctor()
  }
  getDoctor() {
    this._doctorSevice.getDoctor(this.Id)
      .subscribe((data: IDoctor) => {
        this.doctor = data
      }, (err) => {
        alert(err);
      });
  }

  getDoctors() {
    this._doctorSevice.getDoctors()
      .subscribe((data: any) => {
        for (let k in data) {
          this.doctors.push(data[k])
        }
      }, (err) => {
        alert(err);
      });
  }

  appointments() {
    this.router.navigateByUrl('/appointment');  }
}
