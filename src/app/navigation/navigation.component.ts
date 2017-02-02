import { Component } from '@angular/core';

@Component({
  selector: 'ea-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})

export class NavigationComponent {
  private routes = [
    { link: '/home', icon: 'glyphicon glyphicon-home', label: 'Home'},
    { link: '/settings', icon: 'glyphicon glyphicon-cog', label: 'Settings' },
    { link: '/profile', icon: 'glyphicon glyphicon-user', label: 'Profile' }
  ];
}
