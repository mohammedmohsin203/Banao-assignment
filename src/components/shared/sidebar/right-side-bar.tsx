'use client'
import { BugIcon, HomeIcon } from 'lucide-react'
import { usePathname } from 'next/navigation'
import React from 'react'

type Props = {}

const RightSidebar = (props: Props) => {
    const pathname = usePathname()
    const bg = ( pathname.match("hello") ) ? <HomeIcon/> : <BugIcon/>
  return (
    <div>{bg}</div>
  )
}

export default RightSidebar