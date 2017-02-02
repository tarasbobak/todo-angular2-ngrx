import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { Category } from '../../../core/models';

@Component({
  selector: 'ea-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CategoryCardComponent {
  @Input() public category: Category;
}
