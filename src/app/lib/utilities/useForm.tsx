import { FormikErrors, FormikHelpers, useFormik } from 'formik'
import { useState } from 'react'

type ValidationType = 'required' | 'email' | 'password' | 'mobile'
type FormGroup = Record<string, { value?: any, validations: Partial<Record<ValidationType, string>>[] }>
type FormType = {
  formGroup: FormGroup,
  handleSubmit: (values: any, formikHelpers: FormikHelpers<any>) => void
  handelErrors?: () => void,
  isInitialValid?: boolean
}

const validate = (values: any, formGroup: FormGroup, valueWhere: any) => {
  const errors: Record<string, any> = {}
  Object.entries(formGroup).forEach(([key, value]) => {
    let nameItem = key
    const valueItem = (values[nameItem])
    const validationList = value.validations
    validationList.forEach(valids => {
      Object.entries(valids).forEach(([key, value]) => {
        if (valueItem !== null) {
          if (valueItem == '' || valueItem === undefined || (Array.isArray(valueItem) && [...valueItem].length == 0)) {
            if (key == 'required') {
              errors[nameItem] = value
            }
          } else {
            if (key === 'password') {
              if (!/[A-Z]/.test(valueItem)) {
                if (!Array.isArray(errors[nameItem])) {
                  errors[nameItem] = []
                }
                errors[nameItem].push('uppercase')
              }
              if (!/[a-z]/.test(valueItem)) {
                if (!Array.isArray(errors[nameItem])) {
                  errors[nameItem] = []
                }
                errors[nameItem].push('lowercase')
              }
              if (!/[a-z]+[A-Z]+[0-9]+|[A-Z]+[a-z]+[0-9]+|[a-z]+[0-9]+|[A-Z]+[0-9]+/.test(valueItem)) {
                if (!Array.isArray(errors[nameItem])) {
                  errors[nameItem] = []
                }
                errors[nameItem].push('text')
              }
              if (!/[-!$%^&*()_+|~=`{}\[\]:\/;<>?,.@#]+/.test(valueItem)) {
                if (!Array.isArray(errors[nameItem])) {
                  errors[nameItem] = []
                }
                errors[nameItem].push('special')
              }
              if (valueItem.length < 8) {
                if (!Array.isArray(errors[nameItem])) {
                  errors[nameItem] = []
                }
                errors[nameItem].push('length')
              }
            }
            if (key === 'mobile') {
              const mobileValue = String(valueItem)
              if (mobileValue.length < 11) {
                errors[nameItem] = value
              } else {
                if (mobileValue.charAt(0) != '0' || mobileValue.charAt(1) != '9') {
                  errors[nameItem] = value
                }
              }
            }
            if (key === 'email') {
              if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(valueItem)
              ) {
                errors[nameItem] = value
              }
            }
          }
        }
      })
    })
  })
  return errors
}

const useForm = ({ formGroup, handleSubmit, isInitialValid = true, handelErrors }: FormType) => {

  const [formGroupState, setFormGroupState] = useState(formGroup)

  const getInitValues = () => {
    return Object.entries(formGroupState).map(([key, value]) => {
      let result: any = {}
      if (value.value == '') {
        result[key] = null
        // } else if (Array.isArray(value.value) && Array(value.value).length === 0) {
        //   result[key] = []
      } else if (!!(value.value)) {
        result[key] = (value.value)
      } else {
        result[key] = (value.value)
      }
      return result
    }).reduce((a, c) => {
      return { ...a, ...c }
    })
  }

  const initForm = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useFormik({
      // children: undefined,
      // component: undefined,
      // initialErrors: undefined,
      // initialTouched: undefined,
      // innerRef: undefined,
      // isInitialValid,
      enableReinitialize: true,
      validateOnChange: true,
      validateOnMount: true,
      validateOnBlur: false,
      onSubmit(values: any, formikHelpers: FormikHelpers<any>): void | Promise<any> {
        const tempValues: any = {}
        Object.entries(values).forEach(async ([key, value]) => {
          if (value == null) {
            tempValues[key] = ''
          } else {
            tempValues[key] = (value)
          }
        })
        formikHelpers.setValues(tempValues)
        const errors = validate(tempValues, formGroup, undefined)
        if (Object.entries(errors).length > 0) {
          formikHelpers.setErrors(errors)
          if (handelErrors) {
            handelErrors()
          }
        } else {
          handleSubmit(values, formikHelpers)
          formikHelpers.setSubmitting(true)
        }
      },
      // render(values: FormikProps<any>): React.ReactNode {
      //   return undefined
      // },

      validate(values: any): void | object | Promise<FormikErrors<any>> {
        return validate(values, formGroupState, null)
      },
      initialValues: {
        ...getInitValues(),
      },
      onReset: (values: any, formikHelpers: FormikHelpers<any>) => {
        formikHelpers.resetForm()
      },
    })
  }

  const form = initForm()

  const setFieldError = (field: string, message?: string) => {

    setFormGroupState((prevState) => {
      let newError: any = {}
      newError[field as any] = { value: '', validations: message ? [{ required: message }] : [] }
      return { ...prevState, ...newError }
    })
    form.validateField(field)

  }

  return { form, setFieldError }
}

export default useForm


