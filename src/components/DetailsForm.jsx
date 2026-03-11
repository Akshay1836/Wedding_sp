import React, { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import './details-form.css'

const initialData = {
  fullName: '',
  email: '',
  phone: '',
  weddingDate: '',
  eventType: 'Wedding',
  venue: '',
  guests: '',
  budget: '',
  coverage: 'Full Day',
  preferredContact: 'WhatsApp',
  notes: '',
}

export default function DetailsForm() {
  const [formData, setFormData] = useState(initialData)
  const [submitted, setSubmitted] = useState(false)

  const requiredFields = ['fullName', 'email', 'phone', 'weddingDate', 'venue', 'budget']
  const completedRequired = useMemo(
    () => requiredFields.filter((key) => String(formData[key]).trim().length > 0).length,
    [formData]
  )
  const completionPercent = Math.round((completedRequired / requiredFields.length) * 100)

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0 },
  }

  function handleChange(event) {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (submitted) setSubmitted(false)
  }

  function handleSubmit(event) {
    event.preventDefault()
    setSubmitted(true)
    setFormData(initialData)
  }

  return (
    <section id="details-form" className="details-form-section" aria-labelledby="details-form-heading">
      <div className="container details-form-inner">
        <div className="details-hero">
          <motion.div
            className="details-form-copy"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.55, ease: 'easeOut' }}
          >
            <p className="details-form-kicker">Inquiry Form</p>
            <h2 id="details-form-heading" className="details-title-stack">
              <span>PLAN YOUR STORY</span>
              <span>WITH US</span>
            </h2>
            <p className="details-form-sub details-hero-lead">
              Share your details and we will reach out with availability, curated collections, and timeline guidance.
            </p>
            <div className="details-meta" aria-live="polite">
              <span>{completionPercent}% complete</span>
              <div className="details-progress" role="progressbar" aria-valuenow={completionPercent} aria-valuemin="0" aria-valuemax="100">
                <span style={{ width: `${completionPercent}%` }}></span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="details-hero-images"
            aria-hidden="true"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.7, delay: 0.12, ease: 'easeOut' }}
          >
            <img src="/wed24.webp" alt="" className="hero-image hero-image-main" loading="lazy" />
          </motion.div>
        </div>

        <motion.form
          className="details-form"
          onSubmit={handleSubmit}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
        >
          <label>
            Full Name
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              autoComplete="name"
              required
            />
            <small className="field-help">Use the name you want on booking communication.</small>
          </label>

          <label>
            Email Address
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              autoComplete="email"
              required
            />
          </label>

          <label>
            Phone Number
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 98765 43210"
              autoComplete="tel"
              inputMode="tel"
              pattern="[0-9+\-()\s]{8,}"
              required
            />
            <small className="field-help">Include country code for faster callback.</small>
          </label>

          <label>
            Wedding Date
            <input
              type="date"
              name="weddingDate"
              value={formData.weddingDate}
              onChange={handleChange}
              min={new Date().toISOString().split('T')[0]}
              required
            />
          </label>

          <label>
            Event Type
            <select name="eventType" value={formData.eventType} onChange={handleChange}>
              <option>Wedding</option>
              <option>Engagement</option>
              <option>Pre-Wedding Shoot</option>
              <option>Reception</option>
            </select>
          </label>

          <label>
            Venue / Location
            <input
              type="text"
              name="venue"
              value={formData.venue}
              onChange={handleChange}
              placeholder="Where is the wedding?"
              autoComplete="address-level2"
              required
            />
          </label>

          <label>
            Estimated Guests
            <input
              type="number"
              name="guests"
              value={formData.guests}
              onChange={handleChange}
              min="10"
              placeholder="Approximate guest count"
            />
          </label>

          <label>
            Budget Range
            <select name="budget" value={formData.budget} onChange={handleChange} required>
              <option value="" disabled>
                Select budget range
              </option>
              <option value="Below 1L">Below 1L</option>
              <option value="1L - 2L">1L - 2L</option>
              <option value="2L - 4L">2L - 4L</option>
              <option value="Above 4L">Above 4L</option>
            </select>
          </label>

          <label>
            Coverage Preference
            <select name="coverage" value={formData.coverage} onChange={handleChange}>
              <option>Full Day</option>
              <option>Half Day</option>
              <option>Cinematic Film Only</option>
              <option>Photography Only</option>
            </select>
          </label>

          <label>
            Preferred Contact Method
            <select name="preferredContact" value={formData.preferredContact} onChange={handleChange}>
              <option>WhatsApp</option>
              <option>Phone Call</option>
              <option>Email</option>
            </select>
          </label>

          <label className="span-2">
            Additional Notes
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              rows="4"
              placeholder="Ceremony time, special moments to capture, or any other notes"
            />
          </label>

          <button type="submit" className="details-submit-btn">
            Submit Inquiry
          </button>

          {submitted && (
            <p className="details-success" role="status">
              Thank you. Your details have been received. We will contact you shortly.
            </p>
          )}
        </motion.form>
      </div>
    </section>
  )
}
