export default () => {
  const name = ref('')
  const email = ref('')
  const detail = ref('')
  const isSended = ref(false)

  const nameError = ref('')
  const emailError = ref('')
  const detailError = ref('')

  const updateName = (value: string) => {
    if (value === '') {
      nameError.value = '名前を入力してください'
      return
    }
    nameError.value = ''
    name.value = value
  }

  const updateEmail = (value: string) => {
    if (value === '') {
      emailError.value = 'メールアドレスを入力してください'
      return
    } else if (!/[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}/.test(value)) {
      emailError.value = 'メールアドレスの形式を確認してください'
      return
    }
    emailError.value = ''
    email.value = value
  }

  const updateDetail = (value: string) => {
    if (value === '') {
      detailError.value = '問い合わせ内容を入力してください'
      return
    }
    detailError.value = ''
    detail.value = value
  }

  const isSubmitting = computed(() => {
    if (name.value === '' || email.value === '' || detail.value === '') return false
    return nameError.value === '' && emailError.value === '' && detailError.value === ''
  })

  const createSubmit = () => {
    console.log('Clicked', { name: name.value, email: email.value, detail: detail.value })
    isSended.value = true
  }

  return {
    name,
    email,
    detail,
    isSended,
    nameError,
    emailError,
    detailError,
    updateName,
    updateEmail,
    updateDetail,
    isSubmitting,
    createSubmit,
  }
}
