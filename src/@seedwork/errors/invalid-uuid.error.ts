export default class InvalidUuidError extends Error {
  constructor(message?: string) {
    super(message || `ID must be a valid Uuid`);
    this.name = "InvalidUuidError";
  }
}
