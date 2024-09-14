import { Copy, CopyCheck } from "lucide-react";
import { useState } from "react";

export default function ButtonCopy({ text }: { text: string }) {

  const [copied, setCopied] = useState(false)
  return (
    <button onClick={() => {

      navigator.clipboard.writeText(text);
      setCopied(!copied)

    }}>
      {copied ? <CopyCheck /> : <Copy />}
    </button>
  )
}