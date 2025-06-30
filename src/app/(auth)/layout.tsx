import React, { Suspense } from 'react'

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div lang='en' suppressHydrationWarning>
            <div className='flex items-center justify-center h-screen p-4'>
                <Suspense fallback={<p>Loading...</p>}>
                    {children}
                </Suspense>
            </div>
        </div>
    )
}

export default AuthLayout
