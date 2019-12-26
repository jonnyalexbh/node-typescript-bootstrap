import rp, { RequestPromise } from 'request-promise';
import config from '../../config';

const { baseUrl } = config.todos;

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export const getAllTodos = (): RequestPromise<Todo[]> => rp({ uri: `${baseUrl}/todos`, json: true });

export default {
  getAllTodos
};
