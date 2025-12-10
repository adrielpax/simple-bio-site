import { DiamondPlus, Send, SquarePen, Trash2 } from "lucide-react";


function Teste() {
  return (
     <div className="flex flex-col gap-6" >

       <h1 className="uppercase text-shadow-lg font-bold text-3xl">
          H1 Titulo Conteudo
        </h1>
       <h2 className="uppercase text-shadow-lg font-regular text-2xl">
          h2 Titulo Conteudo
        </h2>
        <h3 className="uppercase text-shadow-lg font-regular text-xl">
          H3 Titulo Conteudo
        </h3>

          <p className="text-md">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi incidunt necessitatibus, sed deserunt, vitae vero nisi ducimus dolore, aut nostrum in odit sequi illo. Sunt corrupti itaque ullam impedit rem.
        </p>

         <p className="text-sm">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi incidunt necessitatibus, sed deserunt, vitae vero nisi ducimus dolore, aut nostrum in odit sequi illo. Sunt corrupti itaque ullam impedit rem.
        </p>

        <p className="text-xs">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi incidunt necessitatibus, sed deserunt, vitae vero nisi ducimus dolore, aut nostrum in odit sequi illo. Sunt corrupti itaque ullam impedit rem.
        </p>
      
      <div className="flex flex-col rounded-2xl p-4 backdrop-blur border border-white/10
      bg-gradient-to-br from-black/10 to-white/10 w-96 h-96
      shadow-lg  transition-all easy-in-out text-shadow-lg/30
      hover:border-b-cyan-500 hover:shadow-cyan-500/10 hover:bg-gradient-to-b">

       Content

      </div>
        <div className="flex flex-col rounded-2xl p-4 backdrop-blur border border-white/10
      bg-gradient-to-br from-black/10 to-white/10 w-96 h-96
      shadow-lg  transition-all easy-in-out text-shadow-lg/30 hover:border-red-500/30
      hover:border-b-red-500 hover:shadow-red-500/10 hover:bg-gradient-to-b">

       Content

      </div>
         <div className="flex flex-col rounded-2xl p-4 backdrop-blur border border-white/10
      bg-gradient-to-br from-black/10 to-white/10 w-96 h-96
      shadow-lg  transition-all easy-in-out text-shadow-lg/30
      hover:border-b-green-500 hover:shadow-green-500/10 hover:bg-gradient-to-b">

       Content

      </div>

         <div className="flex flex-col rounded-2xl p-4 backdrop-blur border border-white/10
      bg-gradient-to-br from-black/10 to-white/10 w-96 h-96
      shadow-lg  transition-all easy-in-out text-shadow-lg/30
      hover:border-b-gray-500 hover:shadow-gray-500/10 hover:bg-gradient-to-b">

       Content

      </div>
        <button className="uppercase text-shadow-lg/20 rounded-full px-6 py-4 border border-white/30 
          bg-gradient-to-r from-cyan-400 to-green-400 max-w-[240px] w-full hover:bg-gradient-to-b
          font-bold hover:scale-105 active:scale-95 hover:border-b-white transition-all easy-in-out max-w-[250px] justify-center
          shadow-lg hover:shadow-green-500/60 active:bg-cyan-500">
          clique aqui
        </button>
         <button 
         
         className="uppercase text-shadow-lg/20 rounded-full px-6 py-4 border border-white/30 
          bg-black/20 max-w-[240px] w-full hover:bg-gradient-to-b
          font-bold active:scale-95 hover:border-b-cyan-500 transition-all easy-in-out max-w-[250px] justify-center
          shadow-lg hover:bg-white/10 active:bg-gradient-to-r active:from-cyan-400 active:to-green-400
          active:shadow-green-500/30">
          Começar Jornada
        </button>
          <button 
         
         className="uppercase text-shadow-lg/20 rounded-lg px-6 py-4 border border-white/30 
          bg-black/20 max-w-[240px] w-full hover:bg-gradient-to-b
          font-bold active:scale-95 hover:border-b-cyan-500 transition-all easy-in-out max-w-[250px] justify-center
          shadow-lg hover:bg-white/10 active:bg-gradient-to-r active:from-cyan-400 active:to-green-400
          active:shadow-green-500/30 flex items-center gap-2 justify-center">
          Enviar Dados
             <Send />
        </button>

      <button className="uppercase text-xs text-regular border border-red-500/10
      backdrop-blur-md bg-red-500/10 text-shadow-lg/20 text-red-400 rounded-md px-4 py-2
      hover:border-red-500/50 hover:bg-red-500/20 active:scale-95
      shadow-lg shadow flex items-center gap-2  transition-all easy-in-out max-w-[250px] justify-center ">
        <Trash2 />
        Excluir
      </button>
      <button className="uppercase text-xs text-regular border border-green-500/10
      backdrop-blur-md bg-green-500/10 text-shadow-lg/20 text-green-400 rounded-md px-4 py-2
      hover:border-green-500/50 hover:bg-green-500/20 active:scale-95
      shadow-lg shadow flex items-center gap-2 transition-all easy-in-out max-w-[250px] justify-center ">
        <DiamondPlus />
        Adicionar
      </button>
      <button className="uppercase text-xs text-regular border border-zinc-500/10
      backdrop-blur-md bg-zinc-500/10 text-shadow-lg/20 text-zinc-400 rounded-md px-4 py-2
      hover:border-zinc-500/50 hover:bg-zinc-500/20 active:scale-95
      shadow-lg shadow flex items-center gap-2 transition-all easy-in-out max-w-[250px] justify-center ">
        Action
      </button>

      <button className="rounded-lg backdrop-blur-md shadow-lg border border-transparent
      hover:border-white/20 active:scale-95 p-3 max-w-14">
         <SquarePen />
      </button>

       <button className="uppercase text-xs text-regular border border-zinc-500/10
      backdrop-blur-md bg-zinc-500/10 text-shadow-lg/20 text-zinc-400 rounded-md px-4 py-2
      hover:border-zinc-500/50 hover:bg-zinc-500/20 active:scale-95 
      shadow-lg shadow flex items-center gap-2 transition-all easy-in-out max-w-[250px] justify-center ">
        Enviar 
         <Send />
      </button>

      <label>name</label>
      <input className="shadow shadow-sm px-4 py-2 rounded-lg
      border border-white/20 bg-white/10 backdrop-blur-sm max-w-[350px]" type="text" id="name" />
      
    </div>
  )
}

export default Teste