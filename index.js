import { webcrypto } from "node:crypto";

// Alphabet for ULID generation
const ALPHABET = "0123456789ABCDEFGHJKMNPQRSTVWXYZ";

// Omit potentially confusing characters
const nonConfusing = "ABCDEFGHIJKLMNPQRSTUVWXYZ0123456789";

/**
 * Generate a random ID.
 * @param {number} [length=6] positive number of characters in the generated ID
 * @returns {string}
 */
export const makeid = (length = 6) => {
  const normalizedLength = Math.abs(length);
  let text = "";
  for (let i = 0; i < normalizedLength; i++) {
    text += nonConfusing.charAt(Math.floor(Math.random() * nonConfusing.length));
  }
  return text;
}

/**
 * Generate a ULID (Universally Unique Lexicographically Sortable Identifier).
 * @param {number} [ts=Date.now()] timestamp in milliseconds
 * @returns {string} ULID string
 */

export const ulid = (ts = Date.now()) => {
  const cryptoApi = globalThis.crypto ?? webcrypto;
  if (!cryptoApi?.getRandomValues) {
    throw new Error("crypto.getRandomValues is not available in this environment");
  }

  let id = "";

  // Timestamp: most significant digit first so lexical order matches time
  for (let i = 9; i >= 0; i -= 1) {
    id += ALPHABET[Math.floor(ts / 32 ** i) % 32];
  }

  // 16 random bytes, mask to 5 bits
  const buf = cryptoApi.getRandomValues(new Uint8Array(16));
  for (const b of buf) {
    id += ALPHABET[b & 31];
  }

  return id;
}


export default makeid;
