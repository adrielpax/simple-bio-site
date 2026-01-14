import { Search } from "lucide-react";

export function SearchInput() {
    return (
        <form>
            <div className="flex items-center gap-2">

                <label className="bg-white/15">
                    
                    <Search className="w-5 h-5"/>
                    
                    </label>
                <input className="shadow-sm px-4 py-2 rounded-lg
      border border-white/20 bg-white/10 backdrop-blur-sm max-w-[350px]" type="text" id="name" />
            </div>
        </form>
    )
}