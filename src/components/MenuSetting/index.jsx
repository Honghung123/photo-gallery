import React, { useState } from "react";

export default function MenuSetting({ children, style }) {
    const [openSetting, setOpenSetting] = useState(false);
    const handleOpenSettings = () => {
        setOpenSetting(!openSetting);
    };
    return (
        <div className="relative">
            <button onClick={() => handleOpenSettings()}>
                <img
                    className="w-6 h-6 hover:rotate-180 transition-all duration-500"
                    src="https://www.svgrepo.com/show/13688/settings.svg"
                    alt=""
                />
            </button>
            {openSetting && <div style={style}>{children}</div>}
        </div>
    );
}
