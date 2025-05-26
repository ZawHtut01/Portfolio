import { Injectable } from '@angular/core';
import { CommonResponse } from '../models/common-response';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Doctor } from '../models/doctor';

@Injectable({
  providedIn: 'root'
})

export class DoctorService {
  private apiUrl = 'https://localhost:7036/api';

  private api = 'https://localhost:7270/api/Upload';

  constructor(private http: HttpClient) { }


  getDoctors() {
    console.log("Hahhaa");
    return this.http.get<CommonResponse<Doctor[]>>(this.apiUrl + '/Doctor/GetDoctors');
  }

  save(model: any) {
    return this.http.post<CommonResponse<Doctor>>(this.apiUrl + '/Doctor/SaveDoctor', model);
  }

  delete(id:string){
    return this.http.delete<CommonResponse<Doctor>>(this.apiUrl+'/Doctor/'+id);
  }

}

interface UploadResponse {
  fileName: string;
  message: string;
}

