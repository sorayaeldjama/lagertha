export const hexToUint8Array = (hex: string): Uint8Array => {
    if (hex.length % 2 !== 0) {
      throw new Error("La chaîne hexadécimale doit avoir une longueur paire.");
    }
    const uint8Array = new Uint8Array(hex.length / 2);
    for (let i = 0; i < hex.length; i += 2) {
      const byteValue = parseInt(hex.substr(i, 2), 16);
      uint8Array[i / 2] = byteValue;
    }

    return uint8Array;
  };