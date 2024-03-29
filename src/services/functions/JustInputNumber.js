/**
 * @return {boolean}
 */
export function JustInputNumber(value) {
    const regexHasCharacter = /(\+)(?=.+\1)|(\+{2,})|([^\d.+])/gmi;
    const hasMoreOneDot = /(\.)(?=.+\1)|(\.{2,})/gmi; //actually check only one plus signal
    if(regexHasCharacter.test(value.toString()) || hasMoreOneDot.test(value.toString())){
        return false
    } else {
        return true
    }
}