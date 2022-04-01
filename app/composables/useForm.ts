import FormError from '~/utils/form.constants'

export default () => {
  const name = ref('')
  const email = ref('')
  const detail = ref('')
  const isSent = ref(false)

  const nameError = ref('')
  const emailError = ref('')
  const detailError = ref('')
  const submitError = ref('')

  const updateName = (value: string) => {
    name.value = value
  }

  const validateName = (value: string) => {
    if (value === '') {
      nameError.value = FormError.nameErrorMessage
      return
    }
    nameError.value = ''
  }

  const updateEmail = (value: string) => {
    email.value = value
  }

  const validateEmail = (value: string) => {
    if (value === '') {
      emailError.value = FormError.emailErrorMessage
      return
    } else if (!/[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}/.test(value)) {
      emailError.value = FormError.emailFormatErrorMessage
      return
    }
    emailError.value = ''
  }

  const updateDetail = (value: string) => {
    detail.value = value
  }

  const validateDetail = (value: string) => {
    if (value === '') {
      detailError.value = FormError.detailErrorMessage
      return
    }
    detailError.value = ''
  }

  const isSubmitting = computed(() => {
    if (name.value === '' || email.value === '' || detail.value === '') return false
    return nameError.value === '' && emailError.value === '' && detailError.value === ''
  })

  const encode = (data: object): string => {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
  }

  const createSubmit = () => {
    submitError.value = ''

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': 'contact',
        name: name.value,
        email: email.value,
        detail: detail.value,
      }),
    })
      .then((response) => {
        if (response.ok) {
          isSent.value = true
          return
        }
        submitError.value = FormError.submitErrorMessage
        throw new Error('Network response was not ok')
      })
      .catch((error) => {
        submitError.value = FormError.submitErrorMessage
      })
  }

  return {
    name,
    email,
    detail,
    isSent,
    nameError,
    emailError,
    detailError,
    submitError,
    updateName,
    updateEmail,
    updateDetail,
    validateName,
    validateEmail,
    validateDetail,
    isSubmitting,
    createSubmit,
  }
}
