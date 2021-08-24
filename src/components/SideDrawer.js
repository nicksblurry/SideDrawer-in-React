import React from 'react';
import styled from 'styled-components';


const Anchor = styled.a`
    text-decoration: none;
    cursor: pointer;
    color: inherit;
`;

const BlurBackground = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    padding: 1rem;
    left: 0;
    top: 0;
    backdrop-filter: blur(8px);
    background-color: rgba(0, 0, 0, 0.1);
    opacity: 1;
    z-index: 2147483636;
`;

const ClosedSideDrawer = styled.div`
    animation: ${props => props.open ? 'null' : 'slideIn 0.5s ease-in-out' };

    @keyframes slideIn{
        from{
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(-100%);
            opacity: 0;
        }
    }
`;

const OpenSideDrawer = styled.div`
    display: ${props => props.open ? 'block' : 'none'};
    box-sizing: border-box;
    position: fixed;
    width: 360px;
    max-width: 70%;
    height: 100%;
    left: 0;
    top: 0;
    background-color: #FFFFFF;
    padding: 3rem 2rem;
    overflow: auto;
    z-index: 2147483636;
    animation: ${props => props.open ? 'slideOut 0.5s ease-in-out' : null };

    @keyframes slideOut{
        from{
            transform: translateX(-100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @media (max-width: 768px) {
      padding: 1rem 2rem;
    }
`;

const Icon = styled.img`
    height: 18px;
    width: auto;
    margin: 6px 0 12px;
    cursor: pointer;

    @media (max-width: 768px) {
        height: 14px;
        width: auto;
        margin: 6px 0;
    }
`;

const Nav = styled.ul`
    margin: 2rem 0;
    padding: 0;
`;

const NavItems = styled.li`
    display: flex;
    justify-content: start;
    align-items: center;
    margin: 1rem 0 2rem;
    list-style: none;
    font-size: 21px;
    line-height: 20px;
    color: #393939;
    
    @media (max-width: 768px) {
        padding: 6px 0px;
    }
`;


const SideDrawer = (props) => {

    return ( <>
            { props.open ?
              (
              <>
                <BlurBackground onClick={props.closed}/>
                
                <OpenSideDrawer open={props.open}>
                  <nav>
                      <Icon src='/cross.svg' onClick={props.closed}/>
                      <Nav>
                        <NavItems>
                            <Anchor href="#home" onClick={props.closed}>
                                Home
                            </Anchor>
                        </NavItems>

                        <NavItems>
                            <Anchor href="#about" onClick={props.closed}>
                                About
                            </Anchor>
                        </NavItems>

                        <NavItems>
                            <Anchor href="#portfolio" onClick={props.closed}>
                                Portfolio
                            </Anchor>
                        </NavItems>

                        <NavItems>
                            <Anchor href="#services" onClick={props.closed}>
                                Services
                            </Anchor>
                        </NavItems>

                        <NavItems>
                            <Anchor href="#contact" onClick={props.closed}>
                                Contact
                            </Anchor>
                        </NavItems>
                      </Nav>
                  </nav>
                </OpenSideDrawer>
              </>)
              : 
              <ClosedSideDrawer open={props.open}/> }
        </> );
}
 
export default SideDrawer;