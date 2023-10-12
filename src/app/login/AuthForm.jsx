'use client'
import { Auth } from '@supabase/auth-ui-react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { ThemeSupa } from '@supabase/auth-ui-shared';

export default function AuthForm() {
  const supabase = createClientComponentClient();

  return (
    <div className='' style={{padding: '20px 0 60px 0'}}>
        <Auth
          supabaseClient={supabase}
          view="sign_in"
          appearance={{ 
            style: {
                button: { background: '#AB030C', color: 'white', borderRadius: '4px', border: 'none', height: '45px', width: '100%', fontSize: '14px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px', cursor: 'pointer', outline: 'none', transition: 'all 0.15s ease', '&:hover': { background: '#AB030C' } },
                anchor: { color: 'blue' },
                input: { borderRadius: '4px', border: '1px solid #ccc', padding: '12px 15px', width: '100%', fontSize: '14px', outline: 'none', transition: 'all 0.15s ease', '&:focus': { borderColor: '#AB030C' }, '&::placeholder': { color: '#ccc' } },
                label: { fontSize: '14px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '5px', display: 'block' },
            },
            theme: ThemeSupa,
          }}
          theme="default"
          showLinks={true}
          providers={[]}
          redirectTo="http://localhost:3000/auth/callback/"
        />
    </div>
  )
}