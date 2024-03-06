"use client"; // This is a client component 👈🏽

import {useState} from "react";
import {usePathname} from 'next/navigation'


export const Form = ({ initialRef}) => {

    const pathname = usePathname();

    const initialState = {
        name: '',
        email: '',
        contactMessage: '',
        location:''
    };

    const [formState, setFormState] = useState(initialState);
    const [toastMessage, setToastMessage] = useState({
        type: '',
        message: ''
    });

    const [campaignState, setCampaignState] = useState(false)

    const clearFormState = () => {
        setFormState({ ...initialState });
    };

    const handleContactFormSubmit = async (e) => {
        e.preventDefault()

        if (pathname.startsWith("/campaign/")){
            setCampaignState(true)
        }

        const location = campaignState === true ? 'campaign-usAudit-blueprospect.com' : 'blueprospect.com'
        const endpoint =
            "https://ke37371vfe.execute-api.us-east-1.amazonaws.com/default/sendContactEmail";
        // We use JSON.stringify here so the data can be sent as a string via HTTP
        const body = JSON.stringify({
            senderName: formState.name,
            senderEmail: formState.email,
            message: formState.contactMessage,
            senderLocation: location
        });
        const requestOptions = {
            method: "POST",
            body
        };

        const { name, email} = formState

        if (name && email) {
            try {
                fetch(endpoint, requestOptions)
                    .then((res) => {
                    if (res.status === 200 || 500) {
                        setToastMessage({ message:(

                                <div className={`${pathname.startsWith("/campaign/")  ? 'hidden' : 'block'} absolute bottom-0 text-bg100 -mb-16`}>
                                    Thank you for reaching out to us.  We&apos;ll respond to you shortly!  Have a great day.
                                </div>
                            )})
                        clearFormState();
                    }
                })
            } catch (e) {
                setToastMessage({message:(
                        <div className="text-platinum-900 font-bold absolute bottom-0 -mb-16">
                            Deepest apologies.  There was an error with your request.  Please try again later.
                        </div>
                    )})
            }
        } else {
            setToastMessage({message:(
                    <div className="text-platinum-900 font-bold absolute -bottom-1 -mb-16 ">
                        Please verify all fields are filled out.
                    </div>
                )})
        }
    };

    return (
        <>
        <form onSubmit={handleContactFormSubmit}>
            <div className="flex flex-col relative">

                {/*show message to user*/}
                {toastMessage.message}

                <div className="flex flex-col">
                    <label>
                        Name*
                    </label>
                    <input
                        ref={initialRef}
                        className="text-rich_black-200 border py-3 px-4 mb-4"
                        placeholder="Enter your name"
                        value={formState.name}
                        onChange={(e) =>
                            setFormState({ ...formState, name: e.target.value })
                        }
                    />
                </div>
                <div className="flex flex-col">
                    <label>
                        Email*
                    </label>
                    <input
                        className="text-rich_black-200 border py-3 px-4 mb-4"
                        placeholder="yourname@email.com"
                        type="email"
                        value={formState.email}
                        onChange={(e) =>
                            setFormState({ ...formState, email: e.target.value })
                        }
                    />
                </div>
                <div >
                    <div className="">
                        <label
                            className="uppercase tracking-wide text-xs">
                            Comments?
                        </label>
                        <div>
                        <textarea
                            className="text-rich_black-200  w-full border border-blue800 py-3 px-4 mb-4 "
                            rows="2"
                            value={formState.contactMessage}
                            onChange={(e) =>
                                setFormState({ ...formState, contactMessage: e.target.value })
                            }
                        />
                        </div>
                    </div>
                </div>
                <div className="">
                    <button
                        type="submit"
                        className="bg-vanilla-200 hover:bg-vanilla-100 text-xs text-platinum hover:text-platinum-300 uppercase px-4 py-3 rounded-lg">
                        Submit
                    </button>
                </div>
            </div>
        </form>
        </>
    )
}