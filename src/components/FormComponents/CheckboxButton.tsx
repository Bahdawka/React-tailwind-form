import { ErrorMessage, Field, type FieldProps } from 'formik'
import TextError from './TextError'
import type { BaseFormControlProps } from '../../types/baseFormControlProps'
import type { Option } from '../../types/option.interface'

export interface CheckboxButtonProps extends BaseFormControlProps {
  options: Option[]
}

const CheckboxButton = ({ label, id, name, options, className, ...rest }: CheckboxButtonProps) => {
  return (
    <fieldset className={`flex flex-col space-y-2 mb-4 ${className || ''}`}>
      <legend className="font-bold text-xl text-gray-600">{label}</legend>
      <div className="flex space-x-6">
        <Field name={name} {...rest}>
          {({ field }: FieldProps) => {
            return options.map((options: Option) => (
              <div className="flex items-center" key={options.key}>
                <input
                  id={`${id || name}-${options.value}`}
                  {...field}
                  type="checkbox"
                  checked={field.value !== undefined && field.value.includes(options.value)}
                  value={options.value}
                  {...rest}
                  className="mr-1.5"
                />
                <label htmlFor={`${id || name}-${options.value}`} className="text-sm text-gray-600">
                  {options.value}
                </label>
              </div>
            ))
          }}
        </Field>
      </div>
      <ErrorMessage name={name} component={TextError} />
    </fieldset>
  )
}

export default CheckboxButton