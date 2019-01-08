/**
 * @return {boolean}
 */
export function JustInputNumber(value) {
    const regexHasCharacter = /(\+)(?=.+\1)|(\+{2,})|([^\d.+])/gmi;
    const hasMoreOneDot = /(\.)(?=.+\1)|(\.{2,})/gmi;
    if(regexHasCharacter.test(value.toString()) || hasMoreOneDot.test(value.toString())){
        return false
    } else {
        return true
    }
}