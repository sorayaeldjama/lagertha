import { NewLinkState } from "@/reducers/newLink";
import { ReduxUniversalSetter } from "@/types/ReduxUniversalSetter";
import { useState } from "react";

export const isLowerCaseLetterPassword = (
    password: string,
    changeNewLinkPageFields: ReduxUniversalSetter<NewLinkState>,

): boolean => {

    const regexLowerCase = /[a-z]/;
    if (regexLowerCase.test(password)) {
        changeNewLinkPageFields({
            isLowerCaseLetter: true,
        });
        return true
    } else {
        changeNewLinkPageFields({
            isLowerCaseLetter: false,
        });
        return false

    }
}