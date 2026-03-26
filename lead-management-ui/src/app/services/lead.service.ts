// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// export interface LeadSummary {
//   total: number;
//   qualified: number;
//   unqualified: number;
//   lost: number;
// }

// export interface Lead {
//   irLeadId: string;
//   irLeadContactNo: string;
//   irLeadName: string;
//   irLeadEmail?: string;
//   irLeadState?: string;
//   irLeadCity?: string;
//   irLeadSource?: string;
//   irLeadStatus: string;
//   irLeadDtime?: string;
// }

// @Injectable({
//   providedIn: 'root',
// })
// export class LeadService {
//   // 👇 yahan apna Spring Boot ka port daal
//   // example: 8082 ho to 8080 ki jagah 8082 kar dena
//   private readonly baseUrl = 'http://localhost:8082/api/lead';

//   constructor(private http: HttpClient) {}

//   getSummary(): Observable<LeadSummary> {
//     return this.http.get<LeadSummary>(`${this.baseUrl}/summary`);
//   }

//   getAll(): Observable<Lead[]> {
//     return this.http.get<Lead[]>(`${this.baseUrl}/all`);
//   }
// }



import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface LeadSummary {
  total: number;
  qualified: number;
  unqualified: number;
  lost: number;
}

export interface Lead {
  irLeadId: string;
  irLeadContactNo: string;
  irLeadName: string;
  irLeadEmail?: string;
  irLeadState?: string;
  irLeadCity?: string;
  irLeadSource?: string;
  irLeadStatus: string;
  irLeadDtime?: string;
}

@Injectable({
  providedIn: 'root',
})
export class LeadService {
  // 👇 yahan apna Spring Boot ka port daal
  // example: 8082 ho to 8080 ki jagah 8082 kar dena
  private readonly baseUrl = 'http://localhost:8082/api/lead';

  constructor(private http: HttpClient) {}

  // ✅ /summary?from=yyyy-MM-dd&to=yyyy-MM-dd
  getSummary(from?: string, to?: string): Observable<LeadSummary> {
    let params = new HttpParams();
    if (from) params = params.set('from', from);
    if (to) params = params.set('to', to);

    return this.http.get<LeadSummary>(`${this.baseUrl}/summary`, { params });
  }

  // ✅ /all?from=yyyy-MM-dd&to=yyyy-MM-dd
  getAll(opts?: { from?: string; to?: string }): Observable<Lead[]> {
    let params = new HttpParams();
    if (opts?.from) params = params.set('from', opts.from);
    if (opts?.to) params = params.set('to', opts.to);

    return this.http.get<Lead[]>(`${this.baseUrl}/all`, { params });
  }
}