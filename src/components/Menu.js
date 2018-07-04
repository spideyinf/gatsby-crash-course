import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const MenuWrapper = styled.div`
  background: #f4f4f4;
  padding-top: 10px;

  .menu-list {
    list-style: none;
    display: flex;
    justify-content: space-evenly;
  }

  .menu-list-item {
    color: coral;
    text-decoration: none;
  }
`

const Menu = () => (
  <MenuWrapper>
    <ul className="menu-list">
      <li>
        <Link className="menu-list-item" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="menu-list-item" to="/page-2">
          Page2
        </Link>
      </li>
      <li>
        <Link className="menu-list-item" to="/blog">
          Blog
        </Link>
      </li>
    </ul>
  </MenuWrapper>
)

export default Menu
