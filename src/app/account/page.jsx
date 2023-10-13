// page component for account page

import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'

export default async function Account() {
  const cookieStore = cookies()
  const supabase = createServerComponentClient({ cookies: () => cookieStore })

  const {
    data: { session },
  } = await supabase.auth.getSession()
  console.log(session);

  return (
    <>
      <h1>Account</h1>
    </>
  )
}