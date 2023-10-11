import Link from "next/link"

export const ButtonLogin = () => {
  return (
    <>
      <Link href='/login' className='bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full transition-all duration-500 ease-in'>
        Iniciar sesión
      </Link>
    </>
  )
}
