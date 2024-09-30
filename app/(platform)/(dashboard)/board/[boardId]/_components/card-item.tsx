'use client'

import { useCardModal } from "@/hooks/use-card-modal"
import { Draggable } from "@hello-pangea/dnd"
import { Card } from "@prisma/client"

export default function CardItem ({ data, index }: { data: Card, index: number }) {
  const cardModal = useCardModal()

  return (
    <Draggable draggableId={data.id} index={index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          role="button"
          onClick={() => { cardModal.onOpen(data.id) }}
          className="truncate border-2 border-transparent hover:border-black py-2 px-3 text-sm bg-item 
    rounded-md shadow-sm"
        >
          {data.title}
        </div>
      )}
    </Draggable>
  )
}