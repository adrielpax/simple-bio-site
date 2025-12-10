import Teste from "./teste/page";



export default function Home() {
  return (
    <>
      <div className={`flex flex-col gap-6 min-h-screen items-center justify-start 
     bg-gradient-to-br from-zinc-950 to-zinc-600 
     text-white`} >
        <div className="mx-auto py-6 px-3">
          <Teste />

        </div>
           <section className="flex flex-col items-center bg-white/30 my-6 w-full mx-auto py-4 px-auto">
        <div className="flex flex-col rounded-2xl p-4 backdrop-blur border border-white/10
              bg-gradient-to-br from-black/10 to-white/10 w-96 h-96
              shadow-lg  transition-all easy-in-out text-shadow-lg/30
              hover:border-b-cyan-500 hover:shadow-cyan-500/10 hover:bg-gradient-to-b"
        >
          Content
        </div>
      </section>
      </div>
   
    </>
  );
}
