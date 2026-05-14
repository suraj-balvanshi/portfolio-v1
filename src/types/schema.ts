import { z } from "zod";

export const AuthorInfoSchema = z.object({
  name: z.string().min(1),
  email: z.email(),
  hobbies: z.array(z.string()),
});

export const WebsiteAuthorSchema = z.object({
  id: z.uuid(),
  username: z.string().min(1),
  info: AuthorInfoSchema,
  created_at: z.iso.datetime({ offset: true }),
  updated_at: z.iso.datetime({ offset: true }),
});

export type AuthorInfo = z.infer<typeof AuthorInfoSchema>;
export type WebsiteAuthor = z.infer<typeof WebsiteAuthorSchema>;
