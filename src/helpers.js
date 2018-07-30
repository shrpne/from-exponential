/**
 * Return two parts array of exponential number
 * @param {number|string|Array} num
 * @return {string[]}
 */
export function getExponentialParts(num) {
    return Array.isArray(num) ? num : String(num).split(/[eE]/);
}

/**
 *
 * @param {number|string|Array} num - number or array of its parts
 */
export function isExponential(num) {
    const eParts = getExponentialParts(num);
    return !Number.isNaN(Number(eParts[1]));
}
