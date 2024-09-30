import { z } from 'zod'

export const UpdateCard = z.object({
  boardId: z.string(),
  description: z.optional(
    z.string({
      required_error: "Description required",
      invalid_type_error: "Description required"
    }).min(3, {
      message: "Description too short"
    })
  ),
  title: z.optional(z.string({
    required_error: "title is required",
    invalid_type_error: "title is required"
  }).min(3, {
    message: "Title is too short"
  })),
  id: z.string()
})