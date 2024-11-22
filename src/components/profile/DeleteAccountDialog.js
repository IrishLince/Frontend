import { Button } from "../profile/ui/Button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../profile/ui/dialog"
import { ArrowLeft } from 'lucide-react'

export default function DeleteAccountDialog({ isOpen, onClose, onConfirm, profile }) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex items-center">
            <Button variant="ghost" size="sm" onClick={onClose} className="mr-2">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col items-center py-4">
          <img src="/placeholder.svg?height=100&width=100" alt="Profile" className="h-24 w-24 rounded-full mb-4" />
          <h2 className="text-xl font-bold mb-4">{profile.name}</h2>
          <Button
            variant="destructive"
            className="w-full"
            onClick={onConfirm}
          >
            I WANT TO ARCHIVE THIS ACCOUNT
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}