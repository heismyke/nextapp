import Image from "next/image";

export default function Home() {
  return (
    <main className="w-[80%] h-[80vh]  mx-auto text-center">
      <div className="w-[50%] h-[400px] mx-auto bg-white flex items-center justify-center flex-col">
      <h1 className="mb-5 text-5xl font-semibold">Welcome to our blog</h1>
      <p className="max-w-[550px]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa dolorum adipisci eaque possimus quis maxime. Optio eligendi laudantium labore in, obcaecati non deleniti numquam voluptas illum possimus rerum doloremque aliquam explicabo inventore vero ipsa sed, tenetur quod temporibus ratione est voluptates necessitatibus? Velit possimus quas asperiores nihil, veritatis quam corrupti!</p>
      </div>
    </main>
  );
}
