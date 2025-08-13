import Image from "next/image"
export function Footer() {
    return (
            <>
                <div className="text-slate-200 font-semibold">
                    <Image alt="potion" width={50} height={50} src="/potion.png"/> 
                </div>
                <div className="text-slate-200 font-semibold text-sm text-right right-auto">
                    Copyright © 2025 Mia Cabrera. All Rights Reserved.
                </div>
            </>
    )
}