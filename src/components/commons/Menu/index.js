import React from 'react'
import { Logo } from '../../../theme/Logo'
import { Button } from '../Button'
import { MenuWrapper } from './styles/MenuWrapper'


export default function Menu() {
    const links = [
        {
            text: 'Home',
            url: '/'
        },
        {
            text: 'FAQ',
            url: '/faq'
        },
        {
            text: 'Sobre',
            url: '/about'
        }
    ]

    return (
        <MenuWrapper>
            <MenuWrapper.LeftSide>
                <Logo />
            </MenuWrapper.LeftSide>
            <MenuWrapper.CentralSide>
                {links.map((link) => {
                    return (
                        <li key={link.url}>
                            <a href={link.url}>
                                {link.text}
                            </a>
                        </li>
                    )
                })}
            </MenuWrapper.CentralSide>
            <MenuWrapper.RightSide>
                <Button ghost variant="secondary.main">Entrar</Button>
                <Button variant="primary.main">Cadastrar</Button>
            </MenuWrapper.RightSide>
        </MenuWrapper>
    )
}