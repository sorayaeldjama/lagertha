"use client"
import { useEffect } from "react"
import View from "./View"
import { useRouter } from "next/navigation"
import { Page } from "@/enums/pages.enum"

type Props = {
  children: React.ReactNode
  securityLoader: boolean
  checkIsLogged: VoidFunction
  isLogged: boolean
}

const ViewModel: React.FC<Props> = ({
  children,
  securityLoader,
  checkIsLogged,
  isLogged,
}) => {

  useEffect(() => {
    if (!isLogged) {
      checkIsLogged()
    }
  }, [isLogged])

  return <View securityLoader={securityLoader}>{children}</View>
}

export default ViewModel
