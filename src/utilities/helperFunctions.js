import { format } from 'date-fns';

export function convertDateToString(date) {
  return date instanceof Date ? format(date, 'MMM yyyy') : date;
}

export function returnDate(date) {
  return date instanceof Date ? date : new Date();
}
