import { BreadcrumbItem, Breadcrumbs, Button, Card, Input } from '@nextui-org/react'
import signinimage from '../../../assets/pictures/signinimage.png'
import useAuth from '../../../hooks/useAuth'
import Logo from '../../../assets/pictures/Rectangle 22.png'
import { Toaster } from 'react-hot-toast'

export default function Signup() {
    const { sing_up, setEmail, setPassword, setUsername } = useAuth()
    return (
        <section className='py-5 px-2'>
            <div className='absolute'>
                <img src={Logo} alt="" className='h-[4rem] ' />
                <Breadcrumbs className='mt-4 text-tiny lg:mx-10'>
                    <BreadcrumbItem>Home</BreadcrumbItem>
                    <BreadcrumbItem><span className='text-[#ff9f1c]'>sign up</span></BreadcrumbItem>
                </Breadcrumbs>
            </div>
            <div className=''>
                <div className='grid grid-cols-12 '>
                    <div className='col-span-12 lg:col-span-5 '>
                        <Card className='shadow-none px-1 lg:px-10 mt-[12rem]'>
                            <div className=''>
                                <p className='text-2xl font-semibold text-gray-400'>Sign up</p>
                                <p className='text-tiny text-gray-500 my-2'>Create your account to access exclusive benefits, manage your bookings, and enjoy a personalized experience.</p>
                            </div>
                            <Input type='text' label="Username" className='mb-5' onChange={e => setUsername(e.target.value)}/>
                            <Input type='text' label="Email" className='mb-5' onChange={e => setEmail(e.target.value)}/>
                            <Input type='text' label="Password" onChange={e => setPassword(e.target.value)}/>
                            <div className='flex justify-center'>
                                <Button className='bg-[#ff9f1c] my-4 px-[10rem] lg:px-[13rem] text-white shadowed-btn py-[20pt]' onClick={sing_up}>Sign in</Button>
                            </div>
                            <p className='text-center text-gray-400 '>Already have an account? <span className='text-[#ff9f1c] font-semibold'>sign in</span></p>
                        </Card>
                    </div>

                    <Toaster />

                    <div className='hidden lg:block col-span-7 signup_section h-[95dvh]'>
                        <div className='flex justify-center my-[40%]'>
                            <p className='text-5xl px-4 text-white text-center'>Unlock exclusive perks and personalized comfort. Sign in now.</p>
                        </div>
                    </div>
                </div>
            </div>


        </section>
    )
}