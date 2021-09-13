import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, ButtonGroup, Header, Icon, Label, Segment, SegmentInline } from "semantic-ui-react";

export default function NotFound() {
    const [countMarco, setCount1] = useState(0);
    const [countJavier, setCount2] = useState(0);
    const [countArturo, setCount3] = useState(0);
    const [countJesus, setCount4] = useState(0);

    return (
        <Segment inverted placeholder>
            <Header icon>
                <Icon name='search' />
                Oops! this don't usualy happend, and need consequences wich of our programers you think fault this is.
                <Segment inverted>
                    <ButtonGroup inverted >
                        <Button onClick={() => setCount1(countMarco + 1)} color='red' inverted size='big' content='Marco' />
                        <Label size='medium'> Exp.12 years, times fuck'd up {countMarco}</Label>
                        <Button onClick={() => setCount2(countJavier + 1)} color='yellow' inverted size='big' content='Javier' />
                        <Label size='medium'> Exp.15 years, times fuck'd up {countJavier}</Label>
                        <Button onClick={() => setCount3(countArturo + 1)} color='orange' inverted size='big' content='Arturo' />
                        <Label size='medium'> Exp.3 years, times fuck'd up {countArturo}</Label>
                        <Button onClick={() => setCount4(countJesus + 1)} color='blue' inverted size='big' content='Jesus' />
                        <Label size='medium'> Exp.10 years, times fuck'd up {countJesus}</Label>
                    </ButtonGroup>
                </Segment>
            </Header>
            <SegmentInline>
                <Button as={Link} to='/activities' inverted primary fluid>
                    Return to safe after you have voted.
                </Button>
            </SegmentInline>
        </Segment>
    )
}