"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Calendar, MapPin } from "lucide-react"

interface CourseReservationFormProps {
  isOpen: boolean
  onClose: () => void
  courseTitle: string
  courseDate: string
  courseLocation: string
}

export function CourseReservationForm({
  isOpen,
  onClose,
  courseTitle,
  courseDate,
  courseLocation,
}: CourseReservationFormProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    organization: "",
    message: "",
    participants: "1",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Create email body with form data
    const emailSubject = `Course Reservation: ${courseTitle}`
    const emailBody = `
Course Reservation Details:
--------------------------
Course: ${courseTitle}
Date: ${courseDate}
Location: ${courseLocation}
Number of Participants: ${formData.participants}

Personal Information:
--------------------------
Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone}
Organization: ${formData.organization}

Additional Message:
--------------------------
${formData.message}
    `

    // Create mailto link
    const mailtoLink = `mailto:trainingadmin.wc@redcross.org.za?subject=${encodeURIComponent(
      emailSubject,
    )}&body=${encodeURIComponent(emailBody)}`

    // Open email client
    window.location.href = mailtoLink

    // Close the dialog
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Reserve Course: {courseTitle}</DialogTitle>
          <DialogDescription>
            Fill out this form to reserve your spot. Your request will be sent to our training department.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="bg-gray-50 p-3 rounded-md space-y-2 mb-4">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 text-red-600 mr-2" />
              <span className="text-sm">{courseDate}</span>
            </div>
            <div className="flex items-center">
              <MapPin className="h-4 w-4 text-red-600 mr-2" />
              <span className="text-sm">{courseLocation}</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="organization">Organization (if applicable)</Label>
            <Input id="organization" name="organization" value={formData.organization} onChange={handleChange} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="participants">Number of Participants</Label>
            <Select value={formData.participants} onValueChange={(value) => handleSelectChange("participants", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select number of participants" />
              </SelectTrigger>
              <SelectContent>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                  <SelectItem key={num} value={num.toString()}>
                    {num}
                  </SelectItem>
                ))}
                <SelectItem value="more than 10">More than 10</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Additional Information</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Any special requirements or questions?"
              rows={3}
            />
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" className="bg-red-600 hover:bg-red-700">
              Send Reservation Request
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
