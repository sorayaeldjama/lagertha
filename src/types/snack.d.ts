import { SnackType } from "@/enums/snackType.enum"
import { ReactNode } from "react"

export type Snack = {
    type: SnackType,
    children: ReactNode
}