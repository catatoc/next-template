import { Metadata } from "next"
import Image from "next/image"
import { listenNowAlbums, madeForYouAlbums } from "@/data/albums"
import { playlists } from "@/data/playlists"
import { Grid, List } from "lucide-react"

// Asegúrate de importar los iconos adecuados

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import TechStackScroll from "@/components/TechStackScroll"
import { AlbumArtwork } from "@/components/album-artwork"
import MyDiagram from "@/components/diagram/MyDiagram"
import DiagramIcon from "@/components/icons/Diagram"
import { Sidebar } from "@/components/sidebar"
import SequenceTimeline from "@/components/timeline/SequenceTimeline"
import EmojiConfetti from "@/components/triggerConfetti"

export const metadata: Metadata = {
  title: "Currículum de Carlos Horacio Carrasquero",
  description: "Secciones para conocer a Carlos Horacio Carrasquero.",
}

export default function MusicPage() {
  const emoji = "⚽"

  return (
    <>
      <div className="hidden md:hidden">
        <Image
          src="/examples/music-light.png"
          width={1280}
          height={1114}
          alt="Carlos Horacio Carrasquero"
          className="block dark:hidden"
        />
        <Image
          src="/examples/music-dark.png"
          width={1280}
          height={1114}
          alt="Carlos Horacio Carrasquero"
          className="hidden dark:block"
        />
      </div>
      <div className="md:block">
        <div className="">
          <div className="bg-background">
            <div className="grid lg:grid-cols-5">
              <Sidebar className="hidden lg:block" />
              <div className="col-span-3 lg:col-span-4 lg:border-l">
                <div className="h-full px-4 py-6 lg:px-8">
                  <Tabs defaultValue="gallery" className="h-full space-y-6">
                    <div className="space-between flex items-center justify-between">
                      <TabsList>
                        <TabsTrigger value="gallery" className="relative">
                          <Grid className="" />
                        </TabsTrigger>
                        <TabsTrigger value="diagram" className="relative">
                          <DiagramIcon className=" size-5" />
                        </TabsTrigger>
                      </TabsList>
                    </div>

                    {/* Vista Galería */}
                    <TabsContent
                      value="gallery"
                      className="border-none p-0 outline-none"
                    >
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <h2 className="text-2xl font-semibold tracking-tight">
                            Información general
                          </h2>
                          <p className="text-sm text-muted-foreground">
                            Conoce más sobre Carlos Horacio Carrasquero.
                          </p>
                        </div>
                      </div>
                      <Separator className="my-4" />
                      <div className="relative">
                        <ScrollArea className="w-96 whitespace-nowrap md:w-full">
                          <div className="flex space-x-4 pb-4">
                            {listenNowAlbums.map((album) => (
                              <EmojiConfetti key={album.name} emoji={emoji}>
                                <AlbumArtwork
                                  album={album}
                                  className="w-[250px] shrink-0"
                                  aspectRatio="portrait"
                                  width={250}
                                  height={330}
                                />
                              </EmojiConfetti>
                            ))}
                          </div>
                          <ScrollBar orientation="horizontal" />
                        </ScrollArea>
                      </div>
                      <TechStackScroll />
                    </TabsContent>

                    {/* Vista Diagrama */}
                    <TabsContent
                      value="diagram"
                      className="h-full flex-col border-none p-0 data-[state=active]:flex"
                    >
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <h2 className="text-2xl font-semibold tracking-tight">
                            Tecnología
                          </h2>
                          <p className="text-sm text-muted-foreground">
                            Exploración de las tecnologías más recientes.
                          </p>
                        </div>
                      </div>
                      <Separator className="my-4" />
                      <MyDiagram />
                    </TabsContent>
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
