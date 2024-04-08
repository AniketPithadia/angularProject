import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private router: Router) { }
  items: MenuItem[] | undefined;
  ngOnInit() {
    this.items = [
      {
        label: 'Home', routerLink: ['/home'],
        icon: 'pi pi-fw pi-home'
    },
    {
        label: 'Our Services', routerLink: ['/services'],
        icon: 'pi pi-fw pi-wrench'
    },
    {
        label: 'Contact Us', routerLink: ['/contactus'] ,
        icon: 'pi pi-fw pi-phone'
    },
    {
        label: 'Sign Out', command: ()=> {  sessionStorage.clear();
          this.router.navigate(['login']);},
        icon: 'pi pi-fw pi-sign-out'
    }
];
  }
}
