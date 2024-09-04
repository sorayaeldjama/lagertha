import FingerprintJS from "@fingerprintjs/fingerprintjs";
import { base64encode } from "nodejs-base64";
import uuid from "react-native-uuid";
import { sha512 } from "js-sha512";

export const get_fingerprint =  async (): Promise<string> => {
    /**
     * provide a unique device identifier
     */
        if (typeof window !== "undefined") {
            const fp = await FingerprintJS.load();
            try {
                const { visitorId } = await fp.get();
                return visitorId;
            } catch {
                return uuid.v4() as string;
            }
        }
        return uuid.v4() as string;
    };

