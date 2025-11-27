/** Generate a random ID string. */
export function generateId(length?: number): string;

/** Generate a ULID (26-character lexicographically sortable identifier). */
export function generateUlid(ts?: number): string;

/** Decode the timestamp portion of a ULID back into a Date. */
export function decodeUlidTimestamp(id?: string): Date | null;

export default generateId;