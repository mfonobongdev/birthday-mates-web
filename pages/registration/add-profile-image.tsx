import type { NextPage } from 'next'
import { LayoutMaster } from '@components/global/layouts/LayoutMaster'
import 'react-phone-number-input/style.css'
import React from 'react'
import { AddProfileImageForm } from '@components/individual/auth/forms/AddProfileImageForm'
import { AuthCheck } from '@components/global/AuthCheck'

const AddProfileImage: NextPage = () => {
  return (
    <AuthCheck isPublic>
      <LayoutMaster withNavbar={false}>
        <div className={'grid h-screen w-full place-items-center'}>
          <AddProfileImageForm />
        </div>
      </LayoutMaster>
    </AuthCheck>
  )
}

export default AddProfileImage
