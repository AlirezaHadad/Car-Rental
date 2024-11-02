"use client";

import Image from "next/image";

import CustomeButton from "@/components/CustomeButton";

const Hero = () => {

    const handlerScroll = () => {

    }

    return(
        <div className="hero">
            <div className="flex-1 pt-36 padding-x">
                <h1 className="hero__title">
                    find, book, or rent a car - quickly and easily!
                </h1>

                <p className="hero__subtitle">
                    Streamline your car rental experience whith our effortless booking process.
                </p>
                
                <CustomeButton  
                    title="Explore Car"
                    containerStyles="bg-primary-blue
                    text-white rounded-full mt-10"
                    handleClick={handlerScroll}
                />
            </div>
            <div className="hero__image-container">
                <div className="hero__image">
                    <Image src="/hero.png" alt="hero" fill className="object-contain"/>
                </div>
                <div className="hero__image-overlay" />
            </div>
        </div>
    )
}
export default Hero;