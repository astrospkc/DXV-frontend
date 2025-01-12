import React from "react";
import Header from "./Header";
import "../app/globals.css";
import "./styles.css";
import { BsArrowRight } from "react-icons/bs";
import { BsPenFill } from "react-icons/bs"; // pen
import { BsPersonBoundingBox } from "react-icons/bs"; // join group
import { BsPersonBadgeFill } from "react-icons/bs"; // create group
import { BsChatDotsFill } from "react-icons/bs"; //chat
import { BsCameraVideoFill } from "react-icons/bs"; // video
import { BsClipboardFill } from "react-icons/bs"; //whiteboard
import connect from "../../images/connect.jpg";
import Image from "next/image";
import TweetCard from "./TweetCard";

const Homepage = () => {
    return (
        <>
            <div>
                <div className="flex relative w-full justify-center items-center  p-4  h-screen">
                    <Image
                        src={connect}
                        alt="connect"
                        width={500}
                        height={500}
                        className="w-1/3 rounded-full opacity-40" // Ensure width and height are equal for circular shape
                    />
                </div>
                <div className="flex absolute top-0 flex-col w-full">
                    <Header />
                    <div className="flex flex-row justify-between mx-10">
                        <div className="flex flex-col">
                            <h1 className="londrina-shadow-regular">DXV</h1>
                            <p className="stylish-regular flex flex-grow w-1/2 opacity-60">
                                The next generation app to get connected with people.
                            </p>
                            {/* <div className="flex justify-center text-center">
              <BsArrowRight className="text-6xl" />
            </div> */}
                        </div>
                        <div className="flex w-1/2 relative rounded-full bg-indigo-300 opacity-80 ">
                            <div className="flex absolute left-1/5 bg-red-200 rounded-full w-3/4 h-full">
                                <ul className="flex flex-col gap-4 justify-center items-center text-start w-full stylish-regular-list">
                                    <li className="flex flex-row items-center">
                                        <BsPenFill className="text-center text-xl mx-4" /> Tweet
                                    </li>
                                    <li className="flex flex-row items-center">
                                        <BsPersonBoundingBox className="text-center text-xl mx-4" />
                                        Join group
                                    </li>
                                    <li className="flex flex-row items-center">
                                        <BsPersonBadgeFill className="text-center text-xl mx-4" />
                                        Create Group
                                    </li>
                                    <li className="flex flex-row items-center">
                                        <BsChatDotsFill className="text-center text-xl mx-4" />
                                        Chat Room
                                    </li>
                                    <li className="flex flex-row items-center">
                                        <BsCameraVideoFill className="text-center text-xl mx-4" />
                                        Video Platform
                                    </li>
                                    <li className="flex flex-row items-center">
                                        <BsClipboardFill className="text-center text-xl mx-4" />
                                        Whiteboard
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* The tweet card */}
                    {/* <div className="w-1/2 my-20">
            <TweetCard />
          </div> */}
                </div>
            </div>
        </>
    );
};

export default Homepage;
