import { Injectable } from '@angular/core'
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root',
})
export class FunctionsService {
  public href: string = ''
  constructor(private router: Router) {}
  currentUrl() {
    this.href = this.router.url
    return this.href
  }
  navigate(route: string) {
    this.router.navigate([route])
  }
}
