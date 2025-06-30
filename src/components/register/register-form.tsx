"use client"

import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { RegisterBody, RegisterBodyType } from '@/schema/register.schema'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useRouter } from 'next/navigation'

const RegisterForm = () => {

    const router = useRouter()

    const form = useForm<RegisterBodyType>({
        resolver: zodResolver(RegisterBody),
        defaultValues: { email: '' },
    })

    const onSubmit = (values: RegisterBodyType) => {
        console.log(values)
        router.push('/verify-code')
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className='flex flex-col gap-y-6'>
                    <FormField control={form.control} name='email' rules={{ required: true, validate: (value) => value.includes('@') }} render={({ field }) => (
                        <FormItem>
                            <FormLabel>
                                Email
                            </FormLabel>
                            <FormControl>
                                <Input placeholder='example@gmail.com' {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>)}
                    />
                    <Button type='submit'>Register</Button>
                </div>
            </form>
        </Form>
    )
}

export default RegisterForm
