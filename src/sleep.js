/**
 * Same of `delay`, but given argument is in seconds
 * @param {Number} sec - Number of seconds to wait
 * @return {Promise}
 * @example
 * import { sleep } from '@ircam/sc-utils';
 * // wait for 1 second
 * await sleep(1);
 */
export function sleep(sec) {
  return new Promise(resolve => setTimeout(resolve, sec * 1000));
}

