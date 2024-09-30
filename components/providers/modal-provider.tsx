'use client'

import { useEffect, useState } from "react"
import CardModal from "../modal/card-modal"

export default function ModalProvider () {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <>
      <CardModal />
    </>
  )
}