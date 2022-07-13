import React, { useLayoutEffect, useRef } from "react";
import 'teamfe-lit-user-card'
import { User } from "teamfe-lit-user-card";

interface Props {
    customEvent: () => void,
    user: User,
    isDisabled: boolean
}
const UserCard: React.FC<Props> = ({customEvent, user, isDisabled}) => {

    useLayoutEffect(() => {
        const current = webComponentRef.current;
        current?.addEventListener('customEvent', customEvent)
        return () => current?.removeEventListener('customEvent', customEvent)
    })
    const webComponentRef = useRef<HTMLInputElement | null>(null);

    return (
        <user-card 
            user={JSON.stringify(user)} 
            ref={webComponentRef} 
            {... (isDisabled ? {disabled: true} : {})}></user-card>
    )
}

export default UserCard