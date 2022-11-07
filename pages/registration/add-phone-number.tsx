import type { NextPage } from 'next'
import { LayoutMaster } from '@components/global/layouts/LayoutMaster'
import 'react-phone-number-input/style.css'
import React from 'react'
import { AddPhoneNumberForm } from '@components/individual/auth/forms/AddPhoneNumberForm'
import { AuthCheck } from '@components/global/AuthCheck'

const AddPhoneNumber: NextPage = () => {
  return (
    <AuthCheck isPublic>
      <LayoutMaster withNavbar={false}>
        <div className={'grid h-screen w-full place-items-center'}>
          <AddPhoneNumberForm />
        </div>
      </LayoutMaster>
    </AuthCheck>
  )
}

export default AddPhoneNumber
