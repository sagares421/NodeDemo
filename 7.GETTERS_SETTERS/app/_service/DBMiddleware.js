const { createCipher, createDecipher } = require("crypto");

const algorithm = "aes-256-ctr";
const key = process.env.KEY || "MY_KEY";
const inputEncoding = "utf8";
const outputEncoding = "hex";

/**
 * Encrypt to lowercase function using only the key.
 * @param {string} value to encrypt
 */
module.exports.encryptLowerCase = (value) => {
  if (value) {
    return value.toLowerCase();
  } else if (value === undefined) {
    return undefined;
  } else if (value === null) {
    return null;
  } else if (value === "null") {
    return null;
  }
};

/**
 * Encrypt string function using only the key.
 * @param {string} value to encrypt
 */
module.exports.encrypt = (value) => {
  if (value) {
    const cipher = createCipher(algorithm, key);
    let crypted = cipher.update(value, inputEncoding, outputEncoding);
    crypted += cipher.final(outputEncoding);
    return crypted;
  } else if (value === undefined) {
    return undefined;
  } else if (value === null) {
    return null;
  } else if (value === "null") {
    return null;
  }
};

/**
 * Decrypt string function using only the key
 * @param {string} value to decrypt
 */
module.exports.decrypt = (value) => {
  if (value) {
    const decipher = createDecipher(algorithm, key);
    let dec = decipher.update(value, outputEncoding, inputEncoding);
    dec += decipher.final(inputEncoding);
    return dec;
  } else if (value === undefined) {
    return undefined;
  } else if (value === null) {
    return null;
  } else if (value === "null") {
    return null;
  }
};
