import "./MobileNavigationButton.css";
import React, { useEffect, useRef } from 'react'

function MobileNavigationButton({ title, icon, selectedButton, setSelectedButton }) {

    const mobileNavigationButtonContainer = useRef(null)

    useEffect(() => {
        if (selectedButton && mobileNavigationButtonContainer.current && title === selectedButton) {
            mobileNavigationButtonContainer.current.classList.add('active');
        } else {
            mobileNavigationButtonContainer.current.classList.remove('active');
        }
    }, [selectedButton])

    return (
        <>
            <div className="bubble-section">
                <div className="mobile-navigation-button-container" ref={mobileNavigationButtonContainer} onClick={() => setSelectedButton(title)}>
                    <div className="icon-container">
                        {icon}
                    </div>
                </div>
            </div>
        </>
    )
}

export default MobileNavigationButton;