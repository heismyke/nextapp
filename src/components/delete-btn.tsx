"use client"
import { useFormStatus } from "react-dom"

export default function DeleteBtn() {
    const{pending} = useFormStatus()
   
    return(
        <button type="submit" disabled={pending} className="bg-red-500 disabled:bg-zinc-500 transition text-white rounded py-2 px-3">
            Delete Posts
        </button>
    )
}