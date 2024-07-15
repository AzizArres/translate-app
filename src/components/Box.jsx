/* eslint-disable react/prop-types */
import React from "react"
import speaker from "/src/assets/sound_max_fill.svg"
import copy from "/src/assets/content_copy_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.png"

export default function Box(props){

    const [translatedLanguage, setTranslatedLanguage] = React.useState("")
    console.log(translatedLanguage)
    return(
        <div className="box">
            {
                props.type === "translated" ? 
                <div className="translated">
                        <div className="languages">
                            <h3>Detect Language</h3>
                            <button onClick={() => setTranslatedLanguage("english")} className={translatedLanguage === "english" ? "selected-language" : "language-button"}>English</button>
                            <button onClick={() => setTranslatedLanguage("french")} className={translatedLanguage === "french" ? "selected-language" : "language-button"}>French</button>
                            <button onClick={() => setTranslatedLanguage("spanish")} className={translatedLanguage === "spanish" ? "selected-language" : "language-button"}>Spanish</button>
                        </div>
                        <textarea name="textArea" id="" className="text-area" maxLength="500">
                            Hello, how are you?
                        </textarea>
                        <div className="audio-and-copy">
                            <div className="audio-and-copy-buttons">
                            <button>
                                <img src={speaker} alt="" />
                            </button>
                            <button>
                                <img src={copy} alt="" />
                            </button>
                            </div>
                            <h5 className="caracters-count">19/500</h5>
                            <button className="translate-button">
                                Translate
                            </button>
                        </div>
                </div>
                :
                <div className="translator">
                    <div className="languages">
                        <h3>Detect Language</h3>
                        <button className="language-button">English</button>
                        <button className="language-button">French</button>
                        <button className="language-button">Spanish</button>
                    </div>
                    <textarea name="" id="" className="text-area" maxLength="500">
                        Hello, how are you?
                    </textarea>
                    <div className="audio-and-copy">
                        <button>
                            <img src={speaker} alt="" />
                        </button>
                        <button>
                            <img src={copy} alt="" />
                        </button>
                    </div>
                </div>
            }
        </div>
    )
}