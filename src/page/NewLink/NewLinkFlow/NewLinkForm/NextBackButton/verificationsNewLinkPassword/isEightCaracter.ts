import { NewLinkState } from "@/reducers/newLink";
import { ReduxUniversalSetter } from "@/types/ReduxUniversalSetter";
import { useState } from "react";

export const isEightCaracterPassword = (
    password: string,
    changeNewLinkPageFields: ReduxUniversalSetter<NewLinkState>,


): boolean => {

    if (
        password.length > 7) {
        changeNewLinkPageFields({
            isEightCaracter: true,
        });
        return true
    } else {
        changeNewLinkPageFields({
            isEightCaracter: false,
        });
        return false
    }
}
