import { NewLinkState } from "@/reducers/newLink";
import { ReduxUniversalSetter } from "@/types/ReduxUniversalSetter";
import { useState } from "react";

export const confirmPasswordStepVerifications = (
    password: string,
    confirmPassword: string,
    changeNewLinkPageFields: ReduxUniversalSetter<NewLinkState>,

): boolean => {
    if (password !== confirmPassword) {
        changeNewLinkPageFields({
            linkconfirmPasswordError: true,
        });
        return false
    }
    return true
}