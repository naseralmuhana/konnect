import { IconType } from "@/types"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

import { CustomIcon } from "./custom-icon"

interface CustomAlertProps {
  title?: string
  description: string
  icon?: IconType
  variant?: "default" | "destructive" | null
}

export function CustomAlert({
  title = "Error",
  description,
  icon = { name: "AlertCircle" },
  variant = "destructive",
}: CustomAlertProps) {
  return (
    <Alert variant={variant}>
      <CustomIcon {...icon} />
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{description}</AlertDescription>
    </Alert>
  )
}
