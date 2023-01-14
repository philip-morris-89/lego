import React from "react";
import Banner from "../../Ui/Banner/Banner";

function Banners() {
  return (
    <div>
      <Banner
        size="large"
        textcolor="white"
        backgroundcolor="black"
        position="left"
        title="Banner title Lorem ipsum dolor amet ipsum."
        paragraph="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos, ducimus!"
        imgMobile="https://www.lego.com/cdn/cs/set/assets/blt8a95702fdb4260d8/75331-Exclusive-202210-VIP-Hero-Standard-Small.jpg?fit=crop&format=jpg&quality=80&width=600&height=600&dpr=2"
        imgTablet="https://www.lego.com/cdn/cs/set/assets/bltf8f58f8e70b40985/75331-Exclusive-202210-VIP-Hero-Standard-Medium.jpg?fit=crop&format=jpg&quality=80&width=900&height=350&dpr=3"
        imgDesktop="https://www.lego.com/cdn/cs/set/assets/bltd44334316ded064e/75331-Exclusive-202210-VIP-Hero-Standard-Large.jpg?fit=crop&format=jpg&quality=80&width=1600&height=500&dpr=3"
        imgLogo="https://www.lego.com/cdn/cs/set/assets/bltfb987f8b1414454f/starWars_logo_black_stroke_300w.png?format=png&height=60&dpr=2"
        imgBrand="https://www.lego.com/cdn/cs/set/assets/bltfb987f8b1414454f/starWars_logo_black_stroke_300w.png?format=png&height=60&dpr=2"
        btnText1="Button 1"
        btnLink1="./"
        btnText2="Button 2"
        btnLink2="./"
        btnColor="white"
      />
    </div>
  );
}

export default Banners;