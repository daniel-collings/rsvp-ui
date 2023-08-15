'use client'

import { FormEvent, useRef, useState } from 'react'

interface IFormConfirmation {
  name: string
  attending: boolean
}

export default function Home() {
  const [attendance, setAttendance] = useState<boolean>(false)
  const [rsvpConfirmation, setRsvpConfirmation] = useState<IFormConfirmation | undefined>(undefined)

  const fnameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const contactNoRef = useRef<HTMLInputElement>(null)

  async function sendRsvp(e: FormEvent) {
    e.preventDefault()

    if ([fnameRef.current, emailRef.current, contactNoRef.current].includes(null)) return

    setRsvpConfirmation({
      name: fnameRef.current?.value as string,
      attending: attendance
    })
  }

  return (
    <div>
      <ul role="list" className="space-y-4 py-8">
        <li className="overflow-hidden bg-white px-4 py-4 shadow sm:rounded-md sm:px-6">
          <div className="border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
            <h2 className="text-base font-semibold leading-6 text-gray-900">Wedding Details</h2>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-3 py-5 gap-8 text-center'>
            <p>Date</p>
            <p>Time</p>
            <p>Location</p>
          </div>
        </li>

        <li className="overflow-hidden bg-white px-4 py-4 shadow sm:rounded-md sm:px-6">
          <div className="border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
            <h2 className="text-base font-semibold leading-6 text-gray-900">RSVP Form</h2>
          </div>
          {rsvpConfirmation ? (
            <div className='py-5'>
              <h2>Thank you {rsvpConfirmation.name} for updating your RSVP.</h2>
              {rsvpConfirmation.attending ?
                <p>We&apos;re really excited and look forward to seeing you on our special day.</p> :
                <p>We&apos;re sorry to hear you&apos;re unable to attend.</p>
              }
            </div>
          ) :
            <form onSubmit={sendRsvp} className='grid grid-flow-row gap-2 py-5 text-center sm:grid-cols-2 md:grid-cols-4 items-center'>
              <label htmlFor='fname'>Name</label>
              <input ref={fnameRef} type='text' name='fname' required className='p-2 rounded-md mx-2 bg-slate-50 border-slate-200 border-2' />

              <label htmlFor='email'>Email</label>
              <input ref={emailRef} type='email' name='number' required className='p-2 rounded-md mx-2 bg-slate-50 border-slate-200 border-2' />

              <label htmlFor='contactNo'>Contact No.</label>
              <input ref={contactNoRef} type='number' name='contactNo' required className='p-2 rounded-md mx-2 bg-slate-50 border-slate-200 border-2' />

              <label htmlFor='attendance'>Attending?</label>
              <fieldset className="mt-4">
                <legend className="sr-only">Attending?</legend>
                <div className="space-y-4 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
                    <div className="flex items-center">
                      <input
                        id='attending-yes'
                        name="notification-method"
                        type="radio"
                        onChange={() => setAttendance((prev) => !prev)}
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                      <label htmlFor='attending-yes' className="ml-3 block text-sm font-medium leading-6 text-gray-900">
                        Yes, of course! 🎉
                      </label>
                    </div>
                </div>
                <div className="space-y-4 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
                    <div className="flex items-center">
                      <input
                        id='attending-yes'
                        name="notification-method"
                        type="radio"
                        onChange={() => setAttendance((prev) => !prev)}
                        defaultChecked={true}
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                      <label htmlFor='attending-yes' className="ml-3 block text-sm font-medium leading-6 text-gray-900">
                        Sorry, I can&apos;t make it 😞
                      </label>
                    </div>
                </div>
              </fieldset>

              {attendance && (
                <div className='col-span-full'>
                  <input ref={contactNoRef} type='number' name='contactNo' required />
                  <p>Options for food</p>

                </div>
              )}

              <button type='submit' className='bg-pink-500 px-6 py-2 rounded-md col-span-full max-w-sm w-52 mt-8 mx-auto transition-colors ease-in-out duration-500 text-white border-2 border-pink-500 hover:text-pink-500 hover:bg-white hover:border-pink-500'>RSVP 📤</button>
            </form>
          }
        </li>

      </ul>





    </div>
  )
}
