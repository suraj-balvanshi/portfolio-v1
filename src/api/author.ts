import { supabase } from "../lib/supabaseClient";
import { WebsiteAuthorSchema, type WebsiteAuthor } from "../types/schema";

export const fetchAuthor = async (): Promise<WebsiteAuthor> => {
  const USERNAME = "marquez";
  const { data, error } = await supabase
    .from("website_author")
    .select("*")
    .eq("username", USERNAME)
    .single();

  if (error) throw new Error(error.message);
  if (!data) throw new Error("Author record was not found");

  return WebsiteAuthorSchema.parse(data);
};
