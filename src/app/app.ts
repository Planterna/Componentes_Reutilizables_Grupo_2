import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref, RouterLinkActive } from '@angular/router';
import { UpperCasePipe } from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UpperCasePipe, RouterLinkWithHref, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  title = signal('componentes uwu reutilizables grupo2');
  notifications = signal(true);
  change() {
    this.notifications.set(false);
  }
}
