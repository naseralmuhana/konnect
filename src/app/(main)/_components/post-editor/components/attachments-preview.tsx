import { cn } from "@/lib/utils"

import { type Attachment } from "@/hooks/use-media-upload"

import { SingleAttachmentPreview } from "./single-attachment-preview"

interface AttachmentsPreviewProps {
  attachments: Attachment[]
  removeAttachment: (fileName: string) => void
}

export function AttachmentsPreview({
  attachments,
  removeAttachment,
}: AttachmentsPreviewProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        attachments.length > 1 && "sm:grid sm:grid-cols-2",
      )}
    >
      {attachments.map((attachment) => (
        <SingleAttachmentPreview
          key={attachment.file.name}
          attachment={attachment}
          onRemoveClick={() => removeAttachment(attachment.file.name)}
        />
      ))}
    </div>
  )
}
