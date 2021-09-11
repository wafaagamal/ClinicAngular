import { IPatient  } from "./IPatient";
import { ISchedule } from "./ISchedule";
export interface IAppointmentResult {
    patient: IPatient ,
    schedule :ISchedule
}