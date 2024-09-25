import { createContext, useState } from "react";

export const UiContext = createContext();
export default function UserExperinceProvider( { children } ) {

    const [roomAdded, setRoomAdded] = useState(false)

    return (
        <UiContext.Provider value={{
            setRoomAdded,
            roomAdded
        }}>
            {children}
        </UiContext.Provider>
    )
}