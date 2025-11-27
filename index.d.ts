/** Generate a random ID string. */
export function makeid(length?: number): string;

/** Generate a ULID (26-character lexicographically sortable identifier). */
export function ulid(ts?: number): string;

export default makeid;
