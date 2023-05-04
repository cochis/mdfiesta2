import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { FunctionsService } from 'src/app/services/functions.service'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  menu = [
    {
      id: 0,
      name: 'Inicio',
      url: '/inicio',
      icon: 'dad',
      active: false,
    },
    {
      id: 1,
      name: 'Conocenos',
      url: '/conocenos',

      icon: 'dad',
      active: false,
    },
    {
      id: 2,
      name: 'Login',
      url: '/login',
      icon: 'dad',
      active: false,
    },
  ]
  headerHome: boolean = false
  promoActive: boolean = false

  constructor(
    private functionsService: FunctionsService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    if (this.router.url === '/conocenos') {
      this.headerHome = true
    } else {
      this.headerHome = false
    }
    let current: string = this.functionsService.currentUrl()
    for (let i = 0; i < this.menu.length; i++) {
      if (this.menu[i].url === current) {
        this.menu[i].active = true
      } else {
        this.menu[i].active = false
      }
    }
    const burger = document.querySelector('.burger-menu svg')
    burger?.addEventListener('click', function () {
      const menuPrincipal = document.querySelector('.menu-principal')

      menuPrincipal?.classList.toggle('mostrar')
      console.log('menuPrincipal', menuPrincipal)
    })
  }

  navigateTo(route: string) {
    this.functionsService.navigate(route)
  }
}
