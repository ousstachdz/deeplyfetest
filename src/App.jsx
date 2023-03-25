import React, { useEffect, useState } from 'react'
import axios from 'axios'
import UserCard from './componsents/UserCard'

export default function App() {
  const [users, setUsers] = useState(null)
  useEffect(() => {
    axios.get('https://randomuser.me/api/?results=50').then((response) => {
      return setUsers(response.data.results)
    })
  }, [])

  return (
    <div className=' flex flex-col items-center justify-center w-full'>
      <div>
        <h1>{window.location.hostname}</h1>
      </div>
      <div className='w-96'>
        {users?.map((user) => {
          if (user.picture.large != null) {
            return (
              <UserCard key={user.id.value + user.name.first} user={user} />
            )
          }
        })}
      </div>
    </div>
  )
}
