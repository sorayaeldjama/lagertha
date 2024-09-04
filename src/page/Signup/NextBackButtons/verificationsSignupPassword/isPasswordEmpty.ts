import { NewLinkState } from "@/reducers/newLink";
import { SignupState } from "@/reducers/signupReducer";
import { ReduxUniversalSetter } from "@/types/ReduxUniversalSetter";
import { useState } from "react";

export const isPasswordEmpty = (
    password: string,
    changeSignupPageFields: ReduxUniversalSetter<SignupState>,

): boolean => {
    if (
        password === "") {
        changeSignupPageFields({
            isPassEmpty: true,
        });
        return true
    } else {
        changeSignupPageFields({
            isPassEmpty: false,
        });
        return false
    }
}
