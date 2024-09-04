import { NewLinkState } from "@/reducers/newLink";
import { SignupState } from "@/reducers/signupReducer";
import { ReduxUniversalSetter } from "@/types/ReduxUniversalSetter";
import { useState } from "react";

export const confirmPasswordStepVerifications = (
    password: string,
    confirmPassword: string,
    changeSignupPageFields: ReduxUniversalSetter<SignupState>,

): boolean => {
    if (password !== confirmPassword) {
        changeSignupPageFields({
            confirmPasswordError: true,
        });
        return false
    }
    return true
}