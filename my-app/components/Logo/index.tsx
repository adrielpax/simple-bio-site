import React from 'react'
import  Link  from 'next/link'
import { TbArrowBadgeUpFilled } from 'react-icons/tb'

export default function LogoElevarDigital() {
  return (
    <div className="flex flex-row items-center text-shadow-lg font-sans select-none">
    <Link href={"/"} >
      <div className="hover: uppercase flex flex-col border-r border-black/20 mr-2 pr-2">
        <span className="flex text-shadow-lg text-shadow-black/50 font-bold items-center self-start text-2xl sm:text-xl">
          Elevar
          <TbArrowBadgeUpFilled
            className="text-emerald-500 text-shadow-lg text-shadow-emerald-500 self-end relative -top-2 right-0 w-7 h-7 sm:w-5 sm:h-5"
          />
        </span>
        <span className="flex items-center font-semibold text-emerald-500 text-shadow-lg text-shadow-emerald-900 self-end text-[15px] sm:text-xs -mt-2">
          Digital
        </span>
      </div>
    </Link>
    <div className="hidden sm:flex flex-col text-xs">
      <span className="text-xs text-white/20">made by :</span>
      <Link
        href={"https://adrieldev.vercel.app/"}
        className="hover:text-cyan-500 text-white/20 transition-colors"
      >
        adrieldev
      </Link>
    </div>
  </div>
  )
}
