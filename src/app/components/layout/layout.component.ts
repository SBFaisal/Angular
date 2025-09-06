import { Component, inject } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

  router=inject(Router);
  logout()
  {
    localStorage.removeItem('loggedInUser');
    this.router.navigateByUrl('login');
  }
}
