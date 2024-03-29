import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    // { title: 'Inbox', url: '/folder/Inbox', icon: 'mail' },
    // { title: 'Outbox', url: '/folder/Outbox', icon: 'paper-plane' },
    // { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
    // { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
    // { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Sumadora', url: '/sumadora', icon: 'add' },
    { title: 'Traductor de numeros', url: '/traductor', icon: 'language' },
    { title: 'Tabla', url: '/tabla', icon: 'calculator' },
    { title: 'Video', url: '/video', icon: 'videocam' },
  ];
  // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
