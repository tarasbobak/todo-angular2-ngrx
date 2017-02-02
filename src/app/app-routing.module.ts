import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

const appRoutes: Routes = [
  { path: 'home', loadChildren: 'app/home/home.module#HomeModule' },
  {
    path: 'settings',
    loadChildren: 'app/settings/settings.module#SettingsModule'
  },
  { path: 'profile', loadChildren: 'app/profile/profile.module#ProfileModule' },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { useHash: true,
        preloadingStrategy: PreloadAllModules })
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
