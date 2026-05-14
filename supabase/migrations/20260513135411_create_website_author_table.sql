begin;

-- 1. Enable the the native moddatetime extension
create extension if not exists moddatetime schema extensions;

-- 2. Create the production table
create table public.website_author (
  id uuid default gen_random_uuid() primary key,
    
  username text unique not null 
    constraint check_username_not_empty check (username <> ''),
    
  info jsonb default '{}'::jsonb not null,

  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null

);

-- 3. Link the automated update trigger to the table
create trigger handle_website_author_updated_at 
  before update on public.website_author 
  for each row 
  execute procedure extensions.moddatetime (updated_at);

-- 4. Enable security protocols
alter table public.website_author enable row level security;

create policy "Allow public read access" 
on public.website_author for select 
using (true);


-- 5. Insert First Row
insert into public.website_author (username, info) 
values (
  'marquez', 
  '{    
    "name": "Suraj Balvanshi",
    "email": "surajbalvanshi1@gmail.com",
    "hobbies": ["reading", "movies", "trekking", "esports", "coding", "travel", "learning languages", "-OH"]
  }'::jsonb
);

commit;