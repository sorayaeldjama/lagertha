import { NewLinkState } from "@/reducers/newLink";
import { ReduxUniversalSetter } from "@/types/ReduxUniversalSetter";
import { useState } from "react";
import { isEightCaracterPassword } from "./isEightCaracter";
import { isUpperCaseLetterPassword } from "./isUpperCaseLetter";
import { isLowerCaseLetterPassword } from "./isLowerCaseLetter";
import { isPasswordEmpty } from "./isPasswordEmpty";
import { isDigitPassword } from "./isDigit";
import { SignupState } from "@/reducers/signupReducer";

export const passwordStepVerifications = (
    password: string,
    // noPassword: boolean,
    // isLowerCaseLetter: boolean,
    // isUpperCaseLetter: boolean,
    // isEightCaracter: boolean,
    // isPassEmpty: boolean,
    changeSignupPageFields: ReduxUniversalSetter<SignupState>,
): boolean => {

    let isValid = true;
    
    if (!isEightCaracterPassword(password, changeSignupPageFields)) {
        changeSignupPageFields({
            passwordError: true
        });
        isValid = false;
    }

    if (!isUpperCaseLetterPassword(password, changeSignupPageFields)) {
        changeSignupPageFields({
            passwordError: true
        });
        isValid = false;
    }

    if (!isLowerCaseLetterPassword(password, changeSignupPageFields)) {
        changeSignupPageFields({
            passwordError: true
        });
        isValid = false;
    }

    if (isPasswordEmpty(password, changeSignupPageFields)) {
        changeSignupPageFields({
            passwordError: true
        });
        isValid = false;
    }

    if (!isDigitPassword(password, changeSignupPageFields)) {
        changeSignupPageFields({

            passwordError: true
        });
        isValid = false;
    }

    if (isValid) {
        changeSignupPageFields({
            passwordError: false
        });
    }

    return isValid;
}



