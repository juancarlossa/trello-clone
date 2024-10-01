import { ListContainer } from '../(platform)/(dashboard)/board/[boardId]/_components/list-container';
import { db } from '@/lib/db';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';



export default async function Home () {

  const orgId = 'org_2mTGmnpJaBlCCRItDBZ9pYdviSy'
  const boardId = 'ef82e4b7-8025-447a-8a6c-276ddb4ccd4c'

  const demoList = await db.list.findMany({
    where: {
      boardId: boardId,
      board: {
        orgId,
      }
    },
    include: {
      cards: {
        orderBy: {
          order: "asc"
        }
      }
    },
    orderBy: {
      order: "asc"
    }
  })

  return (
    <div className="flex items-center justify-center flex-col">
      <div
        className="flex items-center justify-center flex-col">

        <h1 className="text-3xl md:text-6xl text-center text-neutral-800 mb-6">
          Trello clone
        </h1>
        <div className="text-3xl md:text-6xl text-center bg-gradient-to-r from-violet-600 to-blue-600 text-white px-4 p-2 rounded-md pb-4 w-fit">
          work forward.
        </div>
      </div>
      <div className={"text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto"}>
        Nextjs based app hosted on Vercel, using SQL queries to host data. Test the drag and drop features, and sign in to test all the features. App made thanks to the youtube Channel Coding with Antonio
      </div>
      <Button className="mt-6" size={"lg"} asChild>
        <Link href={"/sign-up"}>Sign in</Link>
      </Button>
      <Separator className='my-5 bg-white' />
      <ListContainer
        data={demoList}
        boardId={boardId}
      />
    </div>
  );
}

