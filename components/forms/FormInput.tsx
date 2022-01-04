import React, { FC } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'
import { FieldErrors } from 'react-hook-form/dist/types/errors'

type FormInputProps = {
  registerProps: UseFormRegisterReturn
  errors: FieldErrors
  label: string
  name: string
  type: 'email' | 'password' | 'text'
}

const FormInput: FC<FormInputProps> = ({
  registerProps,
  errors,
  label,
  name,
  type
}) => {
  return (
    <div className="mb-6">
      <label
        htmlFor={type}
        className="block mb-2 text-sm font-medium text-dark dark:text-light"
      >
        {label}
      </label>
      <input
        type={type}
        id={name}
        {...registerProps}
        className="shadow-sm bg-light border border-primary dark:border-secondary border-2 text-dark text-sm rounded-lg focus:ring-primaryAccent focus:border-primaryAccent block w-full p-2.5 dark:bg-light dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
      />
      {errors[name] && (
        <span className="text-primaryAccent mt-1 block text-sm">
          {errors[name].message}
        </span>
      )}
    </div>
  )
}

export default FormInput
