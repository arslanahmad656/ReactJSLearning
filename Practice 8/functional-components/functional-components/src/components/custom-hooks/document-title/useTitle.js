import { useEffect } from 'react'

function useTitle(title) {
    useEffect(() => {
        console.log('Updating title using the usetTitle hook.');
        document.title = title
    }, [title])
}

export default useTitle
