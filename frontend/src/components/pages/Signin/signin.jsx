import { BreadcrumbItem, Breadcrumbs, Button, Card, Input, Modal, ModalBody, ModalContent, ModalFooter, useDisclosure } from '@nextui-org/react'
import signinimage from '../../../assets/pictures/signinimage.png'
import useAuth from '../../../hooks/useAuth'
import Logo from '../../../assets/pictures/Rectangle 22.png'
import toast, { Toaster } from 'react-hot-toast'
import { useState } from 'react'

export default function Signin() {
    const { sing_up, setEmail, setPassword, setUsername, sign_in , forgot_password} = useAuth();
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    

    return (
        <section className='py-5 px-2'>
            <div className='absolute'>
                <img src={Logo} alt="" className='h-[4rem] ' />
                <Breadcrumbs className='mt-4 text-tiny lg:mx-10'>
                    <BreadcrumbItem>Home</BreadcrumbItem>
                    <BreadcrumbItem><span className='text-[#ff9f1c]'>sign in</span></BreadcrumbItem>
                </Breadcrumbs>
            </div>
            <div className=''>
                <div className='grid grid-cols-12 '>
                    <div className='col-span-12 lg:col-span-5 '>
                        <Card className='shadow-none px-1 lg:px-10 mt-[12rem]'>
                            <div className=''>
                                <p className='text-2xl font-semibold text-gray-400'>Sign in</p>
                                <p className='text-tiny text-gray-500 my-2'>Welcome back! Sign in to manage your bookings, access exclusive offers, and enjoy a tailored experience just for you.</p>
                            </div>
                            <Input type='text' label="Email" className='mb-5' onChange={e => setEmail(e.target.value)} />
                            <Input type='text' label="Password" onChange={e => setPassword(e.target.value)} />
                            <p className='text-end pt-3 font-semibold text-[#ffa01cda]'>
                                <span className='cursor-pointer' onClick={() => {
                                    onOpen()
                                }}>Forgot password?</span>
                            </p>
                            <div className='flex justify-center'>
                                <Button className='bg-[#ff9f1c] my-4 px-[10rem] lg:px-[13rem] text-white shadowed-btn py-[20pt]' onClick={sign_in}>Sign in</Button>
                            </div>
                            <p className='text-center text-gray-400 '>Don't have an account? <span className='text-[#ff9f1c] font-semibold'>sign up</span></p>
                        </Card>
                        <Modal isOpen={isOpen} onOpenChange={onOpenChange} backdrop='blur'>
                            <ModalContent className='p-3'>
                                {(onClose) => (
                                    <>
                                        <ModalBody>
                                            <div>
                                                <p className='text-lg'>Reset Your Password</p>
                                                <p className='text-tiny text-gray-500'>Enter your email address below to receive a password reset link.</p>
                                            </div>
                                            <Input type='email' label="Email"/>
                                        </ModalBody>
                                        <ModalFooter>
                                            <Button color="danger" variant="light" onPress={onClose}>
                                                Close
                                            </Button>
                                            <Button color="primary" onPress={() => {
                                                onClose();
                                                forgot_password()
                                            }}>
                                                Send
                                            </Button>
                                        </ModalFooter>
                                    </>
                                )}
                            </ModalContent>
                        </Modal>
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