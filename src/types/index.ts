export interface IAction {
  type: string;
  payload: any;
}

export interface IComments {
  comments: string[];
  currentlyTyped: string;
  isLoading: boolean;
}
