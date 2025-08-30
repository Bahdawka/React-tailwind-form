import { ErrorMessage, useField } from 'formik'
import TextError from './TextError'
import ReactDatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import type { BaseInputProps } from '../../types/baseInputProps'
import { uk } from 'date-fns/locale'

const DatePicker = ({ label, id, name, className, placeholder, ...rest }: BaseInputProps) => {
  const [field, , helpers] = useField(name)
  return (
    <div className={`flex flex-col space-y-2 mb-4 ${className || ''}`}>
      <label htmlFor={id || name} className="font-bold text-xl text-gray-600">
        {label}
      </label>
      <ReactDatePicker
        portalId="root-portal"
        id={name}
        {...field}
        {...rest}
        selected={field.value || null}
        onChange={(val) => helpers.setValue(val)}
        locale={uk}
        dateFormat="dd.MM.yyyy"
        className={`border px-4 py-2 rounded min-w-[200px] ${className || ''}`}
        placeholderText={placeholder}
      />
      <ErrorMessage name={name} component={TextError} />
    </div>
  )
}

export default DatePicker