/**
 * @return {string}
 */
export function FormatUnitValue(value, groupOf,decimalFixed = 2) {
 if(value === '0') return '0';
 if(value === '.') return '';
 if(!(/[^\.0]/gmi).test(value)) return '';
 const pattern = `(\\d)(?=(\\d{${groupOf}})+(?!\\d))`;
 const regexDigitSeparate = new RegExp(pattern,'gmi');
 const dotBeginLine = /^[.]/gmi;
 if(dotBeginLine.test(value)){
  return parseFloat(`0${value}`).toFixed(decimalFixed).toString().replace('.', ',');
 }
 if((/[\.]$/gmi).test(value) || !(/[\.]/gmi).test(value)){
   return value.replace('.','').replace(regexDigitSeparate, '$1.')
 }
 return parseFloat(value).toFixed(decimalFixed).replace('.', ',').replace(regexDigitSeparate, '$1.');
}
// (.*(?=\.))  match until get DOT
// const regexSplitByDot = /[^.]+/gmi;