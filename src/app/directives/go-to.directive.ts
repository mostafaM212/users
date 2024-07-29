import { Directive, HostListener, inject, input } from '@angular/core';
import { Router } from '@angular/router';

@Directive({
  selector: '[appGoTo]',
  standalone: true
})
export class GoToDirective {

  goTo = input<string>('/')
  router = inject(Router)

  @HostListener('click')
  goToUsers() {
    console.log('🔥', this.goTo());
    this.router.navigateByUrl(this.goTo())
  }

}
