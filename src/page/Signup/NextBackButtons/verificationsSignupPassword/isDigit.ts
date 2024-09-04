import { NewLinkState } from "@/reducers/newLink";
import { SignupState } from "@/reducers/signupReducer";
import { ReduxUniversalSetter } from "@/types/ReduxUniversalSetter";
import { useState } from "react";

export const isDigitPassword = (
    password: string,
    changeSignupPageFields: ReduxUniversalSetter<SignupState>,

): boolean => {

    const regexDigit = /\d/;
    if (regexDigit.test(password)) {
        changeSignupPageFields({
            // isPassEmpty: false,
            isDigit: true,
        });
        return true
    } else {
        changeSignupPageFields({
            isDigit: false,
        });
        return false
    }
}
