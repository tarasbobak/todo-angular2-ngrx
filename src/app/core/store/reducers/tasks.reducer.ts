import { ActionReducer, Action } from '@ngrx/store';

import { Category } from '../../models';
import { Task } from '../../models';

export const tasks: ActionReducer<Task[]> = (state: Task[], action: Action) => {
  let taskIndex;

  switch (action.type) {
    case 'COMPLETE_TASK':
      taskIndex = action.payload.index;

      return [
        ...state.slice(0, taskIndex),
        Object.assign({}, state[taskIndex], { completed: true }),
        ...state.slice(taskIndex + 1)
      ];
    case 'REMOVE_TASK':
      taskIndex = action.payload.index;

      return [
        ...state.slice(0, taskIndex),
        ...state.slice(taskIndex + 1)
      ];
    case 'ADD_TASK':
      return [
        ...state,
        {
          completed: false,
          value: action.payload.taskDescr
        }
      ];
    case 'EDIT_TASK':
      return [
        ...state.slice(0, action.payload.taskIndex),
        Object.assign({}, state[action.payload.taskIndex], {
          value: action.payload.taskDescr
        }),
        ...state.slice(action.payload.taskIndex + 1),
      ]
    default:
      return state;
  }
};
