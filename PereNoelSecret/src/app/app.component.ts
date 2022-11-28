import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from './Services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'EGestion';
  authenticatedSubscription : Subscription = <Subscription>{};
  isLogged : boolean = this.authService.authenticated;
  displaySideBar : boolean = false;

  constructor(private authService : AuthService) {
    this.authenticatedSubscription = this.authService.authenticatedSubject.subscribe((authenticated : boolean)=>{
      this.isLogged = authenticated;
    });
  }

    ngOnInit() {
      this.isLogged = this.authService.isAuthenticated();
    }

    login(){

    }
    logout(){
      this.authService.logout();
      this.isLogged = this.authService.isAuthenticated();
    }


    ngOnDestroy() {
      this.authenticatedSubscription.unsubscribe();
    }
}
