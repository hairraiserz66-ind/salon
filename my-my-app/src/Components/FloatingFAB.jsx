import React from "react";


export default function FloatingFAB(){
const phone = "+91 99159 42299"; // replace
const wa = "91 99159 42299"; // replace digits only
return (
<div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
<a
href={`https://wa.me/${wa}`}
className="group inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-3 font-semibold text-white shadow-lg hover:shadow-emerald-500/30 focus:outline-none"
aria-label="WhatsApp"
>
<svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M20.52 3.48A11.94 11.94 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.08 1.5 5.8L0 24l6.34-1.66A11.94 11.94 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.2-1.3-6.2-3.48-8.52ZM12 22a9.9 9.9 0 0 1-5.05-1.4l-.36-.2-3.76.99 1-3.66-.24-.38A9.9 9.9 0 0 1 2 12C2 6.49 6.49 2 12 2s10 4.49 10 10-4.49 10-10 10Zm5.12-7.34c-.28-.14-1.64-.81-1.9-.9-.26-.1-.45-.14-.64.14-.19.28-.74.9-.91 1.08-.17.19-.34.21-.62.07-.28-.14-1.2-.44-2.28-1.4-.84-.75-1.41-1.68-1.57-1.96-.16-.28-.02-.44.12-.58.13-.13.28-.34.43-.51.14-.17.19-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.64-1.54-.88-2.1-.23-.56-.47-.48-.64-.49-.17-.01-.36-.01-.55-.01-.19 0-.5.07-.76.36-.26.28-1 1-1 2.45s1.02 2.84 1.16 3.04c.14.2 2 3.05 4.84 4.28.68.29 1.2.47 1.61.6.68.22 1.3.19 1.79.12.55-.08 1.64-.67 1.87-1.31.23-.64.23-1.19.16-1.31-.07-.12-.26-.2-.54-.34Z"/></svg>
<span className="hidden sm:inline">WhatsApp</span>
</a>
<a
href={`tel:${phone}`}
className="group inline-flex items-center gap-2 rounded-full bg-amber-400 px-4 py-3 font-bold text-black shadow-lg hover:shadow-amber-400/30 focus:outline-none"
aria-label="Call"
>
<svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.56 0 1 .44 1 1V20a1 1 0 0 1-1 1C10.07 21 3 13.93 3 5a1 1 0 0 1 1-1h2.5c.56 0 1 .44 1 1 0 1.24.2 2.45.57 3.57.11.35.03.74-.24 1.02l-2.2 2.2Z"/></svg>
<span className="hidden sm:inline">Call</span>
</a>
</div>
);}

