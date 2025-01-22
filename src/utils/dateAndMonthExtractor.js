/**
 * Extracts the month and day from a given date and returns them in a formatted object.
 *
 * @param {Date} date - The Date object from which the month and day will be extracted.
 * @returns {Object} An object containing the formatted month and day.
 * @returns {string} return.month - The month in `MM` format.
 * @returns {string} return.day - The day in `DD` format.
 *
 * @example
 * const date = new Date('2025-01-23');
 * const result = dateAndMonthExtractor(date);
 * console.log(result); // { month: '01', day: '23' }
 */
export const dateAndMonthExtractor = (date) => {
    const formattedMonth = (date.getMonth() + 1).toString().padStart(2, '0');
    const formattedDay = date.getDate().toString().padStart(2, '0');
    return { month: formattedMonth, day: formattedDay }
}
