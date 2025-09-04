declare global {
  var _mongoose: Promise<typeof import("mongoose")> | undefined;
}

export {};
