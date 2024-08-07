import React, { useContext } from 'react'
import { userContext } from './CreateContext'

function CompC() {
    const user=useContext(userContext)
    console.log(user)

  return (
    <div>
      {user.user.name}
    </div>
  )
}

export default CompC
