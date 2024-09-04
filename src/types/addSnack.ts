import { SnackType } from "@/enums/snackType.enum";
import { AnyAction } from "redux";

export type AddSnack = (severity: SnackType, children: React.ReactNode) => void