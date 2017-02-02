import { ActionReducer, Action } from '@ngrx/store';

import { Category } from '../../models';
import { Task } from '../../models';
import { tasks } from './tasks.reducer';

export const categories: ActionReducer<Category[]> = (
    state: Category[] = [], action: Action) => {
  switch (action.type) {
    case 'COMPLETE_TASK':
      return getUpdatedCategoriesState(state, action,
          (currCat: Category): {} => {
        return getCategoryProgress(
          tasks(currCat.tasks, {
            type: action.type,
            payload: { index: action.payload.taskIndex }
          })
        );
      });
    case 'REMOVE_TASK':
      return getUpdatedCategoriesState(state, action,
          (currCat: Category): {} => {
        return getCategoryProgress(
          tasks(currCat.tasks, {
            type: action.type,
            payload: { index: action.payload.taskIndex }
          })
        );
      });
    case 'ADD_TASK':
      return getUpdatedCategoriesState(state, action,
          (currCat: Category): {} => {
        return getCategoryProgress(
          tasks(currCat.tasks, {
            type: action.type,
            payload: { taskDescr: action.payload.taskDescr }
          })
        );
      });
    case 'EDIT_TASK':
      return getUpdatedCategoriesState(state, action,
          (currCat: Category): {} => {
        return {
          tasks: tasks(currCat.tasks, {
            type: action.type,
            payload: {
              taskIndex: action.payload.taskIndex,
              taskDescr: action.payload.taskDescr
            }
          })
        };
      });
    default:
      return state;
  }
};

function getUpdatedCategoriesState(
    prevState: Category[],
    action: Action,
    getUpdatedPropsHandler: Function) {
  const index = prevState.findIndex((cat) => {
    return cat.id === action.payload.categoryId;
  });
  const currCat = prevState[index];

  return [
    ...prevState.slice(0, index),
    Object.assign({}, currCat, getUpdatedPropsHandler(currCat)),
    ...prevState.slice(index + 1)
  ];
}

function getCategoryProgress(updatedTasks: Task[]) {
  return {
    tasks: updatedTasks,
    completed: updatedTasks.every((task) => task.completed),
    percentage: updatedTasks.reduce((acc, curr, index, array) => {
      acc = curr.completed ? acc + 1 : acc;
      // Return completion percentage when iterating over last item.
      if (index === array.length - 1) {
        return Math.round(acc / array.length * 100);
      }
      return acc;
    }, 0)
  };
}
