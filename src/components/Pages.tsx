"use client";
import React, { useState } from "react";
import Image from "next/image";
import pattern from "../../images/pattern.jpg";

// import pattern2 from "../../images/pattern2.jpg";
import { BsArrowRightCircleFill } from "react-icons/bs";
import GroupLayout from "./GroupLayout";
import ChatLayout from "./ChatLayout";
import TweetPage from "./TweetPage";


const Pages = () => {
    let slidePages = [
        {
            id: 1,
            name: "tweeetPage",
            desc: "tweet your thoughts",
            page: <TweetPage />,
        },
        {
            id: 2,
            name: "chatPage",
            desc: "chat with your friends and groups",
            page: <ChatLayout />,
        },
        {
            id: 3,
            name: "groupPage",
            desc: "create and join groups",
            page: <GroupLayout />,
        },
    ];

    const [idNumber, setIdNumber] = useState(0);
    const handleIdNumber = () => {
        if (idNumber == 3) {
            setIdNumber(0);
        } else if (idNumber >= 0 && idNumber < 3) {
            setIdNumber((prev) => prev + 1);
        }
    };
    console.log("id Number: ", idNumber);
    return (
        <>
            {/* <div className="relative bg-gradient-to-br from-indigo-500   to-black ">
        <Image
          src={pattern2}
          alt="pattern2"
          className="w-full h-1/2 opacity-20"
        />
      </div> */}
            <div className=" flex flex-col justify-center items-center m-auto gap-4 w-1/2 border-2 border-gray-600 p-3 rounded-3xl h-screen  ">
                <div className=" ">
                    <Image
                        src={pattern}
                        alt="connect"
                        className="w-4/5 rounded-full opacity-40" // Ensure width and height are equal for circular shape
                    />
                </div>
                <div className="flex flex-row absolute gap-2 justify-center items-center text-center">
                    {/* if condition to slide through the pages */}
                    {slidePages && (
                        <div id={idNumber}>
                            <div
                                className="flex flex-row  justify-center items-center gap-4"
                                key={slidePages[idNumber]?.id}
                            >
                                <h1 className="border-2 border-red-200 p-4 rounded-3xl">
                                    {slidePages[idNumber]?.desc}
                                </h1>
                                <div>{slidePages[idNumber]?.page}</div>
                            </div>
                        </div>
                    )}

                    <BsArrowRightCircleFill
                        onClick={handleIdNumber}
                        className="text-xl"
                    />
                </div>
            </div>
        </>
    );
};

export default Pages;
