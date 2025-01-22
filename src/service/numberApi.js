import axios from "axios";

/**
 * Fetches a number fact for a given day and month from the Numbers API.
 *
 * @param {string} day - The day of the month (in `DD` format).
 * @param {string} month - The month (in `MM` format).
 * @returns {Promise<Object>} A promise that resolves to the response from the Numbers API containing the fact for the specified date.
 * @throws {Error} Throws an error if the API request fails.
 *
 * @example
 * const day = '23';
 * const month = '01';
 * numberApi(day, month)
 *   .then(response => console.log(response))
 *   .catch(error => console.error(error));
 */
export const numberApi = async (day, month) => {
    try {
        const response = await axios.get(`http://numbersapi.com/${month}/${day}/date`);
        return response;
    } catch (error) {
        throw new Error('Failed to fetch stories', error);
    }
}
