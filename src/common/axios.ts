import baseAxios from 'axios';
import moment from 'moment';

// Create an Axios instance
const axios = baseAxios.create({
    baseURL: 'https://localhost:7081/api/', // Replace with your base URL
});
// Add a response interceptor
axios.interceptors.response.use(
    (response: any) => {
        if (response.data && response.data.Success) {
            response.data = parseDates(response.data);
        }
        return response.data;
    },
    (error: any) => {
        // Handle response error
        return Promise.reject(error);
    }
);

// Helper function to parse dates in the response data
function parseDates(data: { [x: string]: any; hasOwnProperty: (arg0: string) => any; }) {
    // Recursively traverse the response data to find and parse date strings
    for (const key in data) {
        // eslint-disable-next-line no-prototype-builtins
        if (data.hasOwnProperty(key)) {
            if (typeof data[key] === 'string') {
                // Attempt to parse date strings using moment
                const parsedDate = moment(data[key]);
                if (parsedDate.isValid()) {
                    data[key] = parsedDate.toDate();
                }
            } else if (typeof data[key] === 'object') {
                // Recurse into nested objects or arrays
                data[key] = parseDates(data[key]);
            }
        }
    }
    return data;
}

export default axios;