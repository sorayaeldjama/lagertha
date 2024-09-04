import { NewLinkState } from "@/reducers/newLink";
import { ReduxUniversalSetter } from "@/types/ReduxUniversalSetter";
import { useState } from "react";

export const isLinkNameValid = (
    newLinkName: string,
    changeNewLinkPageFields: ReduxUniversalSetter<NewLinkState>,

): boolean => {
    if (newLinkName.trim().length <=1  || newLinkName.trim() === "") {
        changeNewLinkPageFields({
            linkNameError: true,
        });
        return false
    } else {
        changeNewLinkPageFields({
            linkNameError: false,
        });
        return true
    }
}

