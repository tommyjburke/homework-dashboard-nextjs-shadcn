import Image from 'next/image'
import {
   Card,
   CardContent,
   CardDescription,
   CardFooter,
   CardHeader,
   CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
   Avatar,
   AvatarFallback,
   AvatarImage,
} from '@/components/ui/avatar'

interface Homework {
   title: string
   image: string
   time: number
   description: string
   timer: boolean
   id: string
}

async function getHomework(): Promise<Homework[]> {
   const result = await fetch('http://localhost:4001/homeworks')

   await new Promise((resolve) => setTimeout(resolve, 200))

   return result.json()
}

export default async function Home() {
   const homeworks = await getHomework()
   return (
      // <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <main>
         {/* HOME */}
         <div className='grid grid-cols-2 gap-8 m-10'>
            {homeworks.map((homework) => (
               <Card
                  key={homework.id}
                  className='h-full flex flex-col justify-between'
               >
                  <CardHeader className='flex-row gap-4 items-center'>
                     <Avatar>
                        <AvatarImage
                           src={homework.image}
                           alt={homework.title}
                        />
                        <AvatarFallback>
                           {homework.title.slice(0, 2)}
                        </AvatarFallback>
                     </Avatar>

                     <div>
                        <CardTitle>{homework.title}</CardTitle>
                        <CardDescription>
                           {homework.time} seconds
                        </CardDescription>
                     </div>
                  </CardHeader>
                  <CardContent>
                     <p>{homework.description}</p>
                  </CardContent>
                  <CardFooter className='flex justify-between'>
                     <Button>View</Button>
                     {homework.timer && (
                        <Badge variant='destructive'>
                           TIMER
                        </Badge>
                     )}
                  </CardFooter>
               </Card>
            ))}
         </div>
         ?
      </main>
   )
}
