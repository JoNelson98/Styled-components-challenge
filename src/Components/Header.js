import React from "react"
import { Button } from "./Styles/Button.styled"
import { Container } from "./Styles/Container.styled"
import { Image, Logo, Nav, StyledHeader } from "./Styles/Header.styled"
import logoImg from "../images/logo.svg"
import picture from "../images/illustration-mockups.svg"
import { Flex } from "./Styles/Flex.styled"

export default function Header() {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src={logoImg} alt="" />
          <Button>Try It Free</Button>
        </Nav>
        <Flex>
          <div>
            <h1>Build The Community Your Fans WILL Love</h1>
            <p>
              Huddle re-imagines the way we build communities. You have a voice, but so does your audience.
              Create connections with your users as you engage in genuine discussion.
            </p>
            <Button bg="#ff0099" color="#fff">
              Get Started For Free
            </Button>
          </div>
          <Image src={picture} alt="" />
        </Flex>
      </Container>
    </StyledHeader>
  )
}
