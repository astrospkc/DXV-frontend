import React from "react";
import TweetCard from "./TweetCard";

const TweetPage = () => {
    return (
        <div className="flex flex-col gap-2 justify-center items-center">
            <h1>Tweets</h1>
            <TweetCard />
            <TweetCard />
            <TweetCard />
        </div>
    );
};

export default TweetPage;
