/**
 * @return {string}
 */
export function TruncateText(value, length = 20) {
    if(!value) return '';
    if(value.length <= length) return value;
    return value.substring(0, length) + '...'
}