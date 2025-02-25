import { useRef } from "react"

export const Input = () => {
    const refText = useRef("");

    return(
        <>
            <input ref={refText}/>
            <button onClick={()=> alert(refText.current.value)}>클릭!</button>
        </>
    )
}