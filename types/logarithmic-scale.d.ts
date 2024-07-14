/**
 * Create a logarithmic scale function.
 *
 * @param {number} inputStart - Start value of input range
 * @param {number} inputEnd - End value of input range
 * @param {number} outputStart - Start value of output range
 * @param {number} outputEnd - End value of output range
 * @param {number} [base=2] - Base value for exponential scaling
 * @param {boolean} [clip=false] - Clip output to output range
 *
 * @example
 * const { exponentialScale } = utils;
 * const freqToMidi = exponentialScale(69, 81, 440, 880);
 * freqToMidi(220);
 * // > 57
 */
export function logarithmicScale(inputStart: number, inputEnd: number, outputStart: number, outputEnd: number, base?: number, clip?: boolean): (value: any) => number;
//# sourceMappingURL=logarithmic-scale.d.ts.map