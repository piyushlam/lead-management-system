
// import { Component, OnDestroy, OnInit, Inject } from '@angular/core';
// import { CommonModule, isPlatformBrowser } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { LeadService, LeadSummary } from '../../services/lead.service';
// import { PLATFORM_ID } from '@angular/core';
// import { Router, NavigationEnd } from '@angular/router';
// import { Subscription } from 'rxjs';

// interface UiNotification {
//   id: number;
//   text: string;
//   time: string;
// }

// @Component({
//   selector: 'app-topbar',
//   standalone: true,
//   imports: [CommonModule, FormsModule],
//   templateUrl: './topbar.html',
//   styleUrl: './topbar.css',
// })
// export class TopbarComponent implements OnInit, OnDestroy {
//   selectedCountry = 'India';
//   selectedLanguage = 'English (India)';

//   // Dynamic user
//   userName = 'User';
//   userInitial = 'U';

//   notificationCount = 1;
//   showNotifPanel = false;

//   notifications: UiNotification[] = [];
//   private lastTotalLeads = 0;
//   private pollTimer: any;

//   private navSub?: Subscription;

//   constructor(
//     private leadService: LeadService,
//     private router: Router,
//     @Inject(PLATFORM_ID) private platformId: Object
//   ) {}

//   ngOnInit(): void {
//     //  load user once
//     this.loadUserFromStorage();

//     //  update user whenever navigation happens (login -> dashboard)
//     this.navSub = this.router.events.subscribe((e) => {
//       if (e instanceof NavigationEnd) {
//         this.loadUserFromStorage();
//       }
//     });

//     // notifications baseline + polling
//     this.refreshNotificationsBaseline();
//     this.pollTimer = setInterval(() => this.checkForNewLeads(), 15000);
//   }

//   ngOnDestroy(): void {
//     if (this.pollTimer) clearInterval(this.pollTimer);
//     if (this.navSub) this.navSub.unsubscribe();
//   }

//   private loadUserFromStorage(): void {
//     if (!isPlatformBrowser(this.platformId)) return;

//     const fullName = (localStorage.getItem('fullName') || '').trim();
//     const username = (localStorage.getItem('username') || '').trim();

//     const displayName = fullName || username || 'User';
//     this.userName = displayName;

//     // Initial = first letter
//     this.userInitial = (displayName[0] || 'U').toUpperCase();
//   }

//   toggleNotifications(): void {
//     this.showNotifPanel = !this.showNotifPanel;
//     if (this.showNotifPanel) this.notificationCount = 0;
//   }

//   closeNotifications(): void {
//     this.showNotifPanel = false;
//   }

//   private refreshNotificationsBaseline(): void {
//     this.leadService.getSummary().subscribe({
//       next: (s: LeadSummary) => (this.lastTotalLeads = s.total ?? 0),
//       error: (err) => console.error(' Summary error (baseline)', err),
//     });
//   }

//   private checkForNewLeads(): void {
//     this.leadService.getSummary().subscribe({
//       next: (s: LeadSummary) => {
//         const currentTotal = s.total ?? 0;

//         if (currentTotal > this.lastTotalLeads) {
//           const diff = currentTotal - this.lastTotalLeads;
//           this.notificationCount += diff;

//           this.notifications.unshift({
//             id: Date.now(),
//             text: `${diff} new lead(s) added`,
//             time: new Date().toLocaleTimeString([], {
//               hour: '2-digit',
//               minute: '2-digit',
//             }),
//           });

//           if (this.notifications.length > 6) {
//             this.notifications = this.notifications.slice(0, 6);
//           }
//         }

//         this.lastTotalLeads = currentTotal;
//       },
//       error: (err) => console.error(' Summary error (poll)', err),
//     });
//   }

//   clearAllNotifications(): void {
//     this.notifications = [];
//     this.notificationCount = 0;
//     this.showNotifPanel = false;
//   }
// }




import { Component, OnDestroy, OnInit, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LeadService, LeadSummary } from '../../services/lead.service';
import { PLATFORM_ID } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

interface UiNotification {
  id: number;
  text: string;
  time: string;
}

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './topbar.html',
  styleUrl: './topbar.css',
})
export class TopbarComponent implements OnInit, OnDestroy {
  selectedCountry = 'India';
  selectedLanguage = 'en';

  userName = 'User';
  userInitial = 'U';

  notificationCount = 1;
  showNotifPanel = false;

  notifications: UiNotification[] = [];
  private lastTotalLeads = 0;
  private pollTimer: any;

  private navSub?: Subscription;

  constructor(
    private leadService: LeadService,
    private router: Router,
    private translate: TranslateService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const savedLang = localStorage.getItem('app_lang') || 'en';
      this.selectedLanguage = savedLang;
      this.translate.use(savedLang === 'en-us' ? 'en' : savedLang);
      document.documentElement.dir = savedLang === 'ar' ? 'rtl' : 'ltr';
    } else {
      this.translate.use('en');
    }

    this.loadUserFromStorage();

    this.navSub = this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        this.loadUserFromStorage();
      }
    });

    this.refreshNotificationsBaseline();
    this.pollTimer = setInterval(() => this.checkForNewLeads(), 15000);
  }

  ngOnDestroy(): void {
    if (this.pollTimer) clearInterval(this.pollTimer);
    if (this.navSub) this.navSub.unsubscribe();
  }

  changeLanguage(lang: string): void {
    const finalLang = lang === 'en-us' ? 'en' : lang;

    this.selectedLanguage = lang;
    this.translate.use(finalLang);

    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('app_lang', lang);
      document.documentElement.dir = finalLang === 'ar' ? 'rtl' : 'ltr';
    }
  }

  private loadUserFromStorage(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const fullName = (localStorage.getItem('fullName') || '').trim();
    const username = (localStorage.getItem('username') || '').trim();

    const displayName = fullName || username || 'User';
    this.userName = displayName;
    this.userInitial = (displayName[0] || 'U').toUpperCase();
  }

  toggleNotifications(): void {
    this.showNotifPanel = !this.showNotifPanel;
    if (this.showNotifPanel) this.notificationCount = 0;
  }

  closeNotifications(): void {
    this.showNotifPanel = false;
  }

  private refreshNotificationsBaseline(): void {
    this.leadService.getSummary().subscribe({
      next: (s: LeadSummary) => (this.lastTotalLeads = s.total ?? 0),
      error: (err) => console.error('Summary error (baseline)', err),
    });
  }

  private checkForNewLeads(): void {
    this.leadService.getSummary().subscribe({
      next: (s: LeadSummary) => {
        const currentTotal = s.total ?? 0;

        if (currentTotal > this.lastTotalLeads) {
          const diff = currentTotal - this.lastTotalLeads;
          this.notificationCount += diff;

          this.notifications.unshift({
            id: Date.now(),
            text: `${diff} new lead(s) added`,
            time: new Date().toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
            }),
          });

          if (this.notifications.length > 6) {
            this.notifications = this.notifications.slice(0, 6);
          }
        }

        this.lastTotalLeads = currentTotal;
      },
      error: (err) => console.error('Summary error (poll)', err),
    });
  }

  clearAllNotifications(): void {
    this.notifications = [];
    this.notificationCount = 0;
    this.showNotifPanel = false;
  }
}