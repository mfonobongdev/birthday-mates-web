import type { NextPage } from 'next'
import { LayoutMaster } from '@components/global/layouts/LayoutMaster'
import 'react-phone-number-input/style.css'
import React from 'react'
import { AddBirthdayForm } from '@components/individual/auth/forms/AddBirthdayForm'
import { AuthCheck } from '@components/global/AuthCheck'

const AddBirthday: NextPage = () => {
  return (
    <AuthCheck isPublic>
      <LayoutMaster withNavbar={false}>
        <div className={'grid h-screen w-full place-items-center'}>
          <AddBirthdayForm />
        </div>
      </LayoutMaster>
    </AuthCheck>
  )
}

export default AddBirthday
