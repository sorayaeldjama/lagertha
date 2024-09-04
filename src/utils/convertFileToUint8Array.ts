
import { Lagertha } from "lagertha_js";
import { isValidToken } from "./isValidToken";
import { jwtDecode } from "jwt-decode";
import store from "@/store";

export const convertFileToInt8Array = async (): Promise<number[] | null> => {
    const { encryptFile } = store.getState().newLink;
    if (encryptFile) {
        const numberArrayPromise = new Promise<number[]>((resolve, reject) => {
            const reader = new FileReader();

            reader.onload = function (e) {
                try {
                    const fileContent = new Uint8Array(e.target?.result as ArrayBuffer);
                    const numberArray = Array.from(fileContent);

                    // Handle any additional logic or modifications here if needed

                    resolve(numberArray);
                } catch (error) {
                    reject(error);
                }
            };

            reader.readAsArrayBuffer(encryptFile);
        });

        return await numberArrayPromise;
    }

    // Return null if there's no encryptFile
    return null;
};
