export const getStarRating = (value: number) => {
  return Math.floor((value * 100) / 5)
}

export const parseDate = (value: string) => {
  const locale = "en-US";
  const date = new Date(value);
  return {
    year: date.toLocaleString(locale, {year: 'numeric'}),
    month: date.toLocaleString(locale, {month: '2-digit'}),
    longMonth: date.toLocaleString(locale, {month: 'long'}),
    day: date.toLocaleString(locale, {day: 'numeric'}),
  }
}
