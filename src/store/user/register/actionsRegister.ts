import {UserRegister} from '../../../model/UserRegister';

export interface ActionsRegister {
  type: string;
  payload: {
    user: UserRegister;
    step: number;
    valid: boolean;
  };
}

export const validForm = 'validForm';
export const concatData = 'concatData';
