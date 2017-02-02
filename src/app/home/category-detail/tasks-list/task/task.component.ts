import { Component, ChangeDetectionStrategy, Input, Output,
    EventEmitter } from '@angular/core';

import { Task } from '../../../../core/models';

@Component({
  selector: 'ea-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class TaskComponent {
  @Input() public task: Task;
  @Output() public completed = new EventEmitter();
  @Output() public removed = new EventEmitter();

  public onDoneClick() {
    this.completed.emit();
  }

  public onRemoveClick() {
    this.removed.emit();
  }
}
