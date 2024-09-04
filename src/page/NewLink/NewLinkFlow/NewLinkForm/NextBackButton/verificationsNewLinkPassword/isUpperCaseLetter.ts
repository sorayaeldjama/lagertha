import { NewLinkState } from "@/reducers/newLink";
import { ReduxUniversalSetter } from "@/types/ReduxUniversalSetter";
import { useState } from "react";

export const isUpperCaseLetterPassword = (
    password: string,
    changeNewLinkPageFields: ReduxUniversalSetter<NewLinkState>,

): boolean => {

    const regexUpperCase = /[A-Z]/g;
    if (regexUpperCase.test(password)) {
        changeNewLinkPageFields({
            isPassEmpty: false,
            isUpperCaseLetter: true,
        });
        return true

    } else {
        changeNewLinkPageFields({
            isUpperCaseLetter: false,
        });
        return false
    }
}