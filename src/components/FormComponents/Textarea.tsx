import { ErrorMessage, Field } from 'formik'
import TextError from './TextError'
import type { BaseInputProps } from '../../types/baseInputProps'

const Textarea = ({ label, id, name, className, ...rest }: BaseInputProps) => {
  return (
    <div className="flex flex-col space-y-2 mb-4">
      <label className="font-bold text-xl text-gray-600" htmlFor={id || name}>{label}</label>
      <Field
        as="textarea"
        id={id || name}
        name={name}
        className={`border px-4 py-2 rounded ${className || ''}`}
        {...rest}
      />
      <ErrorMessage name={name} component={TextError} />
    </div>
  )
}

export default Textarea

