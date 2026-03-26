// // // // // // // // // // import { Component, OnInit } from '@angular/core';
// // // // // // // // // // import { CommonModule } from '@angular/common';
// // // // // // // // // // import { LeadService, LeadSummary, Lead } from '../../services/lead.service';

// // // // // // // // // // @Component({
// // // // // // // // // //   selector: 'app-dashboard',
// // // // // // // // // //   standalone: true,
// // // // // // // // // //   imports: [CommonModule],
// // // // // // // // // //   templateUrl: './dashboard.html',
// // // // // // // // // //   styleUrl: './dashboard.css',
// // // // // // // // // // })
// // // // // // // // // // export class DashboardComponent implements OnInit {
// // // // // // // // // //   summary: LeadSummary | null = null;
// // // // // // // // // //   leads: Lead[] = [];

// // // // // // // // // //   loadingSummary = false;
// // // // // // // // // //   loadingLeads = false;

// // // // // // // // // //   constructor(private leadService: LeadService) {}

// // // // // // // // // //   ngOnInit(): void {
// // // // // // // // // //     this.loadSummary();
// // // // // // // // // //     this.loadLeads();
// // // // // // // // // //   }

// // // // // // // // // //   private loadSummary(): void {
// // // // // // // // // //     this.loadingSummary = true;

// // // // // // // // // //     this.leadService.getSummary().subscribe({
// // // // // // // // // //       next: (data: LeadSummary) => {
// // // // // // // // // //         this.summary = data;
// // // // // // // // // //       },
// // // // // // // // // //       error: (err: any) => {
// // // // // // // // // //         console.error('Error loading summary', err);
// // // // // // // // // //       },
// // // // // // // // // //       complete: () => {
// // // // // // // // // //         this.loadingSummary = false;
// // // // // // // // // //       },
// // // // // // // // // //     });
// // // // // // // // // //   }

// // // // // // // // // //   private loadLeads(): void {
// // // // // // // // // //     this.loadingLeads = true;

// // // // // // // // // //     this.leadService.getAll().subscribe({
// // // // // // // // // //       next: (data: Lead[]) => {
// // // // // // // // // //         this.leads = data;
// // // // // // // // // //       },
// // // // // // // // // //       error: (err: any) => {
// // // // // // // // // //         console.error('Error loading leads', err);
// // // // // // // // // //       },
// // // // // // // // // //       complete: () => {
// // // // // // // // // //         this.loadingLeads = false;
// // // // // // // // // //       },
// // // // // // // // // //     });
// // // // // // // // // //   }

// // // // // // // // // //   statusClass(status?: string): string {
// // // // // // // // // //     if (!status) return '';
// // // // // // // // // //     return status.toLowerCase(); // QUALIFIED -> qualified
// // // // // // // // // //   }
// // // // // // // // // // }



// // // // // // // // // import { Component, OnInit } from '@angular/core';
// // // // // // // // // import { CommonModule } from '@angular/common';
// // // // // // // // // import { LeadService, LeadSummary, Lead } from '../../services/lead.service';

// // // // // // // // // @Component({
// // // // // // // // //   selector: 'app-dashboard',
// // // // // // // // //   standalone: true,
// // // // // // // // //   imports: [CommonModule],
// // // // // // // // //   templateUrl: './dashboard.html',
// // // // // // // // //   styleUrl: './dashboard.css',
// // // // // // // // // })
// // // // // // // // // export class DashboardComponent implements OnInit {
// // // // // // // // //   summary: LeadSummary | null = null;
// // // // // // // // //   leads: Lead[] = [];

// // // // // // // // //   loadingSummary = false;
// // // // // // // // //   loadingLeads = false;

// // // // // // // // //   constructor(private leadService: LeadService) {}

// // // // // // // // //   ngOnInit(): void {
// // // // // // // // //     this.loadSummary();
// // // // // // // // //     this.loadLeads();
// // // // // // // // //   }

// // // // // // // // //   private loadSummary(): void {
// // // // // // // // //     this.loadingSummary = true;

// // // // // // // // //     this.leadService.getSummary().subscribe({
// // // // // // // // //       next: (data: LeadSummary) => {
// // // // // // // // //         console.log('📊 Summary from API:', data);
// // // // // // // // //         this.summary = data;
// // // // // // // // //       },
// // // // // // // // //       error: (err: any) => {
// // // // // // // // //         console.error('❌ Error loading summary', err);
// // // // // // // // //       },
// // // // // // // // //       complete: () => {
// // // // // // // // //         this.loadingSummary = false;
// // // // // // // // //       },
// // // // // // // // //     });
// // // // // // // // //   }

// // // // // // // // //   private loadLeads(): void {
// // // // // // // // //     this.loadingLeads = true;

// // // // // // // // //     this.leadService.getAll().subscribe({
// // // // // // // // //       next: (data: Lead[]) => {
// // // // // // // // //         console.log('📋 Leads from API:', data);
// // // // // // // // //         this.leads = data;
// // // // // // // // //       },
// // // // // // // // //       error: (err: any) => {
// // // // // // // // //         console.error('❌ Error loading leads', err);
// // // // // // // // //       },
// // // // // // // // //       complete: () => {
// // // // // // // // //         this.loadingLeads = false;
// // // // // // // // //       },
// // // // // // // // //     });
// // // // // // // // //   }

// // // // // // // // //   // 👇 Helper getters – null safe
// // // // // // // // //   get total(): number {
// // // // // // // // //     return this.summary?.total ?? 0;
// // // // // // // // //   }

// // // // // // // // //   get qualified(): number {
// // // // // // // // //     return this.summary?.qualified ?? 0;
// // // // // // // // //   }

// // // // // // // // //   get unqualified(): number {
// // // // // // // // //     return this.summary?.unqualified ?? 0;
// // // // // // // // //   }

// // // // // // // // //   get lost(): number {
// // // // // // // // //     return this.summary?.lost ?? 0;
// // // // // // // // //   }

// // // // // // // // //   // Pending = total - (Q + UQ + Lost)
// // // // // // // // //   get pending(): number {
// // // // // // // // //     return this.total - (this.qualified + this.unqualified + this.lost);
// // // // // // // // //   }

// // // // // // // // //   statusClass(status?: string): string {
// // // // // // // // //     if (!status) return '';
// // // // // // // // //     return status.toLowerCase(); // QUALIFIED -> qualified, etc
// // // // // // // // //   }
// // // // // // // // // }


// // // // // // // // import { Component, OnInit } from '@angular/core';
// // // // // // // // import { CommonModule } from '@angular/common';
// // // // // // // // import { LeadService, LeadSummary, Lead } from '../../services/lead.service';

// // // // // // // // interface BarRow {
// // // // // // // //   day: string;
// // // // // // // //   website: number;
// // // // // // // //   facebook: number;
// // // // // // // //   whatsapp: number;
// // // // // // // // }

// // // // // // // // @Component({
// // // // // // // //   selector: 'app-dashboard',
// // // // // // // //   standalone: true,
// // // // // // // //   imports: [CommonModule],
// // // // // // // //   templateUrl: './dashboard.html',
// // // // // // // //   styleUrl: './dashboard.css',
// // // // // // // // })
// // // // // // // // export class DashboardComponent implements OnInit {
// // // // // // // //   summary: LeadSummary | null = null;
// // // // // // // //   leads: Lead[] = [];

// // // // // // // //   loadingSummary = false;
// // // // // // // //   loadingLeads = false;

// // // // // // // //   // Simple static bar data (baad me backend se bhi la sakte hain)
// // // // // // // //   barData: BarRow[] = [
// // // // // // // //     { day: 'Mon', website: 10, facebook: 8, whatsapp: 12 },
// // // // // // // //     { day: 'Tue', website: 18, facebook: 9, whatsapp: 16 },
// // // // // // // //     { day: 'Wed', website: 25, facebook: 19, whatsapp: 22 },
// // // // // // // //     { day: 'Thu', website: 22, facebook: 15, whatsapp: 28 },
// // // // // // // //     { day: 'Fri', website: 30, facebook: 21, whatsapp: 26 },
// // // // // // // //     { day: 'Sat', website: 14, facebook: 8, whatsapp: 18 },
// // // // // // // //     { day: 'Sun', website: 12, facebook: 10, whatsapp: 17 },
// // // // // // // //   ];

// // // // // // // //   private readonly barMax = 50; // max scale for bar chart

// // // // // // // //   constructor(private leadService: LeadService) {}

// // // // // // // //   ngOnInit(): void {
// // // // // // // //     this.loadSummary();
// // // // // // // //     this.loadLeads();
// // // // // // // //   }

// // // // // // // //   // -------- API CALLS --------
// // // // // // // //   private loadSummary(): void {
// // // // // // // //     this.loadingSummary = true;

// // // // // // // //     this.leadService.getSummary().subscribe({
// // // // // // // //       next: (data: LeadSummary) => {
// // // // // // // //         console.log('📊 Summary from API:', data);
// // // // // // // //         this.summary = data;
// // // // // // // //       },
// // // // // // // //       error: (err: any) => {
// // // // // // // //         console.error('❌ Error loading summary', err);
// // // // // // // //       },
// // // // // // // //       complete: () => {
// // // // // // // //         this.loadingSummary = false;
// // // // // // // //       },
// // // // // // // //     });
// // // // // // // //   }

// // // // // // // //   private loadLeads(): void {
// // // // // // // //     this.loadingLeads = true;

// // // // // // // //     this.leadService.getAll().subscribe({
// // // // // // // //       next: (data: Lead[]) => {
// // // // // // // //         console.log('📋 Leads from API:', data);
// // // // // // // //         this.leads = data;
// // // // // // // //       },
// // // // // // // //       error: (err: any) => {
// // // // // // // //         console.error('❌ Error loading leads', err);
// // // // // // // //       },
// // // // // // // //       complete: () => {
// // // // // // // //         this.loadingLeads = false;
// // // // // // // //       },
// // // // // // // //     });
// // // // // // // //   }

// // // // // // // //   // -------- SUMMARY GETTERS --------
// // // // // // // //   get total(): number {
// // // // // // // //     return this.summary?.total ?? 0;
// // // // // // // //   }

// // // // // // // //   get qualified(): number {
// // // // // // // //     return this.summary?.qualified ?? 0;
// // // // // // // //   }

// // // // // // // //   get unqualified(): number {
// // // // // // // //     return this.summary?.unqualified ?? 0;
// // // // // // // //   }

// // // // // // // //   get lost(): number {
// // // // // // // //     return this.summary?.lost ?? 0;
// // // // // // // //   }

// // // // // // // //   get pending(): number {
// // // // // // // //     const val = this.total - (this.qualified + this.unqualified + this.lost);
// // // // // // // //     return val > 0 ? val : 0;
// // // // // // // //   }

// // // // // // // //   // -------- DONUT PERCENTAGES --------
// // // // // // // //   get qualifiedPercent(): number {
// // // // // // // //     return this.total ? Math.round((this.qualified / this.total) * 100) : 0;
// // // // // // // //   }

// // // // // // // //   get lostPercent(): number {
// // // // // // // //     return this.total ? Math.round((this.lost / this.total) * 100) : 0;
// // // // // // // //   }

// // // // // // // //   donutBackgroundQualified(): string {
// // // // // // // //     const q = this.qualifiedPercent;
// // // // // // // //     return `conic-gradient(#27ae60 ${q}%, #e9ecef 0)`;
// // // // // // // //   }

// // // // // // // //   donutBackgroundLost(): string {
// // // // // // // //     const l = this.lostPercent;
// // // // // // // //     return `conic-gradient(#e74c3c ${l}%, #e9ecef 0)`;
// // // // // // // //   }

// // // // // // // //   // -------- BAR HEIGHT --------
// // // // // // // //   barHeight(value: number): string {
// // // // // // // //     const max = this.barMax || 1;
// // // // // // // //     const percent = Math.min(100, (value / max) * 100);
// // // // // // // //     return percent + '%';
// // // // // // // //   }

// // // // // // // //   // -------- STATUS BADGE CLASS --------
// // // // // // // //   statusClass(status?: string): string {
// // // // // // // //     if (!status) return 'badge-default';

// // // // // // // //     const s = status.toUpperCase();
// // // // // // // //     if (s === 'QUALIFIED') return 'badge-qualified';
// // // // // // // //     if (s === 'UNQUALIFIED') return 'badge-unqualified';
// // // // // // // //     if (s === 'LOST') return 'badge-lost';
// // // // // // // //     return 'badge-default';
// // // // // // // //   }
// // // // // // // // }








// // // // // // // import { Component, OnInit } from '@angular/core';
// // // // // // // import { CommonModule } from '@angular/common';
// // // // // // // import { LeadService, LeadSummary, Lead } from '../../services/lead.service';

// // // // // // // interface BarRow {
// // // // // // //   day: string;
// // // // // // //   website: number;
// // // // // // //   facebook: number;
// // // // // // //   whatsapp: number;
// // // // // // // }

// // // // // // // @Component({
// // // // // // //   selector: 'app-dashboard',
// // // // // // //   standalone: true,
// // // // // // //   imports: [CommonModule],
// // // // // // //   templateUrl: './dashboard.html',
// // // // // // //   styleUrl: './dashboard.css',
// // // // // // // })
// // // // // // // export class DashboardComponent implements OnInit {
// // // // // // //   summary: LeadSummary | null = null;
// // // // // // //   leads: Lead[] = [];

// // // // // // //   loadingSummary = false;
// // // // // // //   loadingLeads = false;

// // // // // // //   // Ab barData real leads se banega
// // // // // // //   barData: BarRow[] = [
// // // // // // //     { day: 'Mon', website: 0, facebook: 0, whatsapp: 0 },
// // // // // // //     { day: 'Tue', website: 0, facebook: 0, whatsapp: 0 },
// // // // // // //     { day: 'Wed', website: 0, facebook: 0, whatsapp: 0 },
// // // // // // //     { day: 'Thu', website: 0, facebook: 0, whatsapp: 0 },
// // // // // // //     { day: 'Fri', website: 0, facebook: 0, whatsapp: 0 },
// // // // // // //     { day: 'Sat', website: 0, facebook: 0, whatsapp: 0 },
// // // // // // //     { day: 'Sun', website: 0, facebook: 0, whatsapp: 0 },
// // // // // // //   ];

// // // // // // //   barMax = 1; // dynamic max scale

// // // // // // //   constructor(private leadService: LeadService) {}

// // // // // // //   ngOnInit(): void {
// // // // // // //     this.loadSummary();
// // // // // // //     this.loadLeads();
// // // // // // //   }

// // // // // // //   // -------- API CALLS --------
// // // // // // //   private loadSummary(): void {
// // // // // // //     this.loadingSummary = true;

// // // // // // //     this.leadService.getSummary().subscribe({
// // // // // // //       next: (data: LeadSummary) => {
// // // // // // //         console.log('📊 Summary from API:', data);
// // // // // // //         this.summary = data;
// // // // // // //       },
// // // // // // //       error: (err: any) => {
// // // // // // //         console.error('❌ Error loading summary', err);
// // // // // // //       },
// // // // // // //       complete: () => {
// // // // // // //         this.loadingSummary = false;
// // // // // // //       },
// // // // // // //     });
// // // // // // //   }

// // // // // // //   private loadLeads(): void {
// // // // // // //     this.loadingLeads = true;

// // // // // // //     this.leadService.getAll().subscribe({
// // // // // // //       next: (data: Lead[]) => {
// // // // // // //         console.log('📋 Leads from API:', data);
// // // // // // //         this.leads = data;

// // // // // // //         // Yahin se bar chart ka data banayenge
// // // // // // //         this.buildBarDataFromLeads();
// // // // // // //       },
// // // // // // //       error: (err: any) => {
// // // // // // //         console.error('❌ Error loading leads', err);
// // // // // // //       },
// // // // // // //       complete: () => {
// // // // // // //         this.loadingLeads = false;
// // // // // // //       },
// // // // // // //     });
// // // // // // //   }

// // // // // // //   // -------- SUMMARY GETTERS --------
// // // // // // //   get total(): number {
// // // // // // //     return this.summary?.total ?? 0;
// // // // // // //   }

// // // // // // //   get qualified(): number {
// // // // // // //     return this.summary?.qualified ?? 0;
// // // // // // //   }

// // // // // // //   get unqualified(): number {
// // // // // // //     return this.summary?.unqualified ?? 0;
// // // // // // //   }

// // // // // // //   get lost(): number {
// // // // // // //     return this.summary?.lost ?? 0;
// // // // // // //   }

// // // // // // //   get pending(): number {
// // // // // // //     const val = this.total - (this.qualified + this.unqualified + this.lost);
// // // // // // //     return val > 0 ? val : 0;
// // // // // // //   }

// // // // // // //   // -------- DONUT PERCENTAGES --------
// // // // // // //   get qualifiedPercent(): number {
// // // // // // //     return this.total ? Math.round((this.qualified / this.total) * 100) : 0;
// // // // // // //   }

// // // // // // //   get lostPercent(): number {
// // // // // // //     return this.total ? Math.round((this.lost / this.total) * 100) : 0;
// // // // // // //   }

// // // // // // //   donutBackgroundQualified(): string {
// // // // // // //     const q = this.qualifiedPercent;
// // // // // // //     return `conic-gradient(#27ae60 ${q}%, #e9ecef 0)`;
// // // // // // //   }

// // // // // // //   donutBackgroundLost(): string {
// // // // // // //     const l = this.lostPercent;
// // // // // // //     return `conic-gradient(#e74c3c ${l}%, #e9ecef 0)`;
// // // // // // //   }

// // // // // // //   // -------- BAR DATA FROM LEADS --------
// // // // // // //   private buildBarDataFromLeads(): void {
// // // // // // //     // Reset counts
// // // // // // //     this.barData = [
// // // // // // //       { day: 'Mon', website: 0, facebook: 0, whatsapp: 0 },
// // // // // // //       { day: 'Tue', website: 0, facebook: 0, whatsapp: 0 },
// // // // // // //       { day: 'Wed', website: 0, facebook: 0, whatsapp: 0 },
// // // // // // //       { day: 'Thu', website: 0, facebook: 0, whatsapp: 0 },
// // // // // // //       { day: 'Fri', website: 0, facebook: 0, whatsapp: 0 },
// // // // // // //       { day: 'Sat', website: 0, facebook: 0, whatsapp: 0 },
// // // // // // //       { day: 'Sun', website: 0, facebook: 0, whatsapp: 0 },
// // // // // // //     ];

// // // // // // //     // Helper: day index 0..6 -> Mon..Sun (we'll treat 0=Sun)
// // // // // // //     const getDayIndex = (dateStr?: string | null): number | null => {
// // // // // // //       if (!dateStr) return null;
// // // // // // //       const d = new Date(dateStr);
// // // // // // //       if (isNaN(d.getTime())) return null;
// // // // // // //       const jsDay = d.getDay(); // 0=Sun..6=Sat
// // // // // // //       // we want index 0=Mon..6=Sun
// // // // // // //       if (jsDay === 0) return 6; // Sunday -> last
// // // // // // //       return jsDay - 1; // Mon=1->0, Tue=2->1, ...
// // // // // // //     };

// // // // // // //     const toSourceKey = (src?: string | null): 'website' | 'facebook' | 'whatsapp' | null => {
// // // // // // //       if (!src) return null;
// // // // // // //       const s = src.toLowerCase().trim();

// // // // // // //       if (s.includes('web')) return 'website';
// // // // // // //       if (s.includes('fb') || s.includes('face')) return 'facebook';
// // // // // // //       if (s.includes('whatsapp') || s.includes('wa')) return 'whatsapp';

// // // // // // //       return null; // other sources ignore for this chart
// // // // // // //     };

// // // // // // //     for (const lead of this.leads) {
// // // // // // //       const dayIndex = getDayIndex((lead as any).irLeadDtime);
// // // // // // //       const key = toSourceKey(lead.irLeadSource);

// // // // // // //       if (dayIndex === null || key === null) continue;

// // // // // // //       const row = this.barData[dayIndex];

// // // // // // //       if (key === 'website') row.website += 1;
// // // // // // //       if (key === 'facebook') row.facebook += 1;
// // // // // // //       if (key === 'whatsapp') row.whatsapp += 1;
// // // // // // //     }

// // // // // // //     // barMax calculate from data
// // // // // // //     let max = 1;
// // // // // // //     for (const row of this.barData) {
// // // // // // //       max = Math.max(max, row.website, row.facebook, row.whatsapp);
// // // // // // //     }
// // // // // // //     this.barMax = max;

// // // // // // //     console.log('📊 Bar data from leads:', this.barData, 'barMax=', this.barMax);
// // // // // // //   }

// // // // // // //   // -------- BAR HEIGHT --------
// // // // // // //   barHeight(value: number): string {
// // // // // // //     const max = this.barMax || 1;
// // // // // // //     const percent = Math.min(100, (value / max) * 100);
// // // // // // //     return percent + '%';
// // // // // // //   }

// // // // // // //   // -------- STATUS BADGE CLASS --------
// // // // // // //   statusClass(status?: string): string {
// // // // // // //     if (!status) return 'badge-default';

// // // // // // //     const s = status.toUpperCase();
// // // // // // //     if (s === 'QUALIFIED') return 'badge-qualified';
// // // // // // //     if (s === 'UNQUALIFIED') return 'badge-unqualified';
// // // // // // //     if (s === 'LOST') return 'badge-lost';
// // // // // // //     return 'badge-default';
// // // // // // //   }
// // // // // // // }










// // // // // // import { Component, OnInit } from '@angular/core';
// // // // // // import { CommonModule } from '@angular/common';
// // // // // // import { FormsModule } from '@angular/forms'; // ✅ for ngModel
// // // // // // import { LeadService, LeadSummary, Lead } from '../../services/lead.service';

// // // // // // interface BarRow {
// // // // // //   day: string;
// // // // // //   website: number;
// // // // // //   facebook: number;
// // // // // //   whatsapp: number;
// // // // // // }

// // // // // // @Component({
// // // // // //   selector: 'app-dashboard',
// // // // // //   standalone: true,
// // // // // //   imports: [CommonModule, FormsModule], // ✅ add FormsModule
// // // // // //   templateUrl: './dashboard.html',
// // // // // //   styleUrl: './dashboard.css',
// // // // // // })
// // // // // // export class DashboardComponent implements OnInit {
// // // // // //   summary: LeadSummary | null = null;
// // // // // //   leads: Lead[] = [];

// // // // // //   loadingSummary = false;
// // // // // //   loadingLeads = false;

// // // // // //   // ✅ Date filters (yyyy-MM-dd)
// // // // // //   filterFrom: string = '';
// // // // // //   filterTo: string = '';

// // // // // //   // Ab barData real leads se banega
// // // // // //   barData: BarRow[] = [
// // // // // //     { day: 'Mon', website: 0, facebook: 0, whatsapp: 0 },
// // // // // //     { day: 'Tue', website: 0, facebook: 0, whatsapp: 0 },
// // // // // //     { day: 'Wed', website: 0, facebook: 0, whatsapp: 0 },
// // // // // //     { day: 'Thu', website: 0, facebook: 0, whatsapp: 0 },
// // // // // //     { day: 'Fri', website: 0, facebook: 0, whatsapp: 0 },
// // // // // //     { day: 'Sat', website: 0, facebook: 0, whatsapp: 0 },
// // // // // //     { day: 'Sun', website: 0, facebook: 0, whatsapp: 0 },
// // // // // //   ];

// // // // // //   barMax = 1; // dynamic max scale

// // // // // //   constructor(private leadService: LeadService) {}

// // // // // //   ngOnInit(): void {
// // // // // //     this.loadSummary();
// // // // // //     this.loadLeads();
// // // // // //   }

// // // // // //   // ✅ UI buttons (Backend connect baad me karenge)
// // // // // //   onClearFilters(): void {
// // // // // //     this.filterFrom = '';
// // // // // //     this.filterTo = '';
// // // // // //     console.log('Filters cleared');
// // // // // //   }

// // // // // //   onSearchClick(): void {
// // // // // //     console.log('Searching with:', this.filterFrom, this.filterTo);
// // // // // //   }

// // // // // //   // -------- API CALLS --------
// // // // // //   private loadSummary(): void {
// // // // // //     this.loadingSummary = true;

// // // // // //     this.leadService.getSummary().subscribe({
// // // // // //       next: (data: LeadSummary) => {
// // // // // //         console.log('📊 Summary from API:', data);
// // // // // //         this.summary = data;
// // // // // //       },
// // // // // //       error: (err: any) => {
// // // // // //         console.error('❌ Error loading summary', err);
// // // // // //       },
// // // // // //       complete: () => {
// // // // // //         this.loadingSummary = false;
// // // // // //       },
// // // // // //     });
// // // // // //   }

// // // // // //   private loadLeads(): void {
// // // // // //     this.loadingLeads = true;

// // // // // //     this.leadService.getAll().subscribe({
// // // // // //       next: (data: Lead[]) => {
// // // // // //         console.log('📋 Leads from API:', data);
// // // // // //         this.leads = data;

// // // // // //         // Yahin se bar chart ka data banayenge
// // // // // //         this.buildBarDataFromLeads();
// // // // // //       },
// // // // // //       error: (err: any) => {
// // // // // //         console.error('❌ Error loading leads', err);
// // // // // //       },
// // // // // //       complete: () => {
// // // // // //         this.loadingLeads = false;
// // // // // //       },
// // // // // //     });
// // // // // //   }

// // // // // //   // -------- SUMMARY GETTERS --------
// // // // // //   get total(): number {
// // // // // //     return this.summary?.total ?? 0;
// // // // // //   }

// // // // // //   get qualified(): number {
// // // // // //     return this.summary?.qualified ?? 0;
// // // // // //   }

// // // // // //   get unqualified(): number {
// // // // // //     return this.summary?.unqualified ?? 0;
// // // // // //   }

// // // // // //   get lost(): number {
// // // // // //     return this.summary?.lost ?? 0;
// // // // // //   }

// // // // // //   get pending(): number {
// // // // // //     const val = this.total - (this.qualified + this.unqualified + this.lost);
// // // // // //     return val > 0 ? val : 0;
// // // // // //   }

// // // // // //   // -------- DONUT PERCENTAGES --------
// // // // // //   get qualifiedPercent(): number {
// // // // // //     return this.total ? Math.round((this.qualified / this.total) * 100) : 0;
// // // // // //   }

// // // // // //   get lostPercent(): number {
// // // // // //     return this.total ? Math.round((this.lost / this.total) * 100) : 0;
// // // // // //   }

// // // // // //   donutBackgroundQualified(): string {
// // // // // //     const q = this.qualifiedPercent;
// // // // // //     return `conic-gradient(#27ae60 ${q}%, #e9ecef 0)`;
// // // // // //   }

// // // // // //   donutBackgroundLost(): string {
// // // // // //     const l = this.lostPercent;
// // // // // //     return `conic-gradient(#e74c3c ${l}%, #e9ecef 0)`;
// // // // // //   }

// // // // // //   // -------- BAR DATA FROM LEADS --------
// // // // // //   private buildBarDataFromLeads(): void {
// // // // // //     // Reset counts
// // // // // //     this.barData = [
// // // // // //       { day: 'Mon', website: 0, facebook: 0, whatsapp: 0 },
// // // // // //       { day: 'Tue', website: 0, facebook: 0, whatsapp: 0 },
// // // // // //       { day: 'Wed', website: 0, facebook: 0, whatsapp: 0 },
// // // // // //       { day: 'Thu', website: 0, facebook: 0, whatsapp: 0 },
// // // // // //       { day: 'Fri', website: 0, facebook: 0, whatsapp: 0 },
// // // // // //       { day: 'Sat', website: 0, facebook: 0, whatsapp: 0 },
// // // // // //       { day: 'Sun', website: 0, facebook: 0, whatsapp: 0 },
// // // // // //     ];

// // // // // //     const getDayIndex = (dateStr?: string | null): number | null => {
// // // // // //       if (!dateStr) return null;
// // // // // //       const d = new Date(dateStr);
// // // // // //       if (isNaN(d.getTime())) return null;
// // // // // //       const jsDay = d.getDay(); // 0=Sun..6=Sat
// // // // // //       if (jsDay === 0) return 6; // Sunday -> last
// // // // // //       return jsDay - 1; // Mon=1->0, Tue=2->1, ...
// // // // // //     };

// // // // // //     const toSourceKey = (
// // // // // //       src?: string | null
// // // // // //     ): 'website' | 'facebook' | 'whatsapp' | null => {
// // // // // //       if (!src) return null;
// // // // // //       const s = src.toLowerCase().trim();

// // // // // //       if (s.includes('web')) return 'website';
// // // // // //       if (s.includes('fb') || s.includes('face')) return 'facebook';
// // // // // //       if (s.includes('whatsapp') || s.includes('wa')) return 'whatsapp';

// // // // // //       return null;
// // // // // //     };

// // // // // //     for (const lead of this.leads) {
// // // // // //       const dayIndex = getDayIndex((lead as any).irLeadDtime);
// // // // // //       const key = toSourceKey((lead as any).irLeadSource);

// // // // // //       if (dayIndex === null || key === null) continue;

// // // // // //       const row = this.barData[dayIndex];
// // // // // //       if (key === 'website') row.website += 1;
// // // // // //       if (key === 'facebook') row.facebook += 1;
// // // // // //       if (key === 'whatsapp') row.whatsapp += 1;
// // // // // //     }

// // // // // //     let max = 1;
// // // // // //     for (const row of this.barData) {
// // // // // //       max = Math.max(max, row.website, row.facebook, row.whatsapp);
// // // // // //     }
// // // // // //     this.barMax = max;

// // // // // //     console.log('📊 Bar data from leads:', this.barData, 'barMax=', this.barMax);
// // // // // //   }

// // // // // //   // -------- BAR HEIGHT --------
// // // // // //   barHeight(value: number): string {
// // // // // //     const max = this.barMax || 1;
// // // // // //     const percent = Math.min(100, (value / max) * 100);
// // // // // //     return percent + '%';
// // // // // //   }

// // // // // //   // -------- STATUS BADGE CLASS --------
// // // // // //   statusClass(status?: string): string {
// // // // // //     if (!status) return 'badge-default';

// // // // // //     const s = status.toUpperCase();
// // // // // //     if (s === 'QUALIFIED') return 'badge-qualified';
// // // // // //     if (s === 'UNQUALIFIED') return 'badge-unqualified';
// // // // // //     if (s === 'LOST') return 'badge-lost';
// // // // // //     return 'badge-default';
// // // // // //   }
// // // // // // }




// // // // // import { Component, OnInit } from '@angular/core';
// // // // // import { CommonModule } from '@angular/common';
// // // // // import { FormsModule } from '@angular/forms';
// // // // // import { LeadService, LeadSummary, Lead } from '../../services/lead.service';

// // // // // interface BarRow {
// // // // //   day: string;
// // // // //   website: number;
// // // // //   facebook: number;
// // // // //   whatsapp: number;
// // // // // }

// // // // // @Component({
// // // // //   selector: 'app-dashboard',
// // // // //   standalone: true,
// // // // //   imports: [CommonModule, FormsModule],
// // // // //   templateUrl: './dashboard.html',
// // // // //   styleUrl: './dashboard.css',
// // // // // })
// // // // // export class DashboardComponent implements OnInit {
// // // // //   summary: LeadSummary | null = null;
// // // // //   leads: Lead[] = [];

// // // // //   loadingSummary = false;
// // // // //   loadingLeads = false;

// // // // //   // ✅ Date filters (yyyy-MM-dd)
// // // // //   filterFrom: string = '';
// // // // //   filterTo: string = '';

// // // // //   barData: BarRow[] = [
// // // // //     { day: 'Mon', website: 0, facebook: 0, whatsapp: 0 },
// // // // //     { day: 'Tue', website: 0, facebook: 0, whatsapp: 0 },
// // // // //     { day: 'Wed', website: 0, facebook: 0, whatsapp: 0 },
// // // // //     { day: 'Thu', website: 0, facebook: 0, whatsapp: 0 },
// // // // //     { day: 'Fri', website: 0, facebook: 0, whatsapp: 0 },
// // // // //     { day: 'Sat', website: 0, facebook: 0, whatsapp: 0 },
// // // // //     { day: 'Sun', website: 0, facebook: 0, whatsapp: 0 },
// // // // //   ];

// // // // //   barMax = 1;

// // // // //   constructor(private leadService: LeadService) {}

// // // // //   ngOnInit(): void {
// // // // //     this.loadSummary();
// // // // //     this.loadLeads();
// // // // //   }

// // // // //   // ✅ Clear button
// // // // //   onClearFilters(): void {
// // // // //     this.filterFrom = '';
// // // // //     this.filterTo = '';
// // // // //     this.loadSummary();
// // // // //     this.loadLeads();
// // // // //   }

// // // // //   // ✅ Search button (now calls backend with from/to)
// // // // //   onSearchClick(): void {
// // // // //     console.log('Searching with:', this.filterFrom, this.filterTo);
// // // // //     this.loadSummary(this.filterFrom, this.filterTo);
// // // // //     this.loadLeads(this.filterFrom, this.filterTo);
// // // // //   }

// // // // //   // -------- API CALLS --------
// // // // //   private loadSummary(from?: string, to?: string): void {
// // // // //     this.loadingSummary = true;

// // // // //     this.leadService.getSummary(from, to).subscribe({
// // // // //       next: (data: LeadSummary) => {
// // // // //         console.log('📊 Summary from API:', data);
// // // // //         this.summary = data;
// // // // //       },
// // // // //       error: (err: any) => {
// // // // //         console.error('❌ Error loading summary', err);
// // // // //       },
// // // // //       complete: () => {
// // // // //         this.loadingSummary = false;
// // // // //       },
// // // // //     });
// // // // //   }

// // // // //   private loadLeads(from?: string, to?: string): void {
// // // // //     this.loadingLeads = true;

// // // // //     this.leadService.getAll({ from, to }).subscribe({
// // // // //       next: (data: Lead[]) => {
// // // // //         console.log('📋 Leads from API:', data);
// // // // //         this.leads = data;
// // // // //         this.buildBarDataFromLeads();
// // // // //       },
// // // // //       error: (err: any) => {
// // // // //         console.error('❌ Error loading leads', err);
// // // // //       },
// // // // //       complete: () => {
// // // // //         this.loadingLeads = false;
// // // // //       },
// // // // //     });
// // // // //   }

// // // // //   // -------- SUMMARY GETTERS --------
// // // // //   get total(): number {
// // // // //     return this.summary?.total ?? 0;
// // // // //   }

// // // // //   get qualified(): number {
// // // // //     return this.summary?.qualified ?? 0;
// // // // //   }

// // // // //   get unqualified(): number {
// // // // //     return this.summary?.unqualified ?? 0;
// // // // //   }

// // // // //   get lost(): number {
// // // // //     return this.summary?.lost ?? 0;
// // // // //   }

// // // // //   get pending(): number {
// // // // //     const val = this.total - (this.qualified + this.unqualified + this.lost);
// // // // //     return val > 0 ? val : 0;
// // // // //   }

// // // // //   // -------- DONUT PERCENTAGES --------
// // // // //   get qualifiedPercent(): number {
// // // // //     return this.total ? Math.round((this.qualified / this.total) * 100) : 0;
// // // // //   }

// // // // //   get lostPercent(): number {
// // // // //     return this.total ? Math.round((this.lost / this.total) * 100) : 0;
// // // // //   }

// // // // //   donutBackgroundQualified(): string {
// // // // //     const q = this.qualifiedPercent;
// // // // //     return `conic-gradient(#27ae60 ${q}%, #e9ecef 0)`;
// // // // //   }

// // // // //   donutBackgroundLost(): string {
// // // // //     const l = this.lostPercent;
// // // // //     return `conic-gradient(#e74c3c ${l}%, #e9ecef 0)`;
// // // // //   }

// // // // //   // -------- BAR DATA FROM LEADS --------
// // // // //   private buildBarDataFromLeads(): void {
// // // // //     this.barData = [
// // // // //       { day: 'Mon', website: 0, facebook: 0, whatsapp: 0 },
// // // // //       { day: 'Tue', website: 0, facebook: 0, whatsapp: 0 },
// // // // //       { day: 'Wed', website: 0, facebook: 0, whatsapp: 0 },
// // // // //       { day: 'Thu', website: 0, facebook: 0, whatsapp: 0 },
// // // // //       { day: 'Fri', website: 0, facebook: 0, whatsapp: 0 },
// // // // //       { day: 'Sat', website: 0, facebook: 0, whatsapp: 0 },
// // // // //       { day: 'Sun', website: 0, facebook: 0, whatsapp: 0 },
// // // // //     ];

// // // // //     const getDayIndex = (dateStr?: string | null): number | null => {
// // // // //       if (!dateStr) return null;
// // // // //       const d = new Date(dateStr);
// // // // //       if (isNaN(d.getTime())) return null;
// // // // //       const jsDay = d.getDay(); // 0=Sun..6=Sat
// // // // //       if (jsDay === 0) return 6; // Sun -> last
// // // // //       return jsDay - 1; // Mon->0 ... Sat->5
// // // // //     };

// // // // //     const toSourceKey = (
// // // // //       src?: string | null
// // // // //     ): 'website' | 'facebook' | 'whatsapp' | null => {
// // // // //       if (!src) return null;
// // // // //       const s = src.toLowerCase().trim();
// // // // //       if (s.includes('web')) return 'website';
// // // // //       if (s.includes('fb') || s.includes('face')) return 'facebook';
// // // // //       if (s.includes('whatsapp') || s.includes('wa')) return 'whatsapp';
// // // // //       return null;
// // // // //     };

// // // // //     for (const lead of this.leads) {
// // // // //       const dayIndex = getDayIndex((lead as any).irLeadDtime);
// // // // //       const key = toSourceKey((lead as any).irLeadSource);
// // // // //       if (dayIndex === null || key === null) continue;

// // // // //       const row = this.barData[dayIndex];
// // // // //       if (key === 'website') row.website += 1;
// // // // //       if (key === 'facebook') row.facebook += 1;
// // // // //       if (key === 'whatsapp') row.whatsapp += 1;
// // // // //     }

// // // // //     let max = 1;
// // // // //     for (const row of this.barData) {
// // // // //       max = Math.max(max, row.website, row.facebook, row.whatsapp);
// // // // //     }
// // // // //     this.barMax = max;

// // // // //     console.log('📊 Bar data from leads:', this.barData, 'barMax=', this.barMax);
// // // // //   }

// // // // //   barHeight(value: number): string {
// // // // //     const max = this.barMax || 1;
// // // // //     const percent = Math.min(100, (value / max) * 100);
// // // // //     return percent + '%';
// // // // //   }

// // // // //   statusClass(status?: string): string {
// // // // //     if (!status) return 'badge-default';
// // // // //     const s = status.toUpperCase();
// // // // //     if (s === 'QUALIFIED') return 'badge-qualified';
// // // // //     if (s === 'UNQUALIFIED') return 'badge-unqualified';
// // // // //     if (s === 'LOST') return 'badge-lost';
// // // // //     return 'badge-default';
// // // // //   }
// // // // // }



// // // // import { Component, OnInit } from '@angular/core';
// // // // import { CommonModule } from '@angular/common';
// // // // import { FormsModule } from '@angular/forms';
// // // // import { LeadService, LeadSummary, Lead } from '../../services/lead.service';

// // // // interface BarRow {
// // // //   day: string;
// // // //   website: number;
// // // //   facebook: number;
// // // //   whatsapp: number;
// // // // }

// // // // @Component({
// // // //   selector: 'app-dashboard',
// // // //   standalone: true,
// // // //   imports: [CommonModule, FormsModule],
// // // //   templateUrl: './dashboard.html',
// // // //   styleUrl: './dashboard.css',
// // // // })
// // // // export class DashboardComponent implements OnInit {
// // // //   summary: LeadSummary | null = null;
// // // //   leads: Lead[] = [];

// // // //   loadingSummary = false;
// // // //   loadingLeads = false;

// // // //   filterFrom: string = '';
// // // //   filterTo: string = '';

// // // //   barData: BarRow[] = [
// // // //     { day: 'Monday', website: 0, facebook: 0, whatsapp: 0 },
// // // //     { day: 'Tuesday', website: 0, facebook: 0, whatsapp: 0 },
// // // //     { day: 'Wednesday', website: 0, facebook: 0, whatsapp: 0 },
// // // //     { day: 'Thursday', website: 0, facebook: 0, whatsapp: 0 },
// // // //     { day: 'Friday', website: 0, facebook: 0, whatsapp: 0 },
// // // //     { day: 'Saturday', website: 0, facebook: 0, whatsapp: 0 },
// // // //     { day: 'Sunday', website: 0, facebook: 0, whatsapp: 0 },
// // // //   ];

// // // //   barMax = 1;

// // // //   constructor(private leadService: LeadService) {}

// // // //   ngOnInit(): void {
// // // //     this.loadSummary();
// // // //     this.loadLeads();
// // // //   }

// // // //   onClearFilters(): void {
// // // //     this.filterFrom = '';
// // // //     this.filterTo = '';
// // // //     this.loadSummary();
// // // //     this.loadLeads();
// // // //   }

// // // //   onSearchClick(): void {
// // // //     this.loadSummary(this.filterFrom, this.filterTo);
// // // //     this.loadLeads(this.filterFrom, this.filterTo);
// // // //   }

// // // //   private loadSummary(from?: string, to?: string): void {
// // // //     this.loadingSummary = true;

// // // //     this.leadService.getSummary(from || undefined, to || undefined).subscribe({
// // // //       next: (data: LeadSummary) => {
// // // //         this.summary = data;
// // // //       },
// // // //       error: (err: any) => {
// // // //         console.error('❌ Error loading summary', err);
// // // //       },
// // // //       complete: () => {
// // // //         this.loadingSummary = false;
// // // //       },
// // // //     });
// // // //   }

// // // //   private loadLeads(from?: string, to?: string): void {
// // // //     this.loadingLeads = true;

// // // //     this.leadService.getAll({ from: from || undefined, to: to || undefined }).subscribe({
// // // //       next: (data: Lead[]) => {
// // // //         this.leads = data;
// // // //         this.buildBarDataFromLeads();
// // // //       },
// // // //       error: (err: any) => {
// // // //         console.error('❌ Error loading leads', err);
// // // //       },
// // // //       complete: () => {
// // // //         this.loadingLeads = false;
// // // //       },
// // // //     });
// // // //   }

// // // //   // -------- SUMMARY GETTERS --------
// // // //   get total(): number {
// // // //     return this.summary?.total ?? 0;
// // // //   }

// // // //   get qualified(): number {
// // // //     return this.summary?.qualified ?? 0;
// // // //   }

// // // //   get unqualified(): number {
// // // //     return this.summary?.unqualified ?? 0;
// // // //   }

// // // //   get lost(): number {
// // // //     return this.summary?.lost ?? 0;
// // // //   }

// // // //   get pending(): number { 
// // // //     const val = this.total - (this.qualified + this.unqualified + this.lost);
// // // //     return val > 0 ? val : 0;
// // // //   }

// // // //   // -------- DONUT PERCENTAGES --------
// // // //   get qualifiedPercent(): number {
// // // //     return this.total ? Math.round((this.qualified / this.total) * 100) : 0;
// // // //   }

// // // //   get lostPercent(): number {
// // // //     return this.total ? Math.round((this.lost / this.total) * 100) : 0;
// // // //   }

// // // //  donutBackgroundQualified(): string {
// // // //   const q = this.qualifiedPercent; // Qualified %
// // // //   return `conic-gradient(#22c55e 0 ${q}%, #3b82f6 ${q}% 100%)`;
// // // // }
// // // //  donutBackgroundLost(): string {
// // // //   const l = this.lostPercent; // Lost %
// // // //   return `conic-gradient(#ef4444 0 ${l}%, #3b82f6 ${l}% 100%)`;
// // // // }

// // // //   // -------- BAR DATA FROM LEADS --------
// // // //   private buildBarDataFromLeads(): void {
// // // //     // reset
// // // //     this.barData = [
// // // //       { day: 'Monday', website: 0, facebook: 0, whatsapp: 0 },
// // // //       { day: 'Tuesday', website: 0, facebook: 0, whatsapp: 0 },
// // // //       { day: 'Wednesday', website: 0, facebook: 0, whatsapp: 0 },
// // // //       { day: 'Thursday', website: 0, facebook: 0, whatsapp: 0 },
// // // //       { day: 'Friday', website: 0, facebook: 0, whatsapp: 0 },
// // // //       { day: 'Saturday', website: 0, facebook: 0, whatsapp: 0 },
// // // //       { day: 'Sunday', website: 0, facebook: 0, whatsapp: 0 },
// // // //     ];

// // // //     const getDayIndex = (dateStr?: string | null): number | null => {
// // // //       if (!dateStr) return null;
// // // //       const d = new Date(dateStr);
// // // //       if (isNaN(d.getTime())) return null;
// // // //       const jsDay = d.getDay(); // 0=Sun..6=Sat
// // // //       if (jsDay === 0) return 6; // Sunday -> last
// // // //       return jsDay - 1; // Mon->0 ... Sat->5
// // // //     };

// // // //     const toSourceKey = (
// // // //       src?: string | null
// // // //     ): 'website' | 'facebook' | 'whatsapp' | null => {
// // // //       if (!src) return null;
// // // //       const s = src.toLowerCase().trim();
// // // //       if (s.includes('web')) return 'website';
// // // //       if (s.includes('fb') || s.includes('face')) return 'facebook';
// // // //       if (s.includes('whatsapp') || s.includes('wa')) return 'whatsapp';
// // // //       return null;
// // // //     };

// // // //     for (const lead of this.leads) {
// // // //       const dayIndex = getDayIndex((lead as any).irLeadDtime);
// // // //       const key = toSourceKey((lead as any).irLeadSource);

// // // //       if (dayIndex === null || key === null) continue;

// // // //       const row = this.barData[dayIndex];
// // // //       row[key] += 1;
// // // //     }

// // // //     let max = 1;
// // // //     for (const row of this.barData) {
// // // //       max = Math.max(max, row.website, row.facebook, row.whatsapp);
// // // //     }
// // // //     this.barMax = max;
// // // //   }

// // // //   // ✅ minimum visible bar for non-zero values
 
// // // // barHeight(value: number): string {
// // // //   if (!value) return '0%';
// // // //   const max = this.barMax || 1;
// // // //   let percent = (value / max) * 100;

// // // //   // ✅ make small values visible but not too big
// // // //   percent = Math.max(percent, 10);

// // // //   return Math.min(100, percent) + '%';
// // // // }
// // // // }






// // // import { Component, OnInit, Inject, ChangeDetectorRef } from '@angular/core';
// // // import { CommonModule, isPlatformBrowser } from '@angular/common';
// // // import { FormsModule } from '@angular/forms';
// // // import { LeadService, LeadSummary, Lead } from '../../services/lead.service';
// // // import { PLATFORM_ID } from '@angular/core';

// // // interface BarRow {
// // //   day: string;
// // //   website: number;
// // //   facebook: number;
// // //   whatsapp: number;
// // // }

// // // @Component({
// // //   selector: 'app-dashboard',
// // //   standalone: true,
// // //   imports: [CommonModule, FormsModule],
// // //   templateUrl: './dashboard.html',
// // //   styleUrl: './dashboard.css',
// // // })
// // // export class DashboardComponent implements OnInit {
// // //   summary: LeadSummary | null = null;
// // //   leads: Lead[] = [];

// // //   loadingSummary = false;
// // //   loadingLeads = false;

// // //   filterFrom: string = '';
// // //   filterTo: string = '';

// // //   barData: BarRow[] = [
// // //     { day: 'Monday', website: 0, facebook: 0, whatsapp: 0 },
// // //     { day: 'Tuesday', website: 0, facebook: 0, whatsapp: 0 },
// // //     { day: 'Wednesday', website: 0, facebook: 0, whatsapp: 0 },
// // //     { day: 'Thursday', website: 0, facebook: 0, whatsapp: 0 },
// // //     { day: 'Friday', website: 0, facebook: 0, whatsapp: 0 },
// // //     { day: 'Saturday', website: 0, facebook: 0, whatsapp: 0 },
// // //     { day: 'Sunday', website: 0, facebook: 0, whatsapp: 0 },
// // //   ];

// // //   barMax = 1;

// // //   constructor(
// // //     private leadService: LeadService,
// // //     @Inject(PLATFORM_ID) private platformId: Object,
// // //     private cdr: ChangeDetectorRef
// // //   ) {}

// // //   ngOnInit(): void {
// // //     // ✅ SSR: server pe API call mat chalao
// // //     if (!isPlatformBrowser(this.platformId)) return;

// // //     // ✅ After navigation/hydration, ensure load runs
// // //     setTimeout(() => {
// // //       this.loadSummary();
// // //       this.loadLeads();
// // //     }, 0);
// // //   }

// // //   onClearFilters(): void {
// // //     this.filterFrom = '';
// // //     this.filterTo = '';
// // //     this.loadSummary();
// // //     this.loadLeads();
// // //   }

// // //   onSearchClick(): void {
// // //     this.loadSummary(this.filterFrom, this.filterTo);
// // //     this.loadLeads(this.filterFrom, this.filterTo);
// // //   }

// // //   private loadSummary(from?: string, to?: string): void {
// // //     this.loadingSummary = true;

// // //     this.leadService.getSummary(from || undefined, to || undefined).subscribe({
// // //       next: (data: LeadSummary) => {
// // //         this.summary = data;
// // //         this.cdr.detectChanges(); // ✅ force update
// // //       },
// // //       error: (err: any) => console.error('❌ Error loading summary', err),
// // //       complete: () => {
// // //         this.loadingSummary = false;
// // //         this.cdr.detectChanges();
// // //       },
// // //     });
// // //   }

// // //   private loadLeads(from?: string, to?: string): void {
// // //     this.loadingLeads = true;

// // //     this.leadService.getAll({ from: from || undefined, to: to || undefined }).subscribe({
// // //       next: (data: Lead[]) => {
// // //         this.leads = data;
// // //         this.buildBarDataFromLeads();
// // //         this.cdr.detectChanges(); // ✅
// // //       },
// // //       error: (err: any) => console.error('❌ Error loading leads', err),
// // //       complete: () => {
// // //         this.loadingLeads = false;
// // //         this.cdr.detectChanges();
// // //       },
// // //     });
// // //   }

// // //   get total(): number { return this.summary?.total ?? 0; }
// // //   get qualified(): number { return this.summary?.qualified ?? 0; }
// // //   get unqualified(): number { return this.summary?.unqualified ?? 0; }
// // //   get lost(): number { return this.summary?.lost ?? 0; }

// // //   get pending(): number {
// // //     const val = this.total - (this.qualified + this.unqualified + this.lost);
// // //     return val > 0 ? val : 0;
// // //   }

// // //   get qualifiedPercent(): number {
// // //     return this.total ? Math.round((this.qualified / this.total) * 100) : 0;
// // //   }

// // //   get lostPercent(): number {
// // //     return this.total ? Math.round((this.lost / this.total) * 100) : 0;
// // //   }

// // //   donutBackgroundQualified(): string {
// // //     const q = this.qualifiedPercent;
// // //     return `conic-gradient(#22c55e 0 ${q}%, #3b82f6 ${q}% 100%)`;
// // //   }

// // //   donutBackgroundLost(): string {
// // //     const l = this.lostPercent;
// // //     return `conic-gradient(#ef4444 0 ${l}%, #3b82f6 ${l}% 100%)`;
// // //   }

// // //   private buildBarDataFromLeads(): void {
// // //     this.barData = [
// // //       { day: 'Monday', website: 0, facebook: 0, whatsapp: 0 },
// // //       { day: 'Tuesday', website: 0, facebook: 0, whatsapp: 0 },
// // //       { day: 'Wednesday', website: 0, facebook: 0, whatsapp: 0 },
// // //       { day: 'Thursday', website: 0, facebook: 0, whatsapp: 0 },
// // //       { day: 'Friday', website: 0, facebook: 0, whatsapp: 0 },
// // //       { day: 'Saturday', website: 0, facebook: 0, whatsapp: 0 },
// // //       { day: 'Sunday', website: 0, facebook: 0, whatsapp: 0 },
// // //     ];

// // //     const getDayIndex = (dateStr?: string | null): number | null => {
// // //       if (!dateStr) return null;
// // //       const d = new Date(dateStr);
// // //       if (isNaN(d.getTime())) return null;
// // //       const jsDay = d.getDay(); // 0=Sun..6=Sat
// // //       if (jsDay === 0) return 6;
// // //       return jsDay - 1;
// // //     };

// // //     const toSourceKey = (src?: string | null): 'website' | 'facebook' | 'whatsapp' | null => {
// // //       if (!src) return null;
// // //       const s = src.toLowerCase().trim();
// // //       if (s.includes('web')) return 'website';
// // //       if (s.includes('fb') || s.includes('face')) return 'facebook';
// // //       if (s.includes('whatsapp') || s.includes('wa')) return 'whatsapp';
// // //       return null;
// // //     };

// // //     for (const lead of this.leads) {
// // //       const dayIndex = getDayIndex((lead as any).irLeadDtime);
// // //       const key = toSourceKey((lead as any).irLeadSource);
// // //       if (dayIndex === null || key === null) continue;
// // //       this.barData[dayIndex][key] += 1;
// // //     }

// // //     let max = 1;
// // //     for (const row of this.barData) max = Math.max(max, row.website, row.facebook, row.whatsapp);
// // //     this.barMax = max;
// // //   }

// // //   barHeight(value: number): string {
// // //     if (!value) return '0%';
// // //     const max = this.barMax || 1;
// // //     let percent = (value / max) * 100;
// // //     if (percent < 10) percent = 10;
// // //     return Math.min(100, percent) + '%';
// // //   }
// // // }




// // import { Component, OnInit, Inject } from '@angular/core';
// // import { CommonModule, isPlatformBrowser } from '@angular/common';
// // import { FormsModule } from '@angular/forms';
// // import { PLATFORM_ID } from '@angular/core';
// // import { TranslateModule, TranslateService } from '@ngx-translate/core';
// // import { LeadService, LeadSummary, Lead } from './../../services/lead.service';

// // interface BarRow {
// //   day: string;
// //   website: number;
// //   facebook: number;
// //   whatsapp: number;
// // }

// // @Component({
// //   selector: 'app-dashboard',
// //   standalone: true,
// //   imports: [CommonModule, FormsModule, TranslateModule],
// //   templateUrl: './dashboard.html',
// //   styleUrl: './dashboard.css',
// // })
// // export class DashboardComponent implements OnInit {
// //   summary: LeadSummary | null = null;
// //   leads: Lead[] = [];

// //   loadingSummary = false;
// //   loadingLeads = false;

// //   filterFrom: string = '';
// //   filterTo: string = '';

// //   selectedLang: string = 'en';

// //   barData: BarRow[] = [
// //     { day: 'Mon', website: 0, facebook: 0, whatsapp: 0 },
// //     { day: 'Tue', website: 0, facebook: 0, whatsapp: 0 },
// //     { day: 'Wed', website: 0, facebook: 0, whatsapp: 0 },
// //     { day: 'Thu', website: 0, facebook: 0, whatsapp: 0 },
// //     { day: 'Fri', website: 0, facebook: 0, whatsapp: 0 },
// //     { day: 'Sat', website: 0, facebook: 0, whatsapp: 0 },
// //     { day: 'Sun', website: 0, facebook: 0, whatsapp: 0 },
// //   ];

// //   barMax = 1;

// //   constructor(
// //     private leadService: LeadService,
// //     private translate: TranslateService,
// //     @Inject(PLATFORM_ID) private platformId: Object
// //   ) {}

// //   ngOnInit(): void {
// //     if (isPlatformBrowser(this.platformId)) {
// //       this.selectedLang = localStorage.getItem('app_lang') || 'en';
// //       this.translate.use(this.selectedLang);
// //       document.documentElement.dir = this.selectedLang === 'ar' ? 'rtl' : 'ltr';
// //     } else {
// //       this.translate.use('en');
// //     }

// //     this.loadSummary();
// //     this.loadLeads();
// //   }

// //   changeLanguage(lang: string): void {
// //     const finalLang = lang === 'en-us' ? 'en' : lang;

// //     this.selectedLang = lang;
// //     this.translate.use(finalLang);

// //     if (isPlatformBrowser(this.platformId)) {
// //       localStorage.setItem('app_lang', lang);
// //       document.documentElement.dir = finalLang === 'ar' ? 'rtl' : 'ltr';
// //     }
// //   }

// //   get total(): number {
// //     return this.summary?.total || 0;
// //   }

// //   get qualified(): number {
// //     return this.summary?.qualified || 0;
// //   }

// //   get unqualified(): number {
// //     return this.summary?.unqualified || 0;
// //   }

// //   get lost(): number {
// //     return this.summary?.lost || 0;
// //   }

// //   get pending(): number {
// //     const p = this.total - (this.qualified + this.unqualified + this.lost);
// //     return p > 0 ? p : 0;
// //   }

// //   get qualifiedPercent(): number {
// //     if (!this.total) return 0;
// //     return Math.round((this.qualified / this.total) * 100);
// //   }

// //   get lostPercent(): number {
// //     if (!this.total) return 0;
// //     return Math.round((this.lost / this.total) * 100);
// //   }

// //   onClearFilters(): void {
// //     this.filterFrom = '';
// //     this.filterTo = '';
// //     this.loadSummary();
// //     this.loadLeads();
// //   }

// //   onSearchClick(): void {
// //     this.loadSummary(this.filterFrom, this.filterTo);
// //     this.loadLeads(this.filterFrom, this.filterTo);
// //   }

// //   private loadSummary(from?: string, to?: string): void {
// //     this.loadingSummary = true;

// //     this.leadService.getSummary(from, to).subscribe({
// //       next: (data: LeadSummary) => {
// //         this.summary = data;
// //       },
// //       error: (err: any) => {
// //         console.error('Error loading summary', err);
// //       },
// //       complete: () => {
// //         this.loadingSummary = false;
// //       },
// //     });
// //   }

// //   private loadLeads(from?: string, to?: string): void {
// //     this.loadingLeads = true;

// //     this.leadService.getAll({ from, to }).subscribe({
// //       next: (data: Lead[]) => {
// //         this.leads = data || [];
// //         this.buildBarData();
// //       },
// //       error: (err: any) => {
// //         console.error('Error loading leads', err);
// //       },
// //       complete: () => {
// //         this.loadingLeads = false;
// //       },
// //     });
// //   }

// //   buildBarData(): void {
// //     this.barData = [
// //       { day: 'Mon', website: 0, facebook: 0, whatsapp: 0 },
// //       { day: 'Tue', website: 0, facebook: 0, whatsapp: 0 },
// //       { day: 'Wed', website: 0, facebook: 0, whatsapp: 0 },
// //       { day: 'Thu', website: 0, facebook: 0, whatsapp: 0 },
// //       { day: 'Fri', website: 0, facebook: 0, whatsapp: 0 },
// //       { day: 'Sat', website: 0, facebook: 0, whatsapp: 0 },
// //       { day: 'Sun', website: 0, facebook: 0, whatsapp: 0 },
// //     ];

// //     const getDayIndex = (dateStr?: string | null): number | null => {
// //       if (!dateStr) return null;
// //       const d = new Date(dateStr);
// //       if (isNaN(d.getTime())) return null;
// //       const jsDay = d.getDay();
// //       if (jsDay === 0) return 6;
// //       return jsDay - 1;
// //     };

// //     const toSourceKey = (
// //       src?: string | null
// //     ): 'website' | 'facebook' | 'whatsapp' | null => {
// //       if (!src) return null;
// //       const s = src.toLowerCase().trim();
// //       if (s.includes('web')) return 'website';
// //       if (s.includes('fb') || s.includes('face')) return 'facebook';
// //       if (s.includes('whatsapp') || s.includes('wa')) return 'whatsapp';
// //       return null;
// //     };

// //     for (const lead of this.leads) {
// //       const dayIndex = getDayIndex((lead as any).irLeadDtime);
// //       const key = toSourceKey((lead as any).irLeadSource);
// //       if (dayIndex === null || key === null) continue;

// //       const row = this.barData[dayIndex];
// //       if (key === 'website') row.website += 1;
// //       if (key === 'facebook') row.facebook += 1;
// //       if (key === 'whatsapp') row.whatsapp += 1;
// //     }

// //     let max = 1;
// //     for (const row of this.barData) {
// //       max = Math.max(max, row.website, row.facebook, row.whatsapp);
// //     }
// //     this.barMax = max;
// //   }

// //   barHeight(value: number): string {
// //     const max = this.barMax || 1;
// //     const percent = Math.min(100, (value / max) * 100);
// //     return percent + '%';
// //   }

// //   statusClass(status?: string): string {
// //     if (!status) return 'badge-default';
// //     const s = status.toUpperCase();
// //     if (s === 'QUALIFIED') return 'badge-qualified';
// //     if (s === 'UNQUALIFIED') return 'badge-unqualified';
// //     if (s === 'LOST') return 'badge-lost';
// //     return 'badge-default';
// //   }

// //   donutBackgroundQualified(): string {
// //     const q = this.qualifiedPercent;
// //     return `conic-gradient(#22c55e 0% ${q}%, #e5e7eb ${q}% 100%)`;
// //   }

// //   donutBackgroundLost(): string {
// //     const l = this.lostPercent;
// //     return `conic-gradient(#ef4444 0% ${l}%, #e5e7eb ${l}% 100%)`;
// //   }
// // }




// import { Component, OnInit, Inject, ChangeDetectorRef } from '@angular/core';
// import { CommonModule, isPlatformBrowser } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { LeadService, LeadSummary, Lead } from '../../services/lead.service';
// import { PLATFORM_ID } from '@angular/core';

// interface BarRow {
//   day: string;
//   website: number;
//   facebook: number;
//   whatsapp: number;
// }

// @Component({
//   selector: 'app-dashboard',
//   standalone: true,
//   imports: [CommonModule, FormsModule],
//   templateUrl: './dashboard.html',
//   styleUrl: './dashboard.css',
// })
// export class DashboardComponent implements OnInit {
//   summary: LeadSummary | null = null;
//   leads: Lead[] = [];

//   loadingSummary = false;
//   loadingLeads = false;

//   filterFrom: string = '';
//   filterTo: string = '';

//   barData: BarRow[] = [
//     { day: 'Monday', website: 0, facebook: 0, whatsapp: 0 },
//     { day: 'Tuesday', website: 0, facebook: 0, whatsapp: 0 },
//     { day: 'Wednesday', website: 0, facebook: 0, whatsapp: 0 },
//     { day: 'Thursday', website: 0, facebook: 0, whatsapp: 0 },
//     { day: 'Friday', website: 0, facebook: 0, whatsapp: 0 },
//     { day: 'Saturday', website: 0, facebook: 0, whatsapp: 0 },
//     { day: 'Sunday', website: 0, facebook: 0, whatsapp: 0 },
//   ];

//   barMax = 1;

//   constructor(
//     private leadService: LeadService,
//     @Inject(PLATFORM_ID) private platformId: Object,
//     private cdr: ChangeDetectorRef
//   ) {}

//   ngOnInit(): void {
//     // ✅ SSR: server pe API call mat chalao
//     if (!isPlatformBrowser(this.platformId)) return;

//     // ✅ After navigation/hydration, ensure load runs
//     setTimeout(() => {
//       this.loadSummary();
//       this.loadLeads();
//     }, 0);
//   }

//   onClearFilters(): void {
//     this.filterFrom = '';
//     this.filterTo = '';
//     this.loadSummary();
//     this.loadLeads();
//   }

//   onSearchClick(): void {
//     this.loadSummary(this.filterFrom, this.filterTo);
//     this.loadLeads(this.filterFrom, this.filterTo);
//   }

//   private loadSummary(from?: string, to?: string): void {
//     this.loadingSummary = true;

//     this.leadService.getSummary(from || undefined, to || undefined).subscribe({
//       next: (data: LeadSummary) => {
//         this.summary = data;
//         this.cdr.detectChanges(); // ✅ force update
//       },
//       error: (err: any) => console.error('❌ Error loading summary', err),
//       complete: () => {
//         this.loadingSummary = false;
//         this.cdr.detectChanges();
//       },
//     });
//   }

//   private loadLeads(from?: string, to?: string): void {
//     this.loadingLeads = true;

//     this.leadService.getAll({ from: from || undefined, to: to || undefined }).subscribe({
//       next: (data: Lead[]) => {
//         this.leads = data;
//         this.buildBarDataFromLeads();
//         this.cdr.detectChanges(); // ✅
//       },
//       error: (err: any) => console.error('❌ Error loading leads', err),
//       complete: () => {
//         this.loadingLeads = false;
//         this.cdr.detectChanges();
//       },
//     });
//   }

//   get total(): number { return this.summary?.total ?? 0; }
//   get qualified(): number { return this.summary?.qualified ?? 0; }
//   get unqualified(): number { return this.summary?.unqualified ?? 0; }
//   get lost(): number { return this.summary?.lost ?? 0; }

//   get pending(): number {
//     const val = this.total - (this.qualified + this.unqualified + this.lost);
//     return val > 0 ? val : 0;
//   }

//   get qualifiedPercent(): number {
//     return this.total ? Math.round((this.qualified / this.total) * 100) : 0;
//   }

//   get lostPercent(): number {
//     return this.total ? Math.round((this.lost / this.total) * 100) : 0;
//   }

//   donutBackgroundQualified(): string {
//     const q = this.qualifiedPercent;
//     return `conic-gradient(#22c55e 0 ${q}%, #3b82f6 ${q}% 100%)`;
//   }

//   donutBackgroundLost(): string {
//     const l = this.lostPercent;
//     return `conic-gradient(#ef4444 0 ${l}%, #3b82f6 ${l}% 100%)`;
//   }

//   private buildBarDataFromLeads(): void {
//     this.barData = [
//       { day: 'Monday', website: 0, facebook: 0, whatsapp: 0 },
//       { day: 'Tuesday', website: 0, facebook: 0, whatsapp: 0 },
//       { day: 'Wednesday', website: 0, facebook: 0, whatsapp: 0 },
//       { day: 'Thursday', website: 0, facebook: 0, whatsapp: 0 },
//       { day: 'Friday', website: 0, facebook: 0, whatsapp: 0 },
//       { day: 'Saturday', website: 0, facebook: 0, whatsapp: 0 },
//       { day: 'Sunday', website: 0, facebook: 0, whatsapp: 0 },
//     ];

//     const getDayIndex = (dateStr?: string | null): number | null => {
//       if (!dateStr) return null;
//       const d = new Date(dateStr);
//       if (isNaN(d.getTime())) return null;
//       const jsDay = d.getDay(); // 0=Sun..6=Sat
//       if (jsDay === 0) return 6;
//       return jsDay - 1;
//     };

//     const toSourceKey = (src?: string | null): 'website' | 'facebook' | 'whatsapp' | null => {
//       if (!src) return null;
//       const s = src.toLowerCase().trim();
//       if (s.includes('web')) return 'website';
//       if (s.includes('fb') || s.includes('face')) return 'facebook';
//       if (s.includes('whatsapp') || s.includes('wa')) return 'whatsapp';
//       return null;
//     };

//     for (const lead of this.leads) {
//       const dayIndex = getDayIndex((lead as any).irLeadDtime);
//       const key = toSourceKey((lead as any).irLeadSource);
//       if (dayIndex === null || key === null) continue;
//       this.barData[dayIndex][key] += 1;
//     }

//     let max = 1;
//     for (const row of this.barData) max = Math.max(max, row.website, row.facebook, row.whatsapp);
//     this.barMax = max;
//   }

//   barHeight(value: number): string {
//     if (!value) return '0%';
//     const max = this.barMax || 1;
//     let percent = (value / max) * 100;
//     if (percent < 10) percent = 10;
//     return Math.min(100, percent) + '%';
//   }
// }



import { Component, OnInit, Inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LeadService, LeadSummary, Lead } from '../../services/lead.service';
import { PLATFORM_ID } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

interface BarRow {
  day: string;
  website: number;
  facebook: number;
  whatsapp: number;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslateModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class DashboardComponent implements OnInit {
  summary: LeadSummary | null = null;
  leads: Lead[] = [];

  loadingSummary = false;
  loadingLeads = false;

  filterFrom: string = '';
  filterTo: string = '';

  barData: BarRow[] = [
    { day: 'Monday', website: 0, facebook: 0, whatsapp: 0 },
    { day: 'Tuesday', website: 0, facebook: 0, whatsapp: 0 },
    { day: 'Wednesday', website: 0, facebook: 0, whatsapp: 0 },
    { day: 'Thursday', website: 0, facebook: 0, whatsapp: 0 },
    { day: 'Friday', website: 0, facebook: 0, whatsapp: 0 },
    { day: 'Saturday', website: 0, facebook: 0, whatsapp: 0 },
    { day: 'Sunday', website: 0, facebook: 0, whatsapp: 0 },
  ];

  barMax = 1;

  constructor(
    private leadService: LeadService,
    private translate: TranslateService,
    @Inject(PLATFORM_ID) private platformId: Object,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const savedLang = localStorage.getItem('app_lang') || 'en';
    this.translate.use(savedLang);
    document.documentElement.dir = savedLang === 'ar' ? 'rtl' : 'ltr';

    setTimeout(() => {
      this.loadSummary();
      this.loadLeads();
    }, 0);
  }

  onClearFilters(): void {
    this.filterFrom = '';
    this.filterTo = '';
    this.loadSummary();
    this.loadLeads();
  }

  onSearchClick(): void {
    this.loadSummary(this.filterFrom, this.filterTo);
    this.loadLeads(this.filterFrom, this.filterTo);
  }

  private loadSummary(from?: string, to?: string): void {
    this.loadingSummary = true;

    this.leadService.getSummary(from || undefined, to || undefined).subscribe({
      next: (data: LeadSummary) => {
        this.summary = data;
        this.cdr.detectChanges();
      },
      error: (err: any) => console.error('Error loading summary', err),
      complete: () => {
        this.loadingSummary = false;
        this.cdr.detectChanges();
      },
    });
  }

  private loadLeads(from?: string, to?: string): void {
    this.loadingLeads = true;

    this.leadService.getAll({ from: from || undefined, to: to || undefined }).subscribe({
      next: (data: Lead[]) => {
        this.leads = data;
        this.buildBarDataFromLeads();
        this.cdr.detectChanges();
      },
      error: (err: any) => console.error('Error loading leads', err),
      complete: () => {
        this.loadingLeads = false;
        this.cdr.detectChanges();
      },
    });
  }

  get total(): number { return this.summary?.total ?? 0; }
  get qualified(): number { return this.summary?.qualified ?? 0; }
  get unqualified(): number { return this.summary?.unqualified ?? 0; }
  get lost(): number { return this.summary?.lost ?? 0; }

  get pending(): number {
    const val = this.total - (this.qualified + this.unqualified + this.lost);
    return val > 0 ? val : 0;
  }

  get qualifiedPercent(): number {
    return this.total ? Math.round((this.qualified / this.total) * 100) : 0;
  }

  get lostPercent(): number {
    return this.total ? Math.round((this.lost / this.total) * 100) : 0;
  }

  donutBackgroundQualified(): string {
    const q = this.qualifiedPercent;
    return `conic-gradient(#22c55e 0 ${q}%, #3b82f6 ${q}% 100%)`;
  }

  donutBackgroundLost(): string {
    const l = this.lostPercent;
    return `conic-gradient(#ef4444 0 ${l}%, #3b82f6 ${l}% 100%)`;
  }

  private buildBarDataFromLeads(): void {
    this.barData = [
      { day: 'Monday', website: 0, facebook: 0, whatsapp: 0 },
      { day: 'Tuesday', website: 0, facebook: 0, whatsapp: 0 },
      { day: 'Wednesday', website: 0, facebook: 0, whatsapp: 0 },
      { day: 'Thursday', website: 0, facebook: 0, whatsapp: 0 },
      { day: 'Friday', website: 0, facebook: 0, whatsapp: 0 },
      { day: 'Saturday', website: 0, facebook: 0, whatsapp: 0 },
      { day: 'Sunday', website: 0, facebook: 0, whatsapp: 0 },
    ];

    const getDayIndex = (dateStr?: string | null): number | null => {
      if (!dateStr) return null;
      const d = new Date(dateStr);
      if (isNaN(d.getTime())) return null;
      const jsDay = d.getDay();
      if (jsDay === 0) return 6;
      return jsDay - 1;
    };

    const toSourceKey = (src?: string | null): 'website' | 'facebook' | 'whatsapp' | null => {
      if (!src) return null;
      const s = src.toLowerCase().trim();
      if (s.includes('web')) return 'website';
      if (s.includes('fb') || s.includes('face')) return 'facebook';
      if (s.includes('whatsapp') || s.includes('wa')) return 'whatsapp';
      return null;
    };

    for (const lead of this.leads) {
      const dayIndex = getDayIndex((lead as any).irLeadDtime);
      const key = toSourceKey((lead as any).irLeadSource);
      if (dayIndex === null || key === null) continue;
      this.barData[dayIndex][key] += 1;
    }

    let max = 1;
    for (const row of this.barData) {
      max = Math.max(max, row.website, row.facebook, row.whatsapp);
    }
    this.barMax = max;
  }

  barHeight(value: number): string {
    if (!value) return '0%';
    const max = this.barMax || 1;
    let percent = (value / max) * 100;
    if (percent < 10) percent = 10;
    return Math.min(100, percent) + '%';
  }
}