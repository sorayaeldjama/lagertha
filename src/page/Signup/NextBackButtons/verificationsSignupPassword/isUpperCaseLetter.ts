import { NewLinkState } from "@/reducers/newLink";
import { SignupState } from "@/reducers/signupReducer";
import { ReduxUniversalSetter } from "@/types/ReduxUniversalSetter";
import { useState } from "react";

export const isUpperCaseLetterPassword = (
    password: string,
    changeSignupPageFields: ReduxUniversalSetter<SignupState>,

): boolean => {

    const regexUpperCase = /[A-Z]/g;
    if (regexUpperCase.test(password)) {
        changeSignupPageFields({
            isPassEmpty: false,
            isUpperCaseLetter: true,
        });
        return true

    } else {
        changeSignupPageFields({
            isUpperCaseLetter: false,
        });
        return false
    }
}