import React, { useEffect } from "react";

export const HeavyJobComponent = ({num, numObj}) => {

    useEffect(() => {
        console.log("HappyJobComponent 랜더링")
    })

    useEffect(() => {
        console.log("num이 바뀌면 heavyPlus가 실행이 되요.")
        heavyPlus();
    }, [numObj])

    const heavyPlus = () => {
        let total = 0;
        for(let i = 0; i<123456; i++){
            total += numObj.num;
        }
        return total+numObj.num;
    }

    const result = heavyPlus();

    return (
        <p>"{numObj.num}"을 더해서 만든 연산 결과는 <b>{result}</b> 입니다.</p>
    )
}

export const HeavyJobComponent2 = ({num}) => {
    useEffect(() => {
        console.log("HappyJobComponent2 랜더링")
    })

    useEffect(() => {
        console.log("num이 바뀌면 heavyMuti가 실행이 되요.")
        heavyMuti();
    }, [num])

    const heavyMuti = () => {
        let total = 0;
        for(let i = 0; i<123456; i++){
            total += num;
        }
        return total*num;
    }

    const result = heavyMuti();

    return (
        <p>"{num}"을 곱해서 만든 연산 결과는 <b>{result}</b> 입니다.</p>
    )
}

export const MemoHeavyJobComponent = React.memo(HeavyJobComponent)
export const MemoHeavyJobComponent2 = React.memo(HeavyJobComponent2)