import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs"
import Movies from "./Movies"
import Music from "./Music"

const Interest = () => {
  return (
    <div className="pb-5">
         <h1 className='text-5xl md:text-7xl font-bold leading-tight mt-15'>INTEREST</h1>
       <Tabs defaultValue="music" className="mt-5">
            <TabsList>
                <TabsTrigger value="music">Music 🎵</TabsTrigger>
                <TabsTrigger value="gaming">Gaming 🎮</TabsTrigger>
                <TabsTrigger value="movies">Movies and Series 🎬</TabsTrigger>
            </TabsList>
            <TabsContent value="music"><Music /></TabsContent>
            <TabsContent value="gaming">Be on a look out.</TabsContent>
            <TabsContent value="movies" className="h-[500px]"><Movies/> </TabsContent>
        </Tabs>
    </div>
  )
}

export default Interest