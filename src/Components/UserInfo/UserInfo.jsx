import React from "react";
import { useLoaderData } from "react-router-dom";
import cover from "../../assets/images/cover.jpg";
const UserInfo = () => {
  const userDetails = useLoaderData();

  console.log(userDetails);
  return (
    <div>
      <div className="h-40 bg-gradient-to-r from-indigo-500 to-violet-500">
        <h1 className="text-center py-6 text-white md:text-4xl font-bold">
          User Details
        </h1>
      </div>
      <div className="">
        <div className="flex justify-center avatar -mt-20">
          <div className="w-40 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={userDetails?.image} />
          </div>
        </div>
        <h2 className="text-center py-2 text-2xl font-semibold">
          {userDetails?.firstName} {userDetails?.lastName}
        </h2>
      </div>
      <div className="flex justify-center px-6">
        <div className="text-xl font-semibold bg-gradient-to-r from-indigo-500 to-violet-500 rounded-2xl p-8 text-white">
        <p>
          {" "}
          Name: {userDetails?.firstName} {userDetails?.lastName}
        </p>
        <p>E-mail: {userDetails?.email}</p>
        <p>Phone: {userDetails?.phone}</p>
        <p>Company: {userDetails?.company?.name}</p>
        <p>
          Address: {userDetails?.address?.city} {userDetails?.address?.address}{" "}
          {userDetails?.address?.state}
        </p>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
