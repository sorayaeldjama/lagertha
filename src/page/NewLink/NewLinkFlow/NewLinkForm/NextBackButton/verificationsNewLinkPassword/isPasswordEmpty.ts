import { NewLinkState } from "@/reducers/newLink";
import { ReduxUniversalSetter } from "@/types/ReduxUniversalSetter";
import { useState } from "react";

export const isPasswordEmpty = (
    password: string,
    changeNewLinkPageFields: ReduxUniversalSetter<NewLinkState>,

): boolean => {
    if (
        password === "") {
        changeNewLinkPageFields({
            isPassEmpty: true,
        });
        return true
    } else {
        changeNewLinkPageFields({
            isPassEmpty: false,
        });
        return false
    }
}
