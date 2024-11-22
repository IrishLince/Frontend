import { useState } from 'react'
import { Button } from "../profile/ui/Button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../profile/ui/dialog"
import { Input } from "../profile/ui/input"
import { Label } from "../profile/ui/label"
import { ArrowLeft } from 'lucide-react'

export default function EditProfileDialog({ isOpen, onClose, profile, onSave }) {
  const [editedProfile, setEditedProfile] = useState(profile)

  const handleChange = (e) => {
    setEditedProfile({ ...editedProfile, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSave(editedProfile)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex items-center">
            <Button variant="ghost" size="sm" onClick={onClose} className="mr-2">
              <ArrowLeft className="h-4 w-4" />
            </Button>
            Edit Details
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" value={editedProfile.name} onChange={handleChange} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="phone">Contact Number</Label>
              <Input id="phone" name="phone" value={editedProfile.phone} onChange={handleChange} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" name="email" type="email" value={editedProfile.email} onChange={handleChange} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="address">Location Address</Label>
              <Input id="address" name="address" value={editedProfile.address} onChange={handleChange} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="dateOfBirth">Date of Birth</Label>
              <Input id="dateOfBirth" name="dateOfBirth" type="date" value={editedProfile.dateOfBirth} onChange={handleChange} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="old-password">Old password</Label>
              <Input id="old-password" type="password" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="new-password">New password</Label>
              <Input id="new-password" type="password" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="confirm-password">Confirm new password</Label>
              <Input id="confirm-password" type="password" />
            </div>
          </div>
          <div className="flex justify-end gap-4">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit">Save</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}