/**
 * Method to convert give Date string to localeDateString.
 * @param pDateStr Date string passed.
 * @return Date Locate string. Example: Sunday, August 13, 2017
 */
function convertDateToLocaleString(pDateStr) {
  let lDateString = new Date(pDateStr);
  const lOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  return lDateString.toLocaleDateString('en-US', lOptions);
}

/**
 * Method to add required date ordinal to the date in string.
 * We can see which day of month it is and add required ordinal.
 * @param pLocaleDateString localDateString to be passed.
 * @return Formatted date string. Example: Sunday, August 13th, 2017
 */
function addDateOrdinal(pLocaleDateString) {
  let lSplitDateLiterals = pLocaleDateString.split(',');
  const lSplitMonthDate = lSplitDateLiterals[1].split(' ');
  lSplitDateLiterals[1] = lSplitDateLiterals[1]+(
    lSplitMonthDate[1] === '1' || lSplitMonthDate[1] === '21' ||
    lSplitMonthDate[1] === '31' ? 'st' :
    lSplitMonthDate[1] === '2' || lSplitMonthDate[1] === '22' ? 'nd' :
    lSplitMonthDate[1] === '3' || lSplitMonthDate[1] === '23' ? 'rd' : 'th'
  );
  return lSplitDateLiterals.join(', ');
}

/**
 * Method to get today's date. We would format the date too and send.
 * @return Today's date which would also be formatted.
 * @see convertDateToLocaleString()
 * @see addDateOrdinal()
 */
export function getTodayDate() {
  let lTodayDate = new Date();
  return addDateOrdinal(convertDateToLocaleString(lTodayDate));
}

/**
 * Method to get date formatted.
 * @param pDateStringToFormat Date string to be formatted.
 * @return Today's date which would also be formatted.
 * @see convertDateToLocaleString()
 * @see addDateOrdinal()
 */
export function getFormattedDate(pDateStringToFormat) {
  return addDateOrdinal(convertDateToLocaleString(pDateStringToFormat));
}

/**
 * Method to verify if given date string matches today's date.
 * @param pDateString Date string to be matched.
 * @return 'true' if matched else false
 */
export function isTodaysDate(pDateString) {
  const lTodaysDate = new Date();
  const lDateToCompare = new Date(pDateString);
  return (
    lTodaysDate.getDate() + lTodaysDate.getMonth() +
    lTodaysDate.getFullYear()) === (lDateToCompare.getDate() +
    lDateToCompare.getMonth() + lDateToCompare.getFullYear()
  );
}
