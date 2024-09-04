import { NewLinkState } from "@/reducers/newLink";
import { ReduxUniversalSetter } from "@/types/ReduxUniversalSetter";
import { useState } from "react";
import { isEightCaracterPassword } from "./isEightCaracter";
import { isUpperCaseLetterPassword } from "./isUpperCaseLetter";
import { isLowerCaseLetterPassword } from "./isLowerCaseLetter";
import { isPasswordEmpty } from "./isPasswordEmpty";
import { isDigitPassword } from "./isDigit";

export const passwordStepVerifications = (
    password: string,
    // noPassword: boolean,
    // isLowerCaseLetter: boolean,
    // isUpperCaseLetter: boolean,
    // isEightCaracter: boolean,
    // isPassEmpty: boolean,
    changeNewLinkPageFields: ReduxUniversalSetter<NewLinkState>,
): boolean => {

    let isValid = true;
    
    if (!isEightCaracterPassword(password, changeNewLinkPageFields)) {
        changeNewLinkPageFields({
            errorPassword: true
        });
        isValid = false;
    }

    if (!isUpperCaseLetterPassword(password, changeNewLinkPageFields)) {
        changeNewLinkPageFields({
            errorPassword: true
        });
        isValid = false;
    }

    if (!isLowerCaseLetterPassword(password, changeNewLinkPageFields)) {
        changeNewLinkPageFields({
            errorPassword: true
        });
        isValid = false;
    }

    if (isPasswordEmpty(password, changeNewLinkPageFields)) {
        changeNewLinkPageFields({
            errorPassword: true
        });
        isValid = false;
    }

    if (!isDigitPassword(password, changeNewLinkPageFields)) {
        changeNewLinkPageFields({

            errorPassword: true
        });
        isValid = false;
    }

    if (isValid) {
        changeNewLinkPageFields({
            errorPassword: false
        });
    }

    return isValid;
}



