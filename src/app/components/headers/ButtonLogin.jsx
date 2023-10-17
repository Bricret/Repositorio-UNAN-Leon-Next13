import Link from "next/link"

export const ButtonLogin = () => {
  return (
    <>
      <Link href='/login' className='bg-red-400 font-bold md:py-0 md:px-0 px-4 py-2 rounded-full'>
        Iniciar sesión
      </Link>
    </>
  )
}
