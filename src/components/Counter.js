import { Button, Input } from '@chakra-ui/react'

import { memo } from "react";

import useCounter from "../hooks/useCounter";

const Counter = () => {
    const { defaultValue, count, increment, decrement, setCount } = useCounter();

    const handleChange = ({ target: { value } }) => {
        if (value !== "" && value < defaultValue) {
            initial();
        } else {
            setCount(+value);
        }
    }

    const initial = () => setCount(defaultValue);

    const isDisabled = count <= defaultValue;

    return (
        <div>
            <Button colorScheme='teal' variant='outline' onClick={decrement} disabled={isDisabled}>
                -
            </Button>
            <Input htmlSize={4} width='auto' value={count} onChange={handleChange} />
            <Button colorScheme='teal' variant='outline' onClick={increment}>
                +
            </Button>
        </div>
    );
};

export default memo(Counter);