"use client";
import { useRouter } from "next/navigation";

import { ShowMoreProps } from "@/types";
import CustomeButton from "./CustomeButton";
import { updateSearchParams } from "@/utils";

const ShowMore = ({pageNumber,isNext}:ShowMoreProps) => {
  const router = useRouter()

  const handelNavigation = () => {
    const newLimit = (pageNumber + 1) * 10 ;
    const newPathName = updateSearchParams("limit",`${newLimit}`)
    router.push(newPathName,{scroll:false})
  }

  return (
    <div className="w-full flex-center gap-5 mt-10">
        {!isNext && (
            <CustomeButton
                title="Show More"
                btnType="button"
                containerStyles="bg-primary-blue rounded-full text-white"
                handleClick={handelNavigation}
            />
        )}
    </div>
  )
}

export default ShowMore