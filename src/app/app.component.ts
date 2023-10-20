import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Portada', url: '/portada', icon: 'mail' },
    { title: 'Personajes', url: '/personajes', icon: 'people' },
    { title: 'Momentos', url: '/momentos', icon: 'book' },
    { title: 'Acerca de', url: '/acerca-de', icon: 'extension-puzzle' },
    { title: 'En mi vida', url: '/en-mi-vida', icon: 'body' },
    { title: 'Contratame', url: '/contratame', icon: 'person-add' },
    
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
