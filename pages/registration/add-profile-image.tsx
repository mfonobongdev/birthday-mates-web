import type { NextPage } from 'next'
import { LayoutMaster } from '@components/global/layouts/LayoutMaster'
import 'react-phone-number-input/style.css'
import React from 'react'
import { AddProfileImageForm } from '@components/individual/auth/forms/AddProfileImageForm'

const AddProfileImage: NextPage = () => {
  return (
    <LayoutMaster withNavbar={false}>
      <div className={'grid h-screen w-full place-items-center'}>
        <AddProfileImageForm />
      </div>
    </LayoutMaster>
  )
}

export default AddProfileImage
