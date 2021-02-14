import React from 'react'
import { Logo } from '../../../../theme/Logo'
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
                        <li>
                            <a href={link.url}>
                                {link.text}
                            </a>
                        </li>
                    )
                })}
            </MenuWrapper.CentralSide>
            <MenuWrapper.RightSide>
                <button>Entrar</button>
                <button>Cadastrar</button>
            </MenuWrapper.RightSide>
        </MenuWrapper>
    )
}