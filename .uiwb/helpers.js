import {useEffect} from 'react'

export const useOutsideClick = (ref, callback) => {
    const handleClick = e => {
        if (ref.current && !ref.current.contains(e.target)) {
            callback()
        }
    }

    useEffect(() => {
        document.addEventListener("click", handleClick)

        return () => {
            document.removeEventListener("click", handleClick)
        }
    })
}

export const capitalize = st => st[0].toUpperCase() + st.slice(1)