import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { HomeService } from '../../home.service';
import { Category } from '../../../core/models';

@Component({
  selector: 'ea-tasks-list',
  templateUrl: './tasks-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class TasksListComponent {
  @Input() public currCategory: Category;

  constructor(
    private homeService: HomeService,
    private route: ActivatedRoute,
    private router: Router) {}

  public onTaskCompletion(taskIndex: number) {
    this.homeService.completeTask(this.currCategory['id'], taskIndex);
  }

  public onTaskRemoved(taskIndex: number) {
    this.homeService.removeTask(this.currCategory['id'], taskIndex);
  }

  public initTaskEditing(taskIndex: number) {
    this.router.navigate(['task/edit/', taskIndex], { relativeTo: this.route });
  }
}
