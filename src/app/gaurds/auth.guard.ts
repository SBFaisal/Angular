import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const loginUser = localStorage.getItem('loggedInUser')
  const router = inject(Router);
  if(loginUser != null)
  {
    return true;
  }
  router.navigateByUrl('login');
  return false;
};

