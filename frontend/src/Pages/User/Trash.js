import React from 'react'
import { useEffect } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
const Trash = () => {
    const history = useHistory()
    useEffect(() => {
        history.push('/cart')
    }, [])

    return (
        <div>Trash</div>
    )
}

export default Trash