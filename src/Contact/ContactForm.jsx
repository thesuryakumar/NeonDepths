import React, { useState } from 'react'
import './ContactForm.css'

function ContactForm() {
  const [formData, setFormData] = useState({
    company: 'Neon Depths',
    companyEmail: 'thesuryakumar01@gmail.com',
    username: '',
    phone: '',
    contactMethod: '',
    message: ''
  })

  const [errors, setErrors] = useState({})

  const validate = () => {
    let tempErrors = {}

    if (!formData.companyEmail)
      tempErrors.companyEmail = 'Company email is required'
    else if (!/\S+@\S+\.\S+/.test(formData.companyEmail))
      tempErrors.companyEmail = 'Email is invalid'

    if (!formData.username)
      tempErrors.username = 'User name is required'

    if (!formData.phone)
      tempErrors.phone = 'Phone number is required'
    else if (!/^[0-9]{10}$/.test(formData.phone))
      tempErrors.phone = 'Phone must be 10 digits'

    if (!formData.contactMethod)
      tempErrors.contactMethod = 'Please select a contact method'

    setErrors(tempErrors)
    return Object.keys(tempErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validate()) {
      alert('Form submitted successfully')
      // send formData to API or reset
      setFormData({
        company: 'Neon Depths',
        companyEmail: '',
        username: '',
        phone: '',
        contactMethod: '',
        message: ''
      })
      setErrors({})
    }
  }

  return (
    <div className='form-container'>
      <h2>Contact Neon Depths</h2>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label>Company Name</label>
          <input type='text' name='company' value={formData.company} readOnly />
        </div>

        <div className='form-group'>
          <label>Company Email</label>
          <input type='email' name='companyEmail' value={formData.companyEmail} readOnly />
          {errors.companyEmail && <span className='error'>{errors.companyEmail}</span>}
        </div>

        <div className='form-group'>
          <label>User Name</label>
          <input type='text' name='username' value={formData.username} onChange={handleChange} />
          {errors.username && <span className='error'>{errors.username}</span>}
        </div>

        <div className='form-group'>
          <label>Phone Number</label>
          <input type='text' name='phone' value={formData.phone} onChange={handleChange} />
          {errors.phone && <span className='error'>{errors.phone}</span>}
        </div>

        <div className='form-group'>
          <label>Preferred Contact Method</label>
          <div className='radio-group'>
            <label><input type='radio' name='contactMethod' value='Call' onChange={handleChange} /> Call</label>
            <label><input type='radio' name='contactMethod' value='Email' onChange={handleChange} /> Email</label>
            <label><input type='radio' name='contactMethod' value='WhatsApp' onChange={handleChange} /> WhatsApp</label>
          </div>
          {errors.contactMethod && <span className='error'>{errors.contactMethod}</span>}
        </div>

        <div className='form-group'>
          <label>Message (Optional)</label>
          <textarea name='message' value={formData.message} onChange={handleChange}></textarea>
        </div>

        <button type='submit' className='submit-btn'>Submit</button>
      </form>
    </div>
  )
}

export default ContactForm
