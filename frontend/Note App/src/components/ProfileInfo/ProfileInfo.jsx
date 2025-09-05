import { NavLink } from "react-router-dom";

export default function ProfileInfo() {
    const name="Shrouq Elsayed";
    function getAvatarChar(name){
   if (!name) return "";
  const words = name.trim().split(" ");
  if (words.length === 1) {
    return words[0][0].toUpperCase();
  }
  return (words[0][0] + words[1][0]).toUpperCase();

    }
    return (
        <>
            <div className="flex items-center justify-center gap-2">
                <div className="w-12 h-12 flex items-center justify-center text-mainColor rounded-full bg-gray-200 ">
                   {getAvatarChar(name)}
                </div>
                <div>
                    <p>{name}</p>
                    <NavLink className='underline'>Log Out</NavLink>
                </div>
            </div>
        </>
    )
}
