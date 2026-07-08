function baseSettings(): Intl.DateTimeFormatOptions {
  return {
    hour12: false,
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  };
}

export interface TimeOptions {
  hideDay?: boolean;
  hideMonth?: boolean;
  hideYear?: boolean;
  hideHour?: boolean;
  hideMinute?: boolean;
  hideSecond?: boolean;
}

function parseOptions(options?: TimeOptions): TimeOptions {
  const newOptions: TimeOptions = { ...options };
  if (options?.hideDay === undefined) newOptions.hideDay = false;
  if (options?.hideMonth === undefined) newOptions.hideMonth = false;
  if (options?.hideYear === undefined) newOptions.hideYear = false;
  if (options?.hideHour === undefined) newOptions.hideHour = false;
  if (options?.hideMinute === undefined) newOptions.hideMinute = false;
  if (options?.hideSecond === undefined) newOptions.hideSecond = false;
  return newOptions;
}

function parseSettings(options: TimeOptions): Intl.DateTimeFormatOptions {
  const settings = baseSettings();
  if (options.hideDay) delete settings.day;
  if (options.hideMonth) delete settings.month;
  if (options.hideYear) delete settings.year;
  if (options.hideHour) delete settings.hour;
  if (options.hideMinute) delete settings.minute;
  if (options.hideSecond) delete settings.second;
  return settings;
}

export function getUserTime(date: Date = new Date(), options?: TimeOptions) {
  return new Intl.DateTimeFormat('en-US', parseSettings(parseOptions(options))).format(date);
}

export function getKathundTime(date: Date = new Date(), options?: TimeOptions) {
  return new Intl.DateTimeFormat('en-US', {
    ...parseSettings(parseOptions(options)),
    timeZone: 'Australia/Perth'
  }).format(date);
}
