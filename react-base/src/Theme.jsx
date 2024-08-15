import React, { useState } from "react"

export default function Theme(props) {
    // const [currentTheme, setCurrentTheme] = useState("light")
    const {currentTheme ,setCurrentTheme} = props

    return (
        <div className={`h-screen ${currentTheme == "dark" ? "dark" : ""}`}>
            {currentTheme == "dark" ? (
                <button
                    onClick={() => {
                        setCurrentTheme("light")
                    }}
                >
                    light
                </button>
            ) : (
                <button
                    onClick={() => {
                        setCurrentTheme("dark")
                    }}
                >
                    dark
                </button>
            )}

            <p>current theme: {currentTheme}</p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus necessitatibus facilis nesciunt quaerat
                excepturi, aut expedita ullam sit pariatur tenetur temporibus officiis aliquid fugit fugiat quas placeat
                mollitia totam cumque.
            </p>
        </div>
    )
}
