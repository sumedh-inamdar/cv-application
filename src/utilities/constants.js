const month = {
  0: 'Jan',
  1: 'Feb',
  2: 'Mar',
  3: 'Apr',
  4: 'May',
  5: 'June',
  6: 'July',
  7: 'Aug',
  8: 'Sept',
  9: 'Oct',
  10: 'Nov',
  11: 'Dec'
};
export function getMonthText(monthNum) {
  return month[monthNum];
}
export function getMonthNum(monthText) {
  return Object.values(month).indexOf(monthText);
}
