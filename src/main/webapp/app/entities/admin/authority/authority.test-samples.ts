import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '0016599e-56cf-40d9-a077-236b805b91d4',
};

export const sampleWithPartialData: IAuthority = {
  name: '079e21b4-0aeb-40ba-b699-4c358de442bf',
};

export const sampleWithFullData: IAuthority = {
  name: '9dfcec01-71b3-4fba-9b63-00e453383b1f',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
