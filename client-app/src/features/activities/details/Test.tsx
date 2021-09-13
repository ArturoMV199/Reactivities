import React, { useEffect, useState } from "react";
import { Button, Label, Segment } from "semantic-ui-react";

export default function TestFunction() {
    const List = [1, 2, 3, 4, 5, 6, 7, 8, '', ''];
    const [count, setCount] = useState(190);

    return (
        <>
            <h1>Hello World!</h1>
            <Label size='massive'>This {count} many times</Label>
            <Segment>
                <Button onClick={() => setCount(count + 1)}>
                    CLICK ME
                </Button>
            </Segment>
        </>
        
    )
}