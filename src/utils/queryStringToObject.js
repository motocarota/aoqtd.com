// from
// https://stackoverflow.com/questions/8648892/how-to-convert-url-parameters-to-a-javascript-object
// converts a query string to an object

export default (str) => Object.fromEntries(new URLSearchParams(str));
