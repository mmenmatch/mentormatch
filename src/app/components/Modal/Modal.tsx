import React from 'react'
import ModalForm from '../ModalForm/ModalForm'
import CloseButton from '../../../../public/assets/Images/cross.svg'
import Image from 'next/image'

export const Modal = ({ closeFn }: any) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative bg-white rounded-3xl md:p-8 p-2 w-full max-w-[400px] relative">
        <div className="absolute right-2 top-2 cursor-pointer" onClick={closeFn}>
          <Image src={CloseButton} alt="close" width={30} />
        </div>
        <ModalForm CloseButton={closeFn} />
      </div>
    </div>
  )
}
