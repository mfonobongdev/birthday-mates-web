import type { NextPage } from 'next'
import { LayoutMaster } from '@components/global/layouts/LayoutMaster'
import 'react-phone-number-input/style.css'
import React from 'react'
import { AddBirthdayForm } from '@components/individual/auth/forms/AddBirthdayForm'

const AddBirthday: NextPage = () => {
  return (
    <LayoutMaster withNavbar={false}>
      <div className={'grid h-screen w-full place-items-center'}>
        <AddBirthdayForm />
      </div>
    </LayoutMaster>
  )
}

export default AddBirthday
