


// // // import { Component, OnInit, Inject, ChangeDetectorRef } from '@angular/core';
// // // import { CommonModule, isPlatformBrowser } from '@angular/common';
// // // import { FormsModule } from '@angular/forms';
// // // import { LeadService, Lead } from '../../services/lead.service';
// // // import { PLATFORM_ID } from '@angular/core';

// // // type LeadStatusFilter = 'ALL' | 'QUALIFIED' | 'UNQUALIFIED' | 'LOST';

// // // @Component({
// // //   selector: 'app-leads',
// // //   standalone: true,
// // //   imports: [CommonModule, FormsModule],
// // //   templateUrl: './leads.html',
// // //   styleUrl: './leads.css',
// // // })
// // // export class LeadsComponent implements OnInit {
// // //   leads: Lead[] = [];
// // //   loading = false;

// // //   searchText = '';
// // //   selectedStatus: LeadStatusFilter = 'ALL';

// // //   fromDate: string = '';
// // //   toDate: string = '';

// // //   constructor(
// // //     private leadService: LeadService,
// // //     @Inject(PLATFORM_ID) private platformId: Object,
// // //     private cdr: ChangeDetectorRef
// // //   ) {}

// // //   ngOnInit(): void {
// // //     if (!isPlatformBrowser(this.platformId)) return;

// // //     setTimeout(() => {
// // //       this.loadLeads();
// // //     }, 0);
// // //   }

// // //   loadLeads(from?: string, to?: string): void {
// // //     this.loading = true;

// // //     this.leadService.getAll({ from, to }).subscribe({
// // //       next: (data: Lead[]) => {
// // //         this.leads = data;
// // //         this.cdr.detectChanges();
// // //       },
// // //       error: (err: any) => console.error('❌ Error while fetching leads', err),
// // //       complete: () => {
// // //         this.loading = false;
// // //         this.cdr.detectChanges();
// // //       },
// // //     });
// // //   }

// // //   applyDateFilter(): void {
// // //     this.loadLeads(this.fromDate || undefined, this.toDate || undefined);
// // //   }

// // //   filteredLeads(): Lead[] {
// // //     let result = [...this.leads];

// // //     if (this.selectedStatus !== 'ALL') {
// // //       result = result.filter((l) => (l.irLeadStatus ?? '').toUpperCase() === this.selectedStatus);
// // //     }

// // //     if (this.searchText) {
// // //       const q = this.searchText.toLowerCase();
// // //       result = result.filter((l) =>
// // //         (l.irLeadId ?? '').toLowerCase().includes(q) ||
// // //         (l.irLeadName ?? '').toLowerCase().includes(q) ||
// // //         (l.irLeadContactNo ?? '').toLowerCase().includes(q) ||
// // //         (l.irLeadCity ?? '').toLowerCase().includes(q)
// // //       );
// // //     }

// // //     return result;
// // //   }

// // //   setStatusFilter(status: LeadStatusFilter): void {
// // //     this.selectedStatus = status;
// // //   }

// // //   clearFilters(): void {
// // //     this.selectedStatus = 'ALL';
// // //     this.searchText = '';
// // //     this.fromDate = '';
// // //     this.toDate = '';
// // //     this.loadLeads();
// // //   }

// // //   statusClass(status?: string): string {
// // //     if (!status) return 'badge-default';
// // //     const s = status.toUpperCase();
// // //     if (s === 'QUALIFIED') return 'badge-qualified';
// // //     if (s === 'UNQUALIFIED') return 'badge-unqualified';
// // //     if (s === 'LOST') return 'badge-lost';
// // //     return 'badge-default';
// // //   }
// // // }


// // import { Component, OnInit, Inject, ChangeDetectorRef } from '@angular/core';
// // import { CommonModule, isPlatformBrowser } from '@angular/common';
// // import { FormsModule } from '@angular/forms';
// // import { LeadService, Lead } from '../../services/lead.service';
// // import { PLATFORM_ID } from '@angular/core';

// // type LeadStatusFilter = 'ALL' | 'QUALIFIED' | 'UNQUALIFIED' | 'LOST';

// // @Component({
// //   selector: 'app-leads',
// //   standalone: true,
// //   imports: [CommonModule, FormsModule],
// //   templateUrl: './leads.html',
// //   styleUrl: './leads.css',
// // })
// // export class LeadsComponent implements OnInit {
// //   leads: Lead[] = [];
// //   loading = false;
// //   rowNumber(indexOnPage: number): number {
// //   return (this.currentPage - 1) * this.pageSize + indexOnPage + 1;
// // }

// //   searchText = '';
// //   selectedStatus: LeadStatusFilter = 'ALL';

// //   fromDate: string = '';
// //   toDate: string = '';

// //   //  Pagination
// //   pageSize = 10;
// //   currentPage = 1;

// //   constructor(
// //     private leadService: LeadService,
// //     @Inject(PLATFORM_ID) private platformId: Object,
// //     private cdr: ChangeDetectorRef
// //   ) {}

// //   ngOnInit(): void {
// //     if (!isPlatformBrowser(this.platformId)) return;

// //     setTimeout(() => {
// //       this.loadLeads();
// //     }, 0);
    
// //   }

// //   // ✅ Backend call (optional from/to)
// //   loadLeads(from?: string, to?: string): void {
// //     this.loading = true;

// //     this.leadService.getAll({ from, to }).subscribe({
// //       next: (data: Lead[]) => {
// //         console.log('📋 Leads from API:', data);
// //         this.leads = data;
// //         this.cdr.detectChanges();
// //       },
// //       error: (err: any) => {
// //         console.error('❌ Error while fetching leads', err);
// //       },
// //       complete: () => {
// //         this.loading = false;
// //         this.cdr.detectChanges();
// //       },
// //     });
// //   }

// //   //  Apply date filter (call backend)
// //   applyDateFilter(): void {
// //     this.currentPage = 1;
// //     this.loadLeads(this.fromDate || undefined, this.toDate || undefined);
// //   }

// //   //  Front-end filter: status + search
// //   filteredLeads(): Lead[] {
// //     let result = [...this.leads];

// //     // 1) Status filter
// //     if (this.selectedStatus !== 'ALL') {
// //       result = result.filter(
// //         (l) => (l.irLeadStatus ?? '').toUpperCase() === this.selectedStatus
// //       );
// //     }

// //     // 2) Search filter
// //     if (this.searchText) {
// //       const q = this.searchText.toLowerCase();
// //       result = result.filter((l) => {
// //         return (
// //           (l.irLeadId ?? '').toLowerCase().includes(q) ||
// //           (l.irLeadName ?? '').toLowerCase().includes(q) ||
// //           (l.irLeadContactNo ?? '').toLowerCase().includes(q) ||
// //           (l.irLeadCity ?? '').toLowerCase().includes(q)
// //         );
// //       });
// //     }

// //     return result;
// //   }

// //   //  Pagination helpers
// //   get totalPages(): number {
// //     const len = this.filteredLeads().length;
// //     return Math.max(1, Math.ceil(len / this.pageSize));
// //   }

// //   pagedLeads(): Lead[] {
// //     const data = this.filteredLeads();
// //     const start = (this.currentPage - 1) * this.pageSize;
// //     return data.slice(start, start + this.pageSize);
// //   }

// //   goPrev(): void {
// //     if (this.currentPage > 1) this.currentPage--;
// //   }

// //   goNext(): void {
// //     if (this.currentPage < this.totalPages) this.currentPage++;
// //   }

// //   onPageSizeChange(): void {
// //     this.currentPage = 1;
// //   }

// //   setStatusFilter(status: LeadStatusFilter): void {
// //     this.selectedStatus = status;
// //     this.currentPage = 1;
// //   }

// //   clearFilters(): void {
// //     this.selectedStatus = 'ALL';
// //     this.searchText = '';
// //     this.fromDate = '';
// //     this.toDate = '';
// //     this.currentPage = 1;

// //     //  reload all leads (no date params)
// //     this.loadLeads();
// //   }

// //   statusClass(status?: string): string {
// //     if (!status) return 'badge-default';

// //     const s = status.toUpperCase();
// //     if (s === 'QUALIFIED') return 'badge-qualified';
// //     if (s === 'UNQUALIFIED') return 'badge-unqualified';
// //     if (s === 'LOST') return 'badge-lost';
// //     return 'badge-default';
// //   }
// // }



// import { Component, OnInit, Inject, ChangeDetectorRef } from '@angular/core';
// import { CommonModule, isPlatformBrowser } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { LeadService, Lead } from '../../services/lead.service';
// import { PLATFORM_ID } from '@angular/core';

// type LeadStatusFilter = 'ALL' | 'QUALIFIED' | 'UNQUALIFIED' | 'LOST';

// @Component({
//   selector: 'app-leads',
//   standalone: true,
//   imports: [CommonModule, FormsModule],
//   templateUrl: './leads.html',
//   styleUrl: './leads.css',
// })
// export class LeadsComponent implements OnInit {
//   leads: Lead[] = [];
//   loading = false;

//   searchText = '';
//   selectedStatus: LeadStatusFilter = 'ALL';

//   fromDate: string = '';
//   toDate: string = '';

//   // ✅ Rows visible in table (scroll inside table)
//   rowsToShow: number = 10;

//   constructor(
//     private leadService: LeadService,
//     @Inject(PLATFORM_ID) private platformId: Object,
//     private cdr: ChangeDetectorRef
//   ) {}

//   ngOnInit(): void {
//     if (!isPlatformBrowser(this.platformId)) return;

//     setTimeout(() => {
//       this.loadLeads();
//     }, 0);
//   }

//   loadLeads(from?: string, to?: string): void {
//     this.loading = true;

//     this.leadService.getAll({ from, to }).subscribe({
//       next: (data: Lead[]) => {
//         this.leads = data;
//         this.cdr.detectChanges();
//       },
//       error: (err: any) => console.error('❌ Error while fetching leads', err),
//       complete: () => {
//         this.loading = false;
//         this.cdr.detectChanges();
//       },
//     });
//   }

//   applyDateFilter(): void {
//     this.loadLeads(this.fromDate || undefined, this.toDate || undefined);
//   }

//   filteredLeads(): Lead[] {
//     let result = [...this.leads];

//     // 1) status
//     if (this.selectedStatus !== 'ALL') {
//       result = result.filter(
//         (l) => (l.irLeadStatus ?? '').toUpperCase() === this.selectedStatus
//       );
//     }

//     // 2) search
//     if (this.searchText) {
//       const q = this.searchText.toLowerCase();
//       result = result.filter((l) => {
//         return (
//           (l.irLeadId ?? '').toLowerCase().includes(q) ||
//           (l.irLeadName ?? '').toLowerCase().includes(q) ||
//           (l.irLeadContactNo ?? '').toLowerCase().includes(q) ||
//           (l.irLeadCity ?? '').toLowerCase().includes(q)
//         );
//       });
//     }

//     return result;
//   }

//   setStatusFilter(status: LeadStatusFilter): void {
//     this.selectedStatus = status;
//   }

//   clearFilters(): void {
//     this.selectedStatus = 'ALL';
//     this.searchText = '';
//     this.fromDate = '';
//     this.toDate = '';
//     this.loadLeads();
//   }

//   rowNumber(index: number): number {
//     return index + 1;
//   }

//   statusClass(status?: string): string {
//     if (!status) return 'badge-default';

//     const s = status.toUpperCase();
//     if (s === 'QUALIFIED') return 'badge-qualified';
//     if (s === 'UNQUALIFIED') return 'badge-unqualified';
//     if (s === 'LOST') return 'badge-lost';
//     return 'badge-default';
//   }
// }



import { Component, OnInit, Inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LeadService, Lead } from '../../services/lead.service';
import { PLATFORM_ID } from '@angular/core';

type LeadStatusFilter = 'ALL' | 'QUALIFIED' | 'UNQUALIFIED' | 'LOST';

@Component({
  selector: 'app-leads',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './leads.html',
  styleUrl: './leads.css',
})
export class LeadsComponent implements OnInit {
  leads: Lead[] = [];
  loading = false;

  searchText = '';
  selectedStatus: LeadStatusFilter = 'ALL';

  fromDate: string = '';
  toDate: string = '';

  // ✅ Pagination
  pageSize = 10;      // default 10/page
  currentPage = 1;

  constructor(
    private leadService: LeadService,
    @Inject(PLATFORM_ID) private platformId: Object,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    setTimeout(() => {
      this.loadLeads();
    }, 0);
  }

  loadLeads(from?: string, to?: string): void {
    this.loading = true;

    this.leadService.getAll({ from, to }).subscribe({
      next: (data: Lead[]) => {
        this.leads = data;
        this.cdr.detectChanges();
      },
      error: (err: any) => console.error('❌ Error while fetching leads', err),
      complete: () => {
        this.loading = false;
        this.cdr.detectChanges();
      },
    });
  }

  applyDateFilter(): void {
    this.currentPage = 1;
    this.loadLeads(this.fromDate || undefined, this.toDate || undefined);
  }

  clearFilters(): void {
    this.selectedStatus = 'ALL';
    this.searchText = '';
    this.fromDate = '';
    this.toDate = '';
    this.currentPage = 1;
    this.loadLeads();
  }

  setStatusFilter(status: LeadStatusFilter): void {
    this.selectedStatus = status;
    this.currentPage = 1;
  }

  onPageSizeChange(): void {
    this.currentPage = 1;
  }

  // ---- Filtering ----
  filteredLeads(): Lead[] {
    let result = [...this.leads];

    if (this.selectedStatus !== 'ALL') {
      result = result.filter(
        (l) => (l.irLeadStatus ?? '').toUpperCase() === this.selectedStatus
      );
    }

    if (this.searchText) {
      const q = this.searchText.toLowerCase();
      result = result.filter((l) =>
        (l.irLeadId ?? '').toLowerCase().includes(q) ||
        (l.irLeadName ?? '').toLowerCase().includes(q) ||
        (l.irLeadContactNo ?? '').toLowerCase().includes(q) ||
        (l.irLeadCity ?? '').toLowerCase().includes(q)
      );
    }

    return result;
  }

  // ---- Pagination ----
  get totalPages(): number {
    const len = this.filteredLeads().length;
    return Math.max(1, Math.ceil(len / this.pageSize));
  }

  pagedLeads(): Lead[] {
    const data = this.filteredLeads();
    const start = (this.currentPage - 1) * this.pageSize;
    return data.slice(start, start + this.pageSize);
  }

  goPrev(): void {
    if (this.currentPage > 1) this.currentPage--;
  }

  goNext(): void {
    if (this.currentPage < this.totalPages) this.currentPage++;
  }

  // ✅ Proper row numbering across pages
  rowNumber(indexOnPage: number): number {
    return (this.currentPage - 1) * this.pageSize + indexOnPage + 1;
  }

  statusClass(status?: string): string {
    if (!status) return 'badge-default';
    const s = status.toUpperCase();
    if (s === 'QUALIFIED') return 'badge-qualified';
    if (s === 'UNQUALIFIED') return 'badge-unqualified';
    if (s === 'LOST') return 'badge-lost';
    return 'badge-default';
  }
}