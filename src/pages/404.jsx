import Link from 'next/link'
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'


const NotFound = () => {
    const router = useRouter();
    useEffect(()=>{
        setTimeout(()=>{
            router.back()
        }, 3000)
    })
  return (
    <div className='notFound' > 
    <div>Ooops..</div>
    <div>That page was not found</div>
    <div>Please go back to the <Link href="/">Homepage</Link></div>
    </div>

  )
}

export default NotFound