import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 25207,
  login: 'D7',
};

export const sampleWithPartialData: IUser = {
  id: 20381,
  login: '60',
};

export const sampleWithFullData: IUser = {
  id: 7976,
  login: '&FQq@JGL3\\^f1\\xMyx4\\CUudZMf\\f0hmO',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
