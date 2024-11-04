import React, { useState } from "react";
import img from "../assets/Image.png";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import call from "../assets/call.png";
import pack from "../assets/package.png";
import medal from "../assets/medal.png";
import bag from "../assets/bag.png";
import frame from '../assets/Frame 1707478071.png'
import Button from "./Button";

const About = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div className="relative">
      <div className="py-24 max-w-[1180px] mx-auto xl:px-0 px-4">
        <img
          className="xl:scale-100 scale-0  absolute top-[50%] right-0"
          src={frame}
          alt=""
        />
        <section className="flex lg:flex-row flex-col gap-8 ">
          <div className="w-full">
            <img className="w-full" src={img} alt="" />
          </div>
          <div className=" w-full">
            <Tabs
              className={" p-0 !w-full"}
              selectedIndex={tabIndex}
              onSelect={(index) => setTabIndex(index)}
            >
              <TabList className={"flex gap-5 border-b-2 border-b-primary"}>
                <Tab
                  className={`p-2 cursor-pointer !rounded-none font-inter text-[14px] ${
                    tabIndex === 0
                      ? "!bg-primary !text-white rounded-none !outline-none"
                      : ""
                  }`}
                >
                  About
                </Tab>
                <Tab
                  className={`p-2 cursor-pointer !rounded-none font-inter text-[14px] ${
                    tabIndex === 1
                      ? "!bg-primary !text-white rounded-none !outline-none"
                      : ""
                  }`}
                >
                  Experience
                </Tab>
                <Tab
                  className={`p-2 cursor-pointer !rounded-none font-inter text-[14px] ${
                    tabIndex === 2
                      ? "!bg-primary !text-white rounded-none !outline-none"
                      : ""
                  }`}
                >
                  Contact
                </Tab>
              </TabList>
              <TabPanel className={"py-7 space-y-5"}>
                <h1 className="text-[56px] leading-[56px] font-bebas font-bold ">
                  Exceptional culinary experience and delicious food
                </h1>
                <p className="font-roboto text-[16px] leading-[26px]">
                  Welcome to Restaurant, where we bring the soul of Saudi Arabia
                  to your table. Our chefs craft each dish with passion, drawing
                  from age-old recipes and authentic flavors that showcase the
                  rich culinary heritage of Saudi cuisine. Dive into a dining
                  experience where traditional ingredients meet contemporary
                  presentation, giving you a true taste of Saudi Arabia's
                  vibrant and diverse culinary culture.
                </p>
                <div className="flex items-center gap-8">
                  <Button text={"About More"} />
                  <div className="flex items-center gap-1 font-roboto font-bold text-lg leading-[24px]">
                    <img src={call} alt="" />
                    <p>+88 3426 739 485</p>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>second</TabPanel>
              <TabPanel>Third</TabPanel>
            </Tabs>
          </div>
        </section>
        <section className="flex flex-wrap items-center gap-8 pt-12">
          <div className="flex items-center gap-3">
            <div className="p-4 rounded-full shadow-even">
              <img className="w-6 h-6" src={pack} alt="" />
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="font-bebas font-bold text-3xl">Fast delivery</h2>
              <p className="font-inter text-xl">Within 30 minutes</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="p-4 rounded-full shadow-even">
              <img className="w-6 h-6" src={medal} alt="" />
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="font-bebas font-bold text-3xl">Absolute dining</h2>
              <p className="font-inter text-xl">Best buffet restaurant</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="p-4 rounded-full shadow-even">
              <img className="w-6 h-6" src={bag} alt="" />
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="font-bebas font-bold text-3xl">Pickup delivery</h2>
              <p className="font-inter text-xl">Grab your food order</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;