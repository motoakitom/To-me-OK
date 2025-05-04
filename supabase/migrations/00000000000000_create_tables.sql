-- データベースのバージョンを指定
-- これはSupabaseの管理画面で自動的に設定されます

-- bookingsテーブルの作成
create table bookings (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  email text not null,
  date date not null,
  time time not null,
  message text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- パブリックアクセス権限の設定
alter table bookings enable row level security;

-- デフォルトのポリシーを作成
create policy "Public bookings are viewable by everyone."
  on bookings for select
  using ( true );

create policy "Users can insert their own bookings."
  on bookings for insert
  with check ( true );
