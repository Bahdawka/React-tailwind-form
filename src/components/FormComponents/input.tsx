import { ErrorMessage, Field } from 'formik'
import TextError from './TextError'
import type { BaseInputProps } from '../../types/baseInputProps'

const Input = ({ label, id, name, className, ...rest }: BaseInputProps) => {
  return (
    <div className="flex flex-col space-y-2 mb-4">
      <label className="font-bold text-xl text-gray-600" htmlFor={id || name}>{label}</label>
      <Field
        id={id || name}
        name={name}
        {...rest}
        className={`px-4 border border-gray-400 rounded-md ${className || ''}`} />
      <ErrorMessage name={name} component={TextError} />
    </div>
  )
}

export default Input