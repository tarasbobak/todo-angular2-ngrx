import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { Category } from '../../core/models';

@Component({
  selector: 'ea-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CategoryListComponent {
  @Input() public categories: Category[] = [];
}
