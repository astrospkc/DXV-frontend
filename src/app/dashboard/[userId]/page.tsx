"use client"

import dateFormat from '@/components/miscellaneous/dateFormat'
import TweetCardExtension from '@/components/TweetCardExtension'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Image from "next/image";


const ProfilePage = ({ params }) => {
    // need user details and user tweets and groups
    const [userDetails, setUserDetails] = useState()
    const [userTweets, setUserTweets] = useState()
    const [userGroups, setUserGroups] = useState()

    // get user details
    const getUserDetailsWithId = async () => {
        const token = localStorage.getItem("token")
        try {
            const res = await axios.get(`${process.env.NEXT_PUBLIC_URL}/api/getUserInfoId/${params.userId}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            const data = await res.data
            console.log("user details in profile page: ", data)
            setUserDetails(data)
        } catch (error) {
            throw new Error("Error fetching user details")
        }
    }



    // get all the users tweets

    const getUserTweetsWithId = async () => {
        const token = localStorage.getItem("token")
        try {
            const res = await axios.get(`${process.env.NEXT_PUBLIC_URL}/tweet/userTweets/${params.userId}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            const data = await res.data
            console.log("user tweets in profile page: ", data)
            setUserTweets(data)
        } catch (error) {
            throw new Error("Error fetching user tweets")
        }
    }

    useEffect(() => {
        getUserDetailsWithId()
        getUserTweetsWithId()
    }, [params.userId])



    return (
        <div className='flex flex-col  m-auto my-10 text-yellow-300 h-full'>

            <div>
                all the tweets will be here the information and all {params.userId}
            </div>
            {/* user details will be shown here */}
            <div className='p-4 rounded-4 w-full m-4 ' >
                {
                    userDetails && (
                        <div className='flex flex-col justify-center items-center m-auto w-full'>
                            <div className=' rounded-full h-fit w-fit border-2 border-emerald-400   p-4 shadow-lg shadow-emerald-400' >
                                <Image src={userDetails[0].media_url} alt="profile pic" width={150} height={150} layout="fixed" className=' rounded-full' />
                                {/* <Image src={userDetails[0].media_url} alt="profile pic" width={100} height={100} />                               <Image src={userDetails[0].media_url} width={100} height={100}  alt="profile pic" /> */}
                            </div>

                            <div className='flex flex-col gap-4 text-blue-300 font-bold comic-neue-bold '>
                                <h1>Name:  <span className='text-white'>{userDetails[0].name}</span></h1>
                                <h1>Username: <span className="text-white">{userDetails[0].username}</span></h1>
                                <h1>Email: <span className='text-white'>{userDetails[0].email}</span></h1>
                                <h1>Bio: <span className='text-white'>{userDetails[0].bio}</span></h1>

                            </div>

                        </div>

                    )
                }
            </div>

            {/* user tweets will be shown here */}
            <div>
                {
                    userTweets && userTweets?.map((ele) => {
                        return (
                            <div key={ele.id}>
                                <TweetCardExtension
                                    key={ele.id}
                                    props={ele}
                                />
                            </div>

                        )
                    })
                }
            </div>


            <div>

            </div>
        </div>
    )
}

export default ProfilePage
