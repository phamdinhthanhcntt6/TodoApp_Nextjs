import Logo from '@/components/global/logo'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import VerifyCodeForm from '@/components/verify-code/verify-code-form'
import { MoveLeft } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
    title: 'Verify',
}

const VerifyCodePage = () => {
    return (
        <Card className='w-full max-w-sm max-md:p-2'>
            <Link href={'/register'} className='px-4'>
                <Button variant={'ghost'}>
                    <MoveLeft />
                </Button>
            </Link>
            <CardHeader className='space-y-1'>
                <Logo />
                <CardTitle className='text-center'>Verify Email</CardTitle>
                <CardDescription className='text-center'>
                    Please enter the verification code sent to your email address.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <VerifyCodeForm />
            </CardContent>
            <CardFooter className="flex justify-center items-center text-center">
                <div className="text-sm">
                    Do you have an account?&nbsp;
                    <Link className="font-bold" href="/login">
                        Login
                    </Link>
                </div>
            </CardFooter>

        </Card>
    )
}

export default VerifyCodePage
