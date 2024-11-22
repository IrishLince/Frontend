'use client'

import { useState } from 'react'
import { Button } from "../profile/ui/Button"
import { Card, CardContent } from "../profile/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../profile/ui/dropdown-menu"
import { Mail, MapPin, Pencil, Phone } from 'lucide-react'
import EditProfileDialog from './EditProfileDialog'
import DeleteAccountDialog from './DeleteAccountDialog'
import ConfirmDeleteDialog from './ConfirmDeleteDialog'
import Header from '../Header';

export default function ProfilePage() {
  const [isEditOpen, setIsEditOpen] = useState(false)
  const [isDeleteOpen, setIsDeleteOpen] = useState(false)
  const [isConfirmDeleteOpen, setIsConfirmDeleteOpen] = useState(false)

  const [profile, setProfile] = useState({
    name: 'Daniel Padilla',
    email: 'danielpadilla@gmail.com',
    phone: '+63 987 654 3210',
    address: '123 Quezon Ave., Manila, Metro Manila, Philippines',
    dateOfBirth: '26/04/1995'
  })

  const handleSave = (updatedProfile) => {
    setProfile(updatedProfile)
    setIsEditOpen(false)
  }

  const handleDelete = () => {
    // Add logic to delete account
    setIsConfirmDeleteOpen(false)
    setIsDeleteOpen(false)
  }

  return (
    <div className="min-h-screen bg-[#f8e4e4]">
       <Header isLoggedIn={true} />
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <img src="/placeholder.svg?height=32&width=32" alt="Logo" className="h-8 w-8" />
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-red-600 hover:text-red-800">Home</a>
              <a href="#" className="text-red-600 hover:text-red-800">Hospital</a>
              <a href="#" className="text-red-600 hover:text-red-800">Online Booking</a>
              <a href="#" className="text-red-600 hover:text-red-800">About Us</a>
            </nav>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <img src="/placeholder.svg?height=32&width=32" alt="Avatar" className="rounded-full" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onSelect={() => setIsDeleteOpen(true)}>Delete Account</DropdownMenuItem>
              <DropdownMenuItem>Account Settings</DropdownMenuItem>
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Card className="bg-red-600 text-white overflow-hidden">
          <CardContent className="p-6">
            <div className="flex items-center space-x-6">
              <img src="/placeholder.svg?height=100&width=100" alt="Profile" className="h-24 w-24 rounded-full border-4 border-white" />
              <div className="flex-1">
                <h1 className="text-3xl font-bold">{profile.name}</h1>
                <div className="mt-2 space-y-1">
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 mr-2" />
                    <span>{profile.email}</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 mr-2" />
                    <span>{profile.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{profile.address}</span>
                  </div>
                </div>
              </div>
              <Button onClick={() => setIsEditOpen(true)} variant="secondary" className="bg-white text-red-600 hover:bg-red-100">
                <Pencil className="h-4 w-4 mr-2" />
                Edit Details
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>

      <EditProfileDialog
        isOpen={isEditOpen}
        onClose={() => setIsEditOpen(false)}
        profile={profile}
        onSave={handleSave}
      />

      <DeleteAccountDialog
        isOpen={isDeleteOpen}
        onClose={() => setIsDeleteOpen(false)}
        onConfirm={() => {
          setIsDeleteOpen(false)
          setIsConfirmDeleteOpen(true)
        }}
        profile={profile}
      />

      <ConfirmDeleteDialog
        isOpen={isConfirmDeleteOpen}
        onClose={() => setIsConfirmDeleteOpen(false)}
        onConfirm={handleDelete}
        profile={profile}
      />
    </div>
  )
}