/**
 * @return {boolean}
 */
export function ValidateEmail(email) {
    const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(EMAIL_REGEX.test(email)) return true;
    if(!EMAIL_REGEX.test(email) || email === '' || email === null) return false;

}