// // // // import { Component } from '@angular/core';

// // // // @Component({
// // // //   selector: 'app-login',
// // // //   standalone: true,
// // // //   templateUrl: './login.html',
// // // //   styleUrl: './login.css',
// // // // })
// // // // export class LoginComponent {}



// // // import { Component } from '@angular/core';
// // // import { CommonModule } from '@angular/common';

// // // @Component({
// // //   selector: 'app-login',
// // //   standalone: true,
// // //   imports: [CommonModule],  // Removed RouterLink since it's not being used
// // //   templateUrl: './login.html',
// // //   styleUrls: ['./login.css']
// // // })
// // // export class LoginComponent {
  
// // //   onLogin(): void {
// // //     // Add your authentication logic here
// // //     console.log('Login button clicked');
// // //   }
// // // }




// // import { Component, OnInit, OnDestroy } from '@angular/core';
// // import { CommonModule } from '@angular/common';

// // @Component({
// //   selector: 'app-login',
// //   standalone: true,
// //   imports: [CommonModule],
// //   templateUrl: './login.html',
// //   styleUrls: ['./login.css']
// // })
// // export class LoginComponent implements OnInit, OnDestroy {
// //   currentTime: string = '';
// //   currentDate: string = '';
// //   private timerInterval: any;

// //   ngOnInit(): void {
// //     this.updateDateTime();
// //     // Update every second
// //     this.timerInterval = setInterval(() => {
// //       this.updateDateTime();
// //     }, 1000);
// //   }

// //   ngOnDestroy(): void {
// //     if (this.timerInterval) {
// //       clearInterval(this.timerInterval);
// //     }
// //   }

// //   private updateDateTime(): void {
// //     const now = new Date();
    
// //     // Format time: 2:43 PM (with leading zero for minutes if needed)
// //     let hours = now.getHours();
// //     const minutes = now.getMinutes().toString().padStart(2, '0');
// //     const ampm = hours >= 12 ? 'PM' : 'AM';
// //     hours = hours % 12;
// //     hours = hours ? hours : 12; // the hour '0' should be '12'
// //     this.currentTime = `${hours}:${minutes} ${ampm}`;
    
// //     // Format date: 11-Feb-26
// //     const day = now.getDate().toString().padStart(2, '0');
// //     const month = now.toLocaleString('default', { month: 'short' });
// //     const year = now.getFullYear().toString().slice(-2);
// //     this.currentDate = `${day}-${month}-${year}`;
// //   }

// //   onLogin(): void {
// //     // Add your authentication logic here
// //     console.log('Login button clicked');
// //   }
// // }







// import { Component, OnInit, OnDestroy } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { HttpClient } from '@angular/common/http';
// import { Router } from '@angular/router';

// type ToastType = 'success' | 'error';

// @Component({
//   selector: 'app-login',
//   standalone: true,
//   imports: [CommonModule, FormsModule],
//   templateUrl: './login.html',
//   styleUrls: ['./login.css'],
// })
// export class LoginComponent implements OnInit, OnDestroy {
//   currentTime: string = '';
//   currentDate: string = '';
//   private timerInterval: any;

//   // ✅ form fields
//   username: string = '';
//   password: string = '';
//   captchaInput: string = '';

//   // ✅ captcha display (simple)
//   captchaValue: string = '4525'; // you can change later to random

//   // ✅ UI states
//   loading = false;
//   errorMsg = '';

//   // ✅ toast
//   showToast = false;
//   toastText = '';
//   toastType: ToastType = 'success';
//   private toastTimer: any;

//   // ✅ backend URL
//   private readonly authUrl = 'http://localhost:8082/api/auth/login';

//   constructor(private http: HttpClient, private router: Router) {}

//   ngOnInit(): void {
//     this.updateDateTime();
//     this.timerInterval = setInterval(() => this.updateDateTime(), 1000);
//   }

//   ngOnDestroy(): void {
//     if (this.timerInterval) clearInterval(this.timerInterval);
//     if (this.toastTimer) clearTimeout(this.toastTimer);
//   }

//   private updateDateTime(): void {
//     const now = new Date();

//     let hours = now.getHours();
//     const minutes = now.getMinutes().toString().padStart(2, '0');
//     const ampm = hours >= 12 ? 'PM' : 'AM';
//     hours = hours % 12;
//     hours = hours ? hours : 12;

//     this.currentTime = `${hours}:${minutes} ${ampm}`;

//     const day = now.getDate().toString().padStart(2, '0');
//     const month = now.toLocaleString('default', { month: 'short' });
//     const year = now.getFullYear().toString().slice(-2);
//     this.currentDate = `${day}-${month}-${year}`;
//   }

//   private toast(text: string, type: ToastType = 'success'): void {
//     this.toastText = text;
//     this.toastType = type;
//     this.showToast = true;

//     if (this.toastTimer) clearTimeout(this.toastTimer);
//     this.toastTimer = setTimeout(() => {
//       this.showToast = false;
//     }, 1200);
//   }

//   onLogin(): void {
//     this.errorMsg = '';

//     // basic validations
//     if (!this.username.trim() || !this.password.trim()) {
//       this.errorMsg = 'Please enter username and password.';
//       this.toast(this.errorMsg, 'error');
//       return;
//     }

//     if (this.captchaInput.trim() !== this.captchaValue) {
//       this.errorMsg = 'Invalid captcha.';
//       this.toast(this.errorMsg, 'error');
//       return;
//     }

//     this.loading = true;

//     this.http
//       .post<any>(this.authUrl, {
//         username: this.username.trim(),
//         password: this.password,
//       })
//       .subscribe({
//         next: (res) => {
//           if (res?.success) {
//             // ✅ store session info
//             localStorage.setItem('isLoggedIn', 'true');
//             localStorage.setItem('username', res.username || this.username.trim());
//             localStorage.setItem('fullName', res.fullName || '');
//             localStorage.setItem('role', res.role || '');

//             // ✅ toast + redirect
//             this.toast('Login successfully', 'success');

//             setTimeout(() => {
//               this.router.navigate(['/dashboard']);
//             }, 900);
//           } else {
//             this.errorMsg = res?.message || 'Login failed.';
//             this.toast(this.errorMsg, 'error');
//           }
//         },
//         error: (err) => {
//           this.errorMsg =
//             err?.error?.message || 'Invalid username or password.';
//           this.toast(this.errorMsg, 'error');
//         },
//         complete: () => {
//           this.loading = false;
//         },
//       });
//   }
// }



import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { PLATFORM_ID } from '@angular/core';

type ToastType = 'success' | 'error';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
})
export class LoginComponent implements OnInit, OnDestroy {
  // time/date
  currentTime: string = '';
  currentDate: string = '';
  private timerInterval: any;

  // form fields
  username: string = '';
  password: string = '';
  captchaInput: string = '';

  // captcha
  captchaValue: string = '';

  // ui states
  loading = false;
  errorMsg = '';

  // toast (top-left)
  showToast = false;
  toastText = '';
  toastType: ToastType = 'success';
  private toastTimer: any;

  private readonly authUrl = 'https://lead-management-system-production-b5f3.up.railway.app/api/auth/login';

  constructor(
    private http: HttpClient,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    this.updateDateTime();
    this.timerInterval = setInterval(() => this.updateDateTime(), 1000);

    // captcha generate
    this.refreshCaptcha();

    // already logged in -> dashboard
    if (isPlatformBrowser(this.platformId)) {
      const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
      if (isLoggedIn) this.router.navigate(['/dashboard']);
    }
  }

  ngOnDestroy(): void {
    if (this.timerInterval) clearInterval(this.timerInterval);
    if (this.toastTimer) clearTimeout(this.toastTimer);
  }

  private updateDateTime(): void {
    const now = new Date();

    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;

    this.currentTime = `${hours}:${minutes} ${ampm}`;

    const day = now.getDate().toString().padStart(2, '0');
    const month = now.toLocaleString('default', { month: 'short' });
    const year = now.getFullYear().toString().slice(-2);
    this.currentDate = `${day}-${month}-${year}`;
  }

  private toast(text: string, type: ToastType): void {
    this.toastText = text;
    this.toastType = type;
    this.showToast = true;

    if (this.toastTimer) clearTimeout(this.toastTimer);
    this.toastTimer = setTimeout(() => {
      this.showToast = false;
    }, 1400);
  }

  refreshCaptcha(): void {
    // 4-digit captcha
    const num = Math.floor(1000 + Math.random() * 9000);
    this.captchaValue = String(num);
    this.captchaInput = '';
  }

  onLogin(): void {
    this.errorMsg = '';

    if (!this.username.trim() || !this.password.trim()) {
      this.errorMsg = 'Please enter username and password.';
      this.toast(this.errorMsg, 'error');
      return;
    }

    if (this.captchaInput.trim() !== this.captchaValue) {
      this.errorMsg = 'Invalid captcha.';
      this.toast(this.errorMsg, 'error');
      this.refreshCaptcha();
      return;
    }

    this.loading = true;

    this.http
      .post<any>(this.authUrl, {
        username: this.username.trim(),
        password: this.password,
      })
      .subscribe({
        next: (res) => {
          if (res?.success) {
            // SSR safe
            if (isPlatformBrowser(this.platformId)) {
              localStorage.setItem('isLoggedIn', 'true');
              localStorage.setItem('username', res.username || this.username.trim());
              localStorage.setItem('fullName', res.fullName || '');
              localStorage.setItem('role', res.role || '');
            }

            this.toast('Login successfully', 'success');

            setTimeout(() => {
              this.router.navigate(['/dashboard']);
            }, 900);
          } else {
            this.errorMsg = res?.message || 'Login failed.';
            this.toast(this.errorMsg, 'error');
            this.refreshCaptcha();
          }
        },
        error: (err) => {
          this.errorMsg = err?.error?.message || 'Invalid username or password.';
          this.toast(this.errorMsg, 'error');
          this.refreshCaptcha();
        },
        complete: () => {
          this.loading = false;
        },
      });
  }
}