import React from "react";
import HeroSlider from "../components/sliders/HeroSlider";
import CardStyle1 from "../components/productcard/CardStyle1";
import styled from "styled-components";
import CardStyle2 from "../components/productcard/CardStyle2";
import CardStyle3 from "../components/productcard/CardStyle3";
import CardStyle4 from "../components/productcard/CardStyle4";
import Blogcard from "../components/productcard/Blogcard";
import Footer from "../components/Footer";
import GridProductSlider from "../components/sliders/GridProductSlider1";
import GridProductSlider2 from "../components/sliders/GridProductSlider2";
import GridProductSlider3 from "../components/sliders/GridProductSlider3";
import ButtonStyle1 from "../components/Buttons/ButtonStyle1";
import ButtonStyle2 from "../components/Buttons/ButtonStyle2";
import ButtonOutline from "../components/Buttons/ButtonOutline";
import HeroSliderCard from "../components/productcard/HeroSliderCard";

const HomePage = () => {
  return (
    <Wrapper>
      <HeroSlider />

      <div className="container">
        <GridProductSlider />
      </div>
      <div className="container">
        <GridProductSlider2 />
      </div>
      <hr />
      <div className="container">
        <GridProductSlider3 />
      </div>
      <div className="discover">
        <div className="container">
          <div className="image">
            <img src="beautywomen.png" alt="" />
          </div>
          <div className="content">
            <div className="title"></div>
            <div className="subtitle"></div>
            <p>Unlock Your Beauty Potential: Discover a Beautiful You with Our New Skin Essentials – Rejuvenate, Nourish, and Embrace Your Natural Glow</p>
            <div className="product-grid">
              <div className="card">
                <div className="icon"></div>
                <div className="tile">Lasting Formulas</div>
              </div>
              <div className="card">
                <div className="icon"></div>
                <div className="tile">Face skin Protection</div>
              </div>
              <div className="card">
                <div className="icon"></div>
                <div className="tile">Eye care Product</div>
              </div>
            </div>
            <div className="buttons">
              <ButtonStyle2>shop now</ButtonStyle2>
              <ButtonOutline>read more</ButtonOutline>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Wrapper>
  );
};
const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 80px;
  padding-top: 65px;
  .cards {
    margin: 50px 0;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
  }
  .cards2 {
    margin: 50px 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }
  hr {
    border: none;
    height: 1px;
    background-color: rgba(0, 0, 0, 0.1);
  }
  @media only screen and (max-width:1113px){
    padding-top: 70px;
  }
  @media only screen and (max-width:600px){
    gap: 30px;
  }
`;
export default HomePage;
