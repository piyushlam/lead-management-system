// import { Routes } from '@angular/router';
// import { LoginComponent } from './pages/login/login';
// import { DashboardComponent } from './pages/dashboard/dashboard';
// //import { LayoutComponent } from './layout/layout';
// import { LayoutComponent } from './layout/layout/layout';
// import { LeadsComponent } from './pages/leads/leads';



// export const routes: Routes = [
//   { path: '', component: LoginComponent },
//   {
//     path: '',
//     component: LayoutComponent,
//     children: [
//       { path: 'dashboard', component: DashboardComponent },
//        { path: 'leads', component: LeadsComponent }, // 👈 yeh line
//       // next: leads, add-lead
//     ],
//   },
//   { path: '**', redirectTo: '' },
// ];



import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login';
import { DashboardComponent } from './pages/dashboard/dashboard';
import { LayoutComponent } from './layout/layout/layout';
import { LeadsComponent } from './pages/leads/leads';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  // ✅ Login route
  { path: 'login', component: LoginComponent },

  // ✅ Protected routes under layout
  {
    path: '',
    component: LayoutComponent,
    canActivate: [authGuard], // ✅ protect all children
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'leads', component: LeadsComponent },

      // ✅ default after login
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    ],
  },

  // ✅ fallback
  { path: '**', redirectTo: 'login' },
];