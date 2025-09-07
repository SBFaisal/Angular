import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet, Router  } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterOutlet],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  user={
    username:'',
    password:''
  }
  
  router=inject(Router);
  login()
  {
    if(this.user.username=='admin' && this.user.password=='admin')
    {
      localStorage.setItem('loggedInUser', this.user.username)
      this.router.navigateByUrl('data-binding')
    }
    else
    {
      alert("Invalid Credentials");
    }
  }
}
