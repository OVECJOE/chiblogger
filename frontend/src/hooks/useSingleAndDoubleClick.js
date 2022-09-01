import { useState, useEffect } from 'react';

function useSingleAndDoubleClick(
    singleClickCb, doubleClickCb,
    objectId, delay = 250
) {
    const [click, setClick] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            // simple click
            if (click === 1) singleClickCb(objectId);
            setClick(0);
        }, delay);

        // the duration between this click and the previous one
        // is less than the value of delay = double-click
        if (click === 2) doubleClickCb(objectId);

        return () => clearTimeout(timer);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [click, objectId]);

    return () => setClick(prev => prev + 1);
}

export default useSingleAndDoubleClick;