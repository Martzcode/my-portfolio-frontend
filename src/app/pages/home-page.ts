import { Component } from '@angular/core';
import { Home } from '../components/home/home';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [Home],
  template: `<app-home />`,
})
export class HomePage {}
