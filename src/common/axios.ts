import baseAxios from 'axios'
import moment from 'moment'

// Create an Axios instance
const axios = baseAxios.create({
  baseURL: 'https://localhost:7081/api/' // Replace with your base URL
})
// Add a response interceptor
axios.interceptors.response.use(
  (response: any) => {
    if (response.data && response.data.Success) {
      response.data = parseDates(response.data)
    }
    return response.data
  },
  (error: any) => {
    // Handle response error
    return Promise.reject(error)
  }
)
// Define the regex pattern for the date format
// const datePattern = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3}|\.\d{2}|\.\d{1}|\.\d{4}|\.\d{5}|\.\d{6}|\.\d{7}|\.\d{8}|\.\d{9})?Z$/;
// eslint-disable-next-line no-useless-escape
const datePattern = /^\d{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2]\d|3[0-1])T(?:[0-1]\d|2[0-3]):[0-5]\d:[0-5]\d(?:\.\d+|)(?:|(?:\+|\-)(?:\d{2}):?(?:\d{2}))$/
// Test function
const testDateFormat = (input: string) => {
  return datePattern.test(input)
}
// Helper function to parse dates in the response data
function parseDates(data: any) {
  // Recursively traverse the response data to find and parse date strings
  for (const key in data) {
    // eslint-disable-next-line no-prototype-builtins
    if (data.hasOwnProperty(key)) {
      if (typeof data[key] === 'string' && testDateFormat(data[key])) {
        // Attempt to parse date strings using moment
        const parsedDate = moment(data[key])
        if (parsedDate.isValid()) {
          data[key] = parsedDate.toDate()
        }
      } else if (typeof data[key] === 'object') {
        // Recurse into nested objects or arrays
        data[key] = parseDates(data[key])
      }
    }
  }
  return data
}

export default axios
