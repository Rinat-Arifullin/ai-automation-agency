import { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'

export const useMobileBreakpoint = () => {
    const [state, setState] = useState(false)
    const isAdaptive = useMediaQuery({
        maxWidth: 768,
    })

    // Нужно для работы на стороне клиента
    useEffect(() => {
        setState(isAdaptive)
    }, [isAdaptive])

    return state
}
