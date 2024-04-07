
import { revalidatePath } from 'next/cache';
import { notFound } from 'next/navigation';
import DeleteBtn from './delete-btn';
import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient
interface DeleteFormProps {
    postId: string; // Define the prop type
  }
export default function DeleteForm({ postId }: DeleteFormProps) { 


    const handleDeletePost = async () => {
        "use server"
        try {
            await prisma.posts.delete({
                where: { id: parseInt(postId) },
            });
             revalidatePath("/posts")
            
        } catch (error:any) {
            // Handle errors
            console.error(error);
            if (error.code === 'P2025' || error.message.includes('not found')) { // Adapt error handling based on Prisma
                return notFound();
            } else {
                // Display user-friendly error message
                // ...
            }
        }
    };

    return (
        <form action={handleDeletePost}>
            <DeleteBtn />
        </form>
    );
}
