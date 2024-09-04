export const uint8ArrayToHex = (uint8Array: Uint8Array): string => {
    return Array.from(uint8Array, (byte) =>
      byte.toString(16).padStart(2, "0")
    ).join("");
  };