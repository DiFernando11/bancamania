import { addMinutes } from "date-fns";

interface AddMinutesToDate {
  date?: Date;
  minutes: number;
}

export function addMinutesToDate({ date, minutes }: AddMinutesToDate): Date {
  const currentDate: Date = date ?? new Date();
  return addMinutes(currentDate, minutes);
}
