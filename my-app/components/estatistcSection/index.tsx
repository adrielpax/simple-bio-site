import CountUp from "@/animations/CountUp";
import { Award, Building2, TrendingUp } from "lucide-react";
import Wrapper from "../wrapper";

export default function EstatistcSection() {
  return (
    <Wrapper>
      {/* Estatísticas */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12">
        <div

          className="flex flex-col items-center rounded-xl sm:rounded-2xl p-6 sm:p-8 backdrop-blur border border-white/10
              bg-gradient-to-br from-black/10 to-white/10
              shadow-lg transition-all ease-in-out hover:border-b-green-500 hover:shadow-green-500/10 text-center
              hover:-translate-y-1"
        >
          <div className="p-3 sm:p-4 rounded-full backdrop-blur-md bg-green-500/10 border border-green-500/20 mb-3 sm:mb-4">
            <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-green-400" />
          </div>
          <h3 className="uppercase text-shadow-lg font-bold text-3xl sm:text-4xl md:text-5xl mb-2 text-white"><CountUp
            from={0}
            to={100}
            separator=","
            direction="up"
            duration={1}
            className="count-up-text"

          />+</h3>
          <p className="text-white/70 text-xs sm:text-sm md:text-base">Projetos Entregues</p>
        </div>

        <div
          className="flex flex-col items-center rounded-xl sm:rounded-2xl p-6 sm:p-8 backdrop-blur border border-white/10
              bg-gradient-to-br from-black/10 to-white/10
              shadow-lg transition-all ease-in-out hover:border-b-cyan-500 hover:shadow-cyan-500/10 text-center
              hover:-translate-y-1"
        >
          <div className="p-3 sm:p-4 rounded-full backdrop-blur-md bg-cyan-500/10 border border-cyan-500/20 mb-3 sm:mb-4">
            <Building2 className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-400" />
          </div>
          <h3 className="uppercase text-shadow-lg font-bold text-3xl sm:text-4xl md:text-5xl mb-2 text-white"><CountUp
  from={0}
  to={99}
  separator=","
  direction="up"
  duration={1}
  className="count-up-text"
 
/>+</h3>
          <p className="text-white/70 text-xs sm:text-sm md:text-base">Clientes Satisfeitos</p>
        </div>

        <div
          className="flex flex-col items-center rounded-xl sm:rounded-2xl p-6 sm:p-8 backdrop-blur border border-white/10
              bg-gradient-to-br from-black/10 to-white/10
              shadow-lg transition-all ease-in-out hover:border-b-green-500 hover:shadow-green-500/10 text-center
              hover:-translate-y-1"
        >
          <div className="p-3 sm:p-4 rounded-full backdrop-blur-md bg-green-500/10 border border-green-500/20 mb-3 sm:mb-4">
            <Award className="w-6 h-6 sm:w-8 sm:h-8 text-green-400" />
          </div>
          <h3 className="uppercase text-shadow-lg font-bold text-3xl sm:text-4xl md:text-5xl mb-2 text-white"><CountUp
  from={0}
  to={98}
  separator=","
  direction="up"
  duration={1}
  className="count-up-text"

/>%</h3>
          <p className="text-white/70 text-xs sm:text-sm md:text-base">Taxa de Satisfação</p>
        </div>
      </div>
    </Wrapper>
  )
}