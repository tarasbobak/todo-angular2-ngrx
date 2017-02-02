import { Component, ChangeDetectionStrategy, OnInit,
    OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { HomeService } from '../../home.service';
import { Category } from '../../../core/models';

@Component({
  templateUrl: './task-modify.component.html',
  styleUrls: ['./task-modify.component.scss']
})

export class TaskModifyComponent implements OnInit, OnDestroy {
  public editingMode: boolean;
  public taskDescr: string = '';
  private taskIndex: number;
  private selCategory: Category;
  private sub: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private homeService: HomeService) {}

  public ngOnInit() {
    this.editingMode = this.route.snapshot.data['operationType'] === 'editing';
    this.selCategory = this.route.snapshot.data['selCategory'];

    this.sub = this.route.params.subscribe((param) => {
      this.taskIndex = parseInt(param['id'], 10);

      if (this.route.snapshot.data['operationType'] === 'editing') {
        this.taskDescr = this.selCategory.tasks[this.taskIndex].value;
      }
    });
  }

  public onSubmit(form) {
    if (this.editingMode) {
      this.homeService.editTask(this.selCategory.id, this.taskIndex,
          form.value.description);
    } else {
      this.homeService.addTask(this.selCategory.id, form.value.description);
    }
    this.closeForm();
  }

  public onCancelClick(event) {
    event.preventDefault();
    this.closeForm();
  }

  public ngOnDestroy() {
    this.sub.unsubscribe();
  }

  private closeForm() {
    this.router.navigate(['/home/category', this.selCategory.id]);
  }
}
