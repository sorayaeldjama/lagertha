"use client"
import styles from "./styles.module.scss"

type Props = {
  children: React.ReactNode
}

const View: React.FC<Props> = ({ children }) => {
  return <>{children}</>
}

export default View
