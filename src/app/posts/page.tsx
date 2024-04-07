import PostList from "@/components/postList"
import AddForm from "@/components/addForm"
export default async function Posts() {
    
    return(
        <main className="w-[80%] h-[80vh]  mx-auto">
            <AddForm/>
            <div className="w-[100%] h-[50px]  flex items-center py-10 justify-center ">
                <h1 className="pl-3 text-4xl font-semibold">All posts</h1>
            </div>
            <PostList />
        </main>
    )
}