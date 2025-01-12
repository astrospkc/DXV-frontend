"use client"
import React from 'react'
import { Badge } from "@/components/ui/badge"
import { DropDown } from './DropDown'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation'
import ProfileInfo from './ProfileInfo'

// const Header = () => {
//     const router = useRouter()

//     const handleLogout = () => {
//         localStorage.removeItem("authToken")
//         router.push("/")
//         alert("you have logged out successfully")
//     }
//     return (
//         <div className='w-full backdrop-blur-xl shadow-lg shadow-black'>
//             <div className='flex justify-between m-4 '>
//                 <Badge className='w-fit p-4'>DXV</Badge>
//                 <div className="flex flex-row">
//                     <Button onClick={handleLogout}>LogOut</Button>
//                     {/* <DropDown /> */}
//                     <ProfileInfo />
//                 </div>

//             </div>

//         </div>
//     )
// }

// export default Header



const Header = () => {
    return (
        <div>
            <ul className="flex flex-row gap-10 justify-center my-8">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>SignIn</li>
                <li>SignUp</li>
            </ul>
        </div>
    );
};

export default Header;
