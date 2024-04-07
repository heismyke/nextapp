import Link from "next/link"
import { PrismaClient } from "@prisma/client"


const prisma = new PrismaClient


export default async function PostList(){
    await new Promise((resolve) => setTimeout(resolve, 1000))
    const posts = await prisma.posts.findMany()
    if(posts.length === 0){
        return   <div className="w-[50%] h-[400px] mx-auto bg-white flex items-center justify-center flex-col">
        Nothing here
    </div>
    }
    console.log(posts)
    return(
        <div className="w-[50%] h-[400px] mx-auto  ">
            
            <ul className="w-[80%] mx-auto flex justify-center flex-col items-center">
                {posts.map((post, index) => (
                    <li key={post.id}>
                        <Link href={`/posts/${post.id}`}>
                        <h1 className="text-xl font-semibold mb-7">
                        {post.title}
                        </h1>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}