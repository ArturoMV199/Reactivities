import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Header, Image, Segment } from "semantic-ui-react";

export default function HomePage() {
    return (
        <Segment inverted textAlign='center' vertical className='masthead'>
            <Container text>
                <Header>
                    <Image size='massive' src='/assets/logo.png' alt='logo' style={{ marginBotton: 12 }} />
                </Header>
                <Header as='h2' inverted content='Welcome to Pelos duros' />
                <Button as={Link} to='/activities' size='huge' inverted>
                    Take OOONNN MEEEEE!
                </Button>
            </Container>
        </Segment>
    )
}