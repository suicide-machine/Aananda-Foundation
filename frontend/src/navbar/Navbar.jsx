import React from "react"
import DropdownMenu from "./MenuItems"
import { Link } from "react-router-dom"
import Logo from "../assets/logo.jpg"

const Navbar = () => {
  return (
    <header id="" className=" bg-gray-200 site-header">
      <div class="page-main-nav">
        <div class="container container--nav container--xl">
          <div class="site-header__split">
            <a
              href="https://google.com"
              class="site-logo"
              aria-label="David Suzuki Foundation"
              target="_blank"
            >
              <img src={Logo} alt="Logo" className="w-24 h-24 rounded-full" />
            </a>

            <div class="site-header__main">
              <nav class="site-util">
                <ul class="site-util__menu">
                  <li>
                    <a
                      href="#site-search"
                      class="js-toggle-search"
                      data-target="#site-search"
                      data-toggle="true"
                    >
                      Search
                    </a>
                  </li>

                  <li>
                    <a class="js-language-toggle" href="https://google.com">
                      Français
                    </a>
                  </li>
                  <li>
                    <a href="https://google.com">Subscribe</a>
                  </li>
                </ul>
              </nav>

              <nav class="site-nav">
                <ul class="site-nav__menu">
                  <li class="dropdown js-dropdown  menu-item menu-item-type-post_type menu-item-object-page menu-item-255 menu-item-has-children">
                    <Link to={"/our-work"}>Our Work</Link>
                  </li>

                  <li class="dropdown js-dropdown  menu-item menu-item-type-post_type menu-item-object-page menu-item-255 menu-item-has-children">
                    <Link to={"/about-us"}>About Us</Link>
                  </li>

                  <li class="dropdown js-dropdown  menu-item menu-item-type-post_type menu-item-object-page menu-item-255 menu-item-has-children">
                    <Link to={"/about-us"}>About Us</Link>
                  </li>

                  <li class="dropdown js-dropdown  menu-item menu-item-type-post_type menu-item-object-page menu-item-255 menu-item-has-children">
                    <Link to={"/about-us"}>About Us</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
