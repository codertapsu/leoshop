/**
 * @return {string}
 */
export function FormatUnitValue(value, groupOf,decimalFixed) {
 const pattern = `(\\d)(?=(\\d{${groupOf}})+(?!\\d))`;
 const regexDigitSeparate = new RegExp(pattern,'gmi');
 // parseFloat(value).toFixed(decimalFixed)
 return parseFloat(value).toFixed(decimalFixed).replace('.', ',').replace(regexDigitSeparate, '$1.');
}
// (.*(?=\.))  match until get DOT