import { NewLinkState } from "@/reducers/newLink";
import { SignupState } from "@/reducers/signupReducer";
import { ReduxUniversalSetter } from "@/types/ReduxUniversalSetter";
import { useState } from "react";

export const isLowerCaseLetterPassword = (
    password: string,
    changeSignupPageFields: ReduxUniversalSetter<SignupState>,

): boolean => {

    const regexLowerCase = /[a-z]/;
    if (regexLowerCase.test(password)) {
        changeSignupPageFields({
            isLowerCaseLetter: true,
        });
        return true
    } else {
        changeSignupPageFields({
            isLowerCaseLetter: false,
        });
        return false

    }
}