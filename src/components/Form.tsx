import { useState } from 'react'
import Button from './Button'
import Input from './Input'
import Textarea from './Textarea'

type FormState = 'ready' | 'loading' | 'success' | 'error'

const formName = 'contact'

const Form = () => {
  const [formState, setFormState] = useState<FormState>('ready')

  const handleFormSubmission = (e) => {
    e.preventDefault()
    setFormState('loading')

    const data = new FormData(e.target)
    data.append('form-name', formName)

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: data,
    })
      .then(() => {
        setFormState('success')
      })
      .catch((error) => {
        setFormState('error')
        console.log(
          `There was an error with the ${formName} form submission:`,
          error
        )
      })
  }

  return (
    <form
      method="POST"
      name={formName}
      data-netlify="true"
      onSubmit={handleFormSubmission}
    >
      {formState !== ('success' || 'error') && (
        <>
          <Input
            type="text"
            name="name"
            label="Your name"
            placeholder="Your name"
            required
          />
          <Input
            type="email"
            name="email"
            label="Your email"
            placeholder="Your email"
            required
          />
          <Textarea
            name="message"
            label="Your message"
            placeholder="Your message"
            required
          ></Textarea>
          <Button
            type="submit"
            disabled={formState === 'loading'}
            ariaLabel="Send message"
          >
            Send message
          </Button>
        </>
      )}

      {formState === 'success' && (
        <>
          <h4>Thanks for your message!</h4>
          <p>I'll get back to you within two working days.</p>
        </>
      )}

      {formState === 'error' && (
        <>
          <h4>Something went wrong!</h4>
          <p>
            Sorry, there was an error with the form submission. Please try again
            later.
          </p>
        </>
      )}
    </form>
  )
}

export default Form
