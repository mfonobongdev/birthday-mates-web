import type { NextPage } from 'next'
import { LayoutMaster } from '@components/global/layouts/LayoutMaster'
import 'react-phone-number-input/style.css'
import React from 'react'
import { AddPhoneNumberForm } from '@components/individual/auth/forms/AddPhoneNumberForm'

const AddPhoneNumber: NextPage = () => {
  return (
    <LayoutMaster withNavbar={false}>
      <div className={'grid h-screen w-full place-items-center'}>
        <AddPhoneNumberForm />
      </div>
    </LayoutMaster>
  )
}

export default AddPhoneNumber
