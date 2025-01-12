"use client";
import React, { useState } from "react";
import { Label } from "@/components/ui/label"

import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import Link from "next/link";

import { useRouter } from "next/navigation";
import axios from "axios";
// import {
//     IconBrandGithub,
//     IconBrandGoogle,
//     IconBrandOnlyfans,
// } from "@tabler/icons-react";

export default function SignUp() {
    const router = useRouter()
    const [credentials, setCredentials] = useState({
        name: "",
        username: "",
        email: "",
        password: "",
        bio: ""
    })

    const [file, setFile] = useState(null)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData()
        formData.append("name", credentials.name)
        formData.append("username", credentials.username)
        formData.append("email", credentials.email)
        formData.append("password", credentials.password)
        formData.append("bio", credentials.bio)
        console.log("file: ", file)
        if (file) {
            formData.append("media_url", file)

        }

        console.log("form data: ", formData)


        const res = await axios.post(`${process.env.NEXT_PUBLIC_URL}/api/signup`, formData, {

            headers: {
                "Content-Type": "multipart/form-data",
            }

        })
        console.log("success: ", res.data)
        if (res.data.success) {
            // storing token in localstorage
            console.log("data authtoken: ", res.data.authtoken)

            localStorage.setItem("token", res.data.authtoken)
            alert("happy signed in")
            router.push("/dashboard")

        } else {
            alert("invalid credentials")

        }
    };
    const handleChange = (e) => {
        e.preventDefault()
        setCredentials({ ...credentials, [e.target.id]: e.target.value })

    }


    return (
        <div className="max-w-md w-full  rounded-none md:rounded-2xl p-4 md:p-8 shadow-input  bg-white dark:bg-black ">
            <h2 className="font-bold text-3xl text-neutral-800 dark:text-neutral-200">
                Welcome to DXV
            </h2>
            <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
                SignUp to DXV
            </p>

            <form className="my-8" onSubmit={handleSubmit}>
                <LabelInputContainer>
                    <Label htmlFor="name">Name</Label>
                    <Input className="text-white" id="name" placeholder="Durden" type="text" onChange={handleChange} />
                </LabelInputContainer>

                <LabelInputContainer className="mb-4">
                    <Label htmlFor="username">Username</Label>
                    <Input className="text-white" id="username" placeholder="Durdy" type="text" onChange={handleChange} />
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="bio">Bio</Label>
                    <textarea className="text-white" id="bio" placeholder="Write something about yourself" onChange={handleChange} />
                </LabelInputContainer>

                <LabelInputContainer className="mb-4">
                    <Label htmlFor="email">Email Address</Label>
                    <Input className="text-white" id="email" placeholder="projectmayhem@fc.com" type="email" onChange={handleChange} />
                </LabelInputContainer>

                <LabelInputContainer className="mb-4">
                    <Label htmlFor="password">Password</Label>
                    <Input className="text-white" id="password" placeholder="••••••••" type="password" onChange={handleChange} />
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="image">Upload Profile Image</Label>
                    <Input className="text-white" id="media_url" placeholder="" name="media_url" type="file" onChange={(e) => setFile(e.target.files[0])} />
                </LabelInputContainer>


                <button
                    className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                    type="submit"
                >
                    Sign up &rarr;
                    <BottomGradient />
                </button>
                <h1>Already have an account</h1>
                <Link href="/login">
                    <button
                        className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                        type="submit"
                    >
                        Login &rarr;
                        <BottomGradient />
                    </button>
                </Link>
                <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
            </form>
        </div>
    );
}

const BottomGradient = () => {
    return (
        <>
            <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
            <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
        </>
    );
};

const LabelInputContainer = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn("flex flex-col space-y-2 w-full", className)}>
            {children}
        </div>
    );
};