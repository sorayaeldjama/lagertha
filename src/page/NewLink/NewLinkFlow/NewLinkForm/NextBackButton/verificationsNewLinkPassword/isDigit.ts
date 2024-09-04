import { NewLinkState } from "@/reducers/newLink";
import { ReduxUniversalSetter } from "@/types/ReduxUniversalSetter";
import { useState } from "react";

export const isDigitPassword = (
    password: string,
    changeNewLinkPageFields: ReduxUniversalSetter<NewLinkState>,

): boolean => {

    const regexDigit = /\d/;
    if (regexDigit.test(password)) {
        changeNewLinkPageFields({
            // isPassEmpty: false,
            isDigit: true,
        });
        return true
    } else {
        changeNewLinkPageFields({
            isDigit: false,
        });
        return false
    }
}
