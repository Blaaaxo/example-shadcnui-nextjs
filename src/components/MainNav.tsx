import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

export default function MainNav({
    className,
    ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav className={cn("flex items-center space-x-4 lg:space-x-6", className)}
        {...props}
    >
      <Link 
        href={'/'}
        className='text-sm font-medium transition-colors hover:text-primary'
      >
        Overview
      </Link>
      <Link 
        href={'/'}
        className='text-sm font-medium text-muted-foreground transition-colors hover:text-primary'
      >
        Customers
      </Link>
      <Link 
        href={'/'}
        className='text-sm font-medium text-muted-foreground transition-colors hover:text-primary'
      >
        Products
      </Link>
      <Link 
        href={'/'}
        className='text-sm font-medium text-muted-foreground transition-colors hover:text-primary'
      >
        Sttings
      </Link>
        
    </nav>
  )
}
