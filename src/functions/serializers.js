import { format, set } from 'date-fns';

export const serializeEvent = event => {
  if (event === null) {
    return null;
  }
  let start = new Date(event.start);
  let end = new Date(event.end);
  if (!event.timed) {
    start = set(start, { hours: 0, minutes: 0, seconds: 0 });
    end = set(end, { hours: 23, minutes: 59, seconds: 59 });
  }
  return {
    ...event,
    start,
    end,
    startDate: format(start, 'yyyy/MM/dd'),
    startTime: format(start, 'HH:mm'),
    endDate: format(end, 'yyyy/MM/dd'),
    endTime: format(end, 'HH:mm'),
    color: event.color || '#2196F3',
  };
};

export const serializeCalendar = calendar => {
    if (calendar === null) {
      return null;
    }
    return {
      ...calendar,
      color: calendar.color || '#2196F3',
    };
  };
