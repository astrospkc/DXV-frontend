"use client";
import React, { useState } from "react";
import { Heart, MessageCircle, Repeat2, Share } from "lucide-react";

const TweetCard = () => {
    const [isLiked, setIsLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(1234);

    const handleLike = () => {
        setIsLiked(!isLiked);
        setLikeCount(isLiked ? likeCount - 1 : likeCount + 1);
    };

    return (
        <div className="max-w-xl bg-white rounded-xl border border-gray-200 p-4  text-xs">
            <div className="flex space-x-3">
                {/* Avatar */}
                <div className="flex-shrink-0">
                    <div className="h-12 w-12 rounded-full bg-gray-200" />
                </div>

                {/* Content */}
                <div className="flex-1 space-y-1">
                    {/* User info */}
                    <div className="flex items-center space-x-2">
                        <span className="font-bold text-gray-900">John Doe</span>
                        <span className="text-gray-500">@johndoe</span>
                        <span className="text-gray-500">·</span>
                        <span className="text-gray-500">2h</span>
                    </div>

                    {/* Tweet text */}
                    <p className="text-gray-900">
                        Just built an amazing tweet card component using React and Tailwind
                        CSS!
                    </p>

                    {/* Image placeholder */}
                    <div className="mt-3 rounded-2xl bg-gray-100 aspect-[5/1] w-full" />

                    {/* Action buttons */}
                    <div className="flex justify-between mt-3 text-gray-500 ">
                        <button className="flex items-center space-x-2 hover:text-blue-500 transition-colors ">
                            <MessageCircle className="h-5 w-5" />
                            <span>234</span>
                        </button>

                        <button className="flex items-center space-x-2 hover:text-green-500 transition-colors">
                            <Repeat2 className="h-5 w-5" />
                            <span>456</span>
                        </button>

                        <button
                            className={`flex items-center space-x-2 transition-colors ${isLiked ? "text-pink-600" : "hover:text-pink-600"
                                }`}
                            onClick={handleLike}
                        >
                            <Heart className={`h-5 w-5 ${isLiked ? "fill-current" : ""}`} />
                            <span>{likeCount}</span>
                        </button>

                        <button className="flex items-center space-x-2 hover:text-blue-500 transition-colors">
                            <Share className="h-5 w-5" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TweetCard;
