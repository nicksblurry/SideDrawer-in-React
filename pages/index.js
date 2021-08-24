import React, { useState } from 'react';
import styled from 'styled-components';
import SideDrawer from '../src/components/SideDrawer';

/* <******** 
        STYLED COMPONENTS
    ********> */
const Banner = styled.div`
    position: relative;
    background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("/image.jpg");
    width: 100%;
    height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;
`;

const Icon = styled.img`
    position: relative;
    height: 20px;
    width: auto;
    top: 6%;
    left: 5%;
    cursor: pointer;
`;


const BannerText = styled.div`
    position: absolute;
    font-size: 72px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
`;

const MainArea = styled.div`
    position: relative;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: row;
    width: 100%;
    height: 700px;
    background: ${props => props.sandybrown ? 'sandybrown' : props.cadetblue ? 'cadetblue' : '#fefefe'};
    color: ${props => props.lightColor ? '#fff' : '#262626'};
`;

const TextPart = styled.div`
    width: 65%;
    height: 80%;

    h1 {
      font-size: 50px;
    }

    p {
      font-size: 24px;
      line-height: 50px;
    }
`;


const Home = (props) => {
    /* <******** 
        state to track if SideDrawer is open or closed 
      ********> */
    const [showSideDrawer, setshowSideDrawer] = useState(false);

    /* <******** 
        function to handle close action on SideDrawer/Modal 
      ********> */
    const sideDrawerClosedHandler = () => {
        setshowSideDrawer(false);

        // Unsets Background Scrolling to use when SideDrawer/Modal is closed
        document.body.style.overflow = 'unset';
    }

    /* <******** 
        function to handle open action on SideDrawer/Modal 
      ********> */
    const showSidebar = () => { 
        setshowSideDrawer(true);

        // Disables Background Scrolling whilst the SideDrawer/Modal is open
        if (typeof window != 'undefined' && window.document) {
            document.body.style.overflow = 'hidden';
        }
    }

  return ( 
    <>
    <SideDrawer open={showSideDrawer} closed={sideDrawerClosedHandler}/>
    
    <Banner id="home">
      <Icon src='/hamburger.svg' onClick={showSidebar}></Icon>
      <BannerText>Welcome...</BannerText>
    </Banner>

    <MainArea id="about">
      <TextPart>
        <h1>About Area</h1>
        <p>
          et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut
          ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae
          porro eius odio et labore et velit aut ullam et saepe reiciendis
          voluptatem adipisci\nsit amet autem assumenda provident rerum
          culpa\nquis hic commodi nesciunt quo et expedita modi cum officia vel
          magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed
          accusamus veritatis error delectus reiciendis molestiae occaecati non
          minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui
          neque voluptates ut commodi qui incidunt\nut animi commodi rem tenetur
          doloremque ipsam iure\nquis sunt voluptatem rerum illo velit
        </p>
      </TextPart>
    </MainArea>

    <MainArea id="portfolio" sandybrown lightColor>
      <TextPart>
        <h1>Portfolio Area</h1>
        <p>
          ut aspernatur corporis harum nihil quis provident sequi\nmollitia
          nobis aliquid molestiae\nperspiciatis quo et expedita modi cum officia
          vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod
          sed accusamus veritatis error delectus reiciendis molestiae occaecati
          non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel
          qui neque voluptates ut commodi qui incidunt\nut animi commodi et ea
          nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et
          doloremque molestiae repudiandae veniam quaerat sunt sed\nalias aut
          fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus
          quis\nest aut tenetur dolor neque
        </p>
      </TextPart>
    </MainArea>

    <MainArea id="services">
      <TextPart>
        <h1>Services Area</h1>
        <p>
          dolore dignissimos aperiam dolorem qui eumobis aliquid
          molestiae\nperspnfacilis quis excepturi\nipsam ut ui\nmolli ccusamus
          veritatis error delectus reiciendis molestiae occaecati non minima
          eveniet qui voluptatibus\naccusamus in eum beatae sit\nvtia nobis
          aliquid molestiae\nperspicommodi dolor voluptatum modi aut vitae
        </p>
      </TextPart>
    </MainArea>

    <MainArea id="contact" cadetblue lightColor>
      <TextPart>
        <h1>Contact Area</h1>
        <p>
          quonquos veniam quod sed accusamus veritatis error delectus reiciendis
          molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in
          eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut
          animi commodi sit\nquos veniam quod sed accusamus veritatis error
          delectus reiciendis molestiae occaecati non minima eveniet qui
          voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut
          commodi qui incidunt\nut animi commodi
        </p>
      </TextPart>
    </MainArea>
    </>
   );
}
 
export default Home;