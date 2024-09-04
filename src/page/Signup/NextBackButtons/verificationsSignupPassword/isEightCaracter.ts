import { NewLinkState } from "@/reducers/newLink";
import { SignupState } from "@/reducers/signupReducer";
import { ReduxUniversalSetter } from "@/types/ReduxUniversalSetter";
import { useState } from "react";

export const isEightCaracterPassword = (
    password: string,
    changeSignupPageFields: ReduxUniversalSetter<SignupState>,


): boolean => {

    if (
        password.length > 7) {
        changeSignupPageFields({
            isEightCaracter: true,
        });
        return true
    } else {
        changeSignupPageFields({
            isEightCaracter: false,
        });
        return false
    }
}
