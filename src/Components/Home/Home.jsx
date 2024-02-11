import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoIosMail } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { HiMiniBuildingOffice2 } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";

const Home = () => {
  const [users, setUsers] = useState();

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((json) => {
        setUsers(json.users);
      });
  }, []);

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredUsers = users
    ? users.filter((user) =>
        user.firstName.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  // const [sortCriteria, setSortCriteria] = useState("firstName");

  // const handleSortChange = (event) => {
  //   setSortCriteria(event.target.value);
  // };

  // const sortedUsers = users.slice().sort((a, b) => {
  //   if (sortCriteria === "firstName") {
  //     return a.firstName.localeCompare(b.firstName);
  //   } else if (sortCriteria === "email") {
  //     return a.email.localeCompare(b.email);
  //   } else if (sortCriteria === "company") {
  //     return a.company.localeCompare(b.company);
  //   }
  //   return 0;
  // });

  return (
    <div className="py-6 container mx-auto">
      <div className="flex gap-2 px-4 container mx-auto">
      <div className="flex px-2 justify-center mx-auto rounded-2xl items-center gap-2 h-12 bg-gradient-to-r from-indigo-500 to-violet-500">
        <span className="text-2xl text-white">
          <IoSearch />
        </span>
        <input
          className="text-xl bg-transparent focus:outline-none text-white"
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
      </div>
      <div className="w-52 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-2xl flex justify-end">
        <select className="select text-white text-lg w-full max-w-xs bg-transparent focus:outline-none border-none">
          <option disabled selected>
            Who shot first?
          </option>
          <option>Han Solo</option>
          <option>Greedo</option>
        </select>
      </div>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 lg:px-12 px-6 py-12">
        {filteredUsers?.map((item) => (
          <div key={item.id} className="">
            <div className="card  border">
              <figure className="p-4 w-full mx-auto border bg-gradient-to-r from-indigo-500 to-violet-500">
                <img className="w-40" src={item?.image} alt="Avatar" />
              </figure>
              <div className="card-body gap-4">
                <Link to={`/userInfo/${item.id}`} className="card-title">
                  {item?.firstName} {item?.lastName}
                </Link>
                <div className="flex items-center gap-2 text-2xl">
                  <span className="text-3xl text-violet-600">
                    <IoIosMail />
                  </span>
                  <p className="text-lg">{item?.email}</p>
                </div>
                <div className="flex items-center gap-2 text-2xl">
                  <span className="text-3xl text-violet-600">
                    <FaHome />
                  </span>
                  <p className="text-lg">
                    {item?.address?.city} {item?.address?.address}{" "}
                    {item?.address?.state}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-2xl">
                  <span className="text-3xl text-violet-600">
                    <HiMiniBuildingOffice2 />
                  </span>
                  <p className="text-lg">{item?.company?.name}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
