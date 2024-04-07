
import { PrismaClient } from "@prisma/client"
import { notFound } from "next/navigation"
import DeleteForm from "@/components/delete-form"

const prisma = new PrismaClient
type PostPageParams =  {
    params : {
        id : string
    }
}

export default async function PostPage({params}:PostPageParams) {
    const postId = params.id
    const singlePost = await prisma.posts.findUnique({
        where : {id: parseInt(postId)}
    })
    if(!singlePost){
        return notFound()
    }
   
    return(
        <div className="w-[80%] h-[80vh]  mx-auto">
            <div className="w-[50%] h-[400px] flex flex-col items-center mt-10 mx-auto">
            <h1 className="text-5xl font-semibold mb-7">
                {singlePost.title}
            </h1>
            <p className="max-w-[700px] mx-auto mb-5">{singlePost.description}</p>
               <DeleteForm postId={postId}/>
            </div>
            
        </div>
        
    )
}