import { revalidatePath } from "next/cache"
import SubmitButton from "./submit-btn"
import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient

export default function AddForm() {
    const addPosts = async(formData: FormData) => {
        "use server"
          await prisma.posts.create({
            data : {
                title : formData.get("title") as string,
                description : formData.get("description") as string
            }
           
        })
    
        revalidatePath('/posts')

    }
    
    return(
        <form action={addPosts} className="flex flex-col rounded max-w-[500px] mb-10 mx-auto space-y-2">
            <input type="text" name="title" placeholder="Title" className="border rounded h-10 px-3"  required/>
            <textarea name="description" placeholder="Body"  rows={5} className="border rounded p-3" required></textarea>
            <SubmitButton />
        </form>
         
    )
}