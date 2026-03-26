// // import { Component } from '@angular/core';
// // import { RouterLink, RouterLinkActive } from '@angular/router';

// // @Component({
// //   selector: 'app-sidebar',
// //   standalone: true,
// //   imports: [RouterLink, RouterLinkActive],
// //   templateUrl: './sidebar.html',
// //   styleUrl: './sidebar.css',
// // })
// // export class SidebarComponent {}


// import { Component } from '@angular/core';
// import { RouterLink, RouterLinkActive } from '@angular/router';

// @Component({
//   selector: 'app-sidebar',
//   standalone: true,
//   imports: [RouterLink, RouterLinkActive],
//   templateUrl: './sidebar.html',
//   styleUrl: './sidebar.css',
// })
// export class SidebarComponent {}





import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
//  import { Router } from '@angular/router';


@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class SidebarComponent {
  // constructor(private router: Router) {}


constructor(private router: Router) {}

onLogout(): void {
  localStorage.removeItem('isLoggedIn');
  localStorage.removeItem('username');
  localStorage.removeItem('fullName');
  localStorage.removeItem('role');

  this.router.navigate(['/login']);
}
}