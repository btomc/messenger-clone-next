'use client'

import { signOut } from 'next-auth/react'

const Users = () => {
  return (
    <>
      <p>Users</p>
      <button className='bg-sky-500 text-white' onClick={() => signOut()}>
        Logout
      </button>
    </>
  )
}

export default Users
