import React from 'react'
import ButtonContainer from './ButtonContainer';

function PortalContainer() {
    const handleClick = () => alert('You clicked the button inside another component.');
    return (
        <div onClick={handleClick}>
            This is a div which contains a component. The contained component is a child in virtual-DOM but not in browser-DOM. Still, the event bubbled will propagate to the virtual ancestor.
            <ButtonContainer />
        </div>
    )
}

export default PortalContainer
