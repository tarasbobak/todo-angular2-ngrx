import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CategoryDetailComponent, HomeComponent, TaskModifyComponent,
    TaskModifyResolve } from './';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent,
        children: [
          {
            path: 'category/:id',
            component: CategoryDetailComponent,
            children: [
              {
                path: 'task/new',
                component: TaskModifyComponent,
                data: { operationType: 'adding' },
                resolve: {
                  selCategory: TaskModifyResolve
                }
              },
              {
                path: 'task/edit/:id',
                component: TaskModifyComponent,
                data: { operationType: 'editing'},
                resolve: {
                  selCategory: TaskModifyResolve
                }
              }
            ]
          },
        ]
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class HomeRoutingModule { }
