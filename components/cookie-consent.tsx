"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { ScrollArea } from "@/components/ui/scroll-area"

interface CookieSettings {
  necessary: boolean
  analytics: boolean
  marketing: boolean
}

export function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false)
  const [settings, setSettings] = useState<CookieSettings>({
    necessary: true, // Always true and cannot be changed
    analytics: false,
    marketing: false,
  })

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      setShowConsent(true)
    }
  }, [])

  const handleAcceptAll = () => {
    setSettings({
      necessary: true,
      analytics: true,
      marketing: true,
    })
    saveConsent({
      necessary: true,
      analytics: true,
      marketing: true,
    })
  }

  const handleAcceptNecessary = () => {
    setSettings({
      necessary: true,
      analytics: false,
      marketing: false,
    })
    saveConsent({
      necessary: true,
      analytics: false,
      marketing: false,
    })
  }

  const handleSavePreferences = () => {
    saveConsent(settings)
  }

  const saveConsent = (settings: CookieSettings) => {
    localStorage.setItem("cookie-consent", JSON.stringify(settings))
    setShowConsent(false)
    // Here you would typically initialize your analytics and marketing tools
    // based on the user's preferences
  }

  if (!showConsent) return null

  return (
    <Dialog open={showConsent} onOpenChange={setShowConsent}>
      <DialogContent className="sm:max-w-[600px]">
        <Tabs defaultValue="notice">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="notice">Cookie Notice</TabsTrigger>
            <TabsTrigger value="settings">Cookie Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="notice">
            <DialogHeader>
              <DialogTitle>Cookie Settings</DialogTitle>
              <DialogDescription>
                We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. Please choose your cookie preferences below.
              </DialogDescription>
            </DialogHeader>

            <ScrollArea className="h-[200px] mt-4">
              <div className="space-y-4 pr-4">
                <div>
                  <h4 className="font-medium mb-2">Necessary Cookies</h4>
                  <p className="text-sm text-muted-foreground">
                    These cookies are essential for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Analytics Cookies</h4>
                  <p className="text-sm text-muted-foreground">
                    These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Marketing Cookies</h4>
                  <p className="text-sm text-muted-foreground">
                    These cookies are used to track visitors across websites to enable us to display relevant advertisements.
                  </p>
                </div>
              </div>
            </ScrollArea>

            <DialogFooter className="mt-6 flex-col sm:flex-row gap-2">
              <Button variant="outline" onClick={handleAcceptNecessary}>
                Accept Necessary
              </Button>
              <Button onClick={handleAcceptAll}>Accept All</Button>
            </DialogFooter>
          </TabsContent>

          <TabsContent value="settings">
            <DialogHeader>
              <DialogTitle>Customize Cookie Preferences</DialogTitle>
              <DialogDescription>
                Manage your cookie preferences. Note that disabling some types of cookies may impact your experience of our website.
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-4 mt-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Necessary Cookies</Label>
                  <p className="text-sm text-muted-foreground">
                    Required for the website to function
                  </p>
                </div>
                <Switch checked disabled />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Analytics Cookies</Label>
                  <p className="text-sm text-muted-foreground">
                    Help us improve our website
                  </p>
                </div>
                <Switch
                  checked={settings.analytics}
                  onCheckedChange={(checked) =>
                    setSettings((prev) => ({ ...prev, analytics: checked }))
                  }
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Marketing Cookies</Label>
                  <p className="text-sm text-muted-foreground">
                    Used for targeted advertising
                  </p>
                </div>
                <Switch
                  checked={settings.marketing}
                  onCheckedChange={(checked) =>
                    setSettings((prev) => ({ ...prev, marketing: checked }))
                  }
                />
              </div>
            </div>

            <DialogFooter className="mt-6">
              <Button onClick={handleSavePreferences}>Save Preferences</Button>
            </DialogFooter>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}