import React, {useEffect, useState} from 'react';

export const Timer = ({time, onChange, timerKey}) => {
    const [seconds, setSeconds] = useState(time);

    useEffect(() => {
        setSeconds(time)
    }, [time])

    useEffect(() => {
        onChange(seconds);
    }, [seconds])

    useEffect(() => {
        const timer = setInterval(() => {
            setSeconds(sec => sec - 1);
        }, 1000)
        return () => {
            clearInterval(timer);
        }
    }, [timerKey])


    return (
        <span>До закрытия: {seconds}</span>
    )
}