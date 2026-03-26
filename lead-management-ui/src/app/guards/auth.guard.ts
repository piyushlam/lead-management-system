import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';

export const authGuard: CanActivateFn = () => {
  const router = inject(Router);
  const platformId = inject(PLATFORM_ID);

  // ✅ SSR (server) pe dashboard render nahi karna: always go login
  if (!isPlatformBrowser(platformId)) {
    return router.parseUrl('/login');
  }

  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  return isLoggedIn ? true : router.parseUrl('/login');
};