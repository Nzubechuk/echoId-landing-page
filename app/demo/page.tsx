"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Toaster, toast } from "react-hot-toast"

export default function DemoPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('https://formspree.io/f/mrbqyjrr', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        toast.success("Demo request submitted successfully!")
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          message: "",
        })
      } else {
        toast.error("Failed to submit request. Please try again.")
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <>
      <Toaster position="top-center" />
      <div className="overflow-hidden rounded-xl bg-blue-950/30 text-white shadow-2xl">
        <div className="relative overflow-hidden bg-blue-950/30 p-8 text-white">
          <div className="absolute -left-16 -top-16 h-64 w-64 rounded-full bg-white/10"></div>
          <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-white/10"></div>

          <div className="absolute right-12 top-12 opacity-20">
            <div className="grid grid-cols-8 gap-1">
              {Array.from({ length: 64 }).map((_, i) => (
                <div
                  key={i}
                  className={`h-2 w-2 rounded-sm ${Math.random() > 0.7 ? "bg-white" : "bg-transparent"}`}
                ></div>
              ))}
            </div>
          </div>

          <div className="relative z-10">
            <div className="inline-flex items-center rounded-full bg-white/20 px-3 py-1 text-sm backdrop-blur-sm">
              Secure Identity Verification
            </div>
            <h1 className="mt-4 text-4xl font-bold tracking-tight">Let's accelerate your KYC process</h1>
            <p className="mt-4 max-w-xl text-indigo-100">
              Experience our advanced facial recognition technology for secure, compliant, and frictionless KYC
              verification. Complete the form below to schedule your personalized demonstration.
            </p>
          </div>
        </div>

        <div className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <Input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-blue-950/50 border-blue-950/50"
              />
              <Input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-blue-950/50 border-blue-950/50"
              />
              <Input
                type="text"
                name="company"
                placeholder="Company Name"
                value={formData.company}
                onChange={handleChange}
                required
                className="bg-blue-950/50 border-blue-950/50"
              />
              <Input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="bg-blue-950/50 border-blue-950/50"
              />
              <Textarea
                name="message"
                placeholder="Tell us about your needs"
                value={formData.message}
                onChange={handleChange}
                className="bg-blue-950/50 border-blue-950/50 min-h-[100px]"
              />
            </div>
            <Button 
              type="submit" 
              className="w-3xl bg-blue-950/50 hover:bg-blue-900/50 text-white"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit Request"}
            </Button>
          </form>
        </div>
      </div>
    </>
  )
}
