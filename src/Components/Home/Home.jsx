import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoIosMail } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { HiMiniBuildingOffice2 } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";
import Form from "../Header/Form/Form";
import SortUsers from "../Header/SortUsers/SortUsers";
import Search from "../Header/Search/Search";

const Home = () => {
  const [users, setUsers] = useState();
  const [sortData, setSortData] = useState();
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((json) => {
        setUsers(json.users);
      });
  }, []);

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredUsers = users
    ? users.filter((user) =>
        user.firstName.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const searchData = { handleSearchInputChange, searchQuery };

  const handleSorting = (event) => {
    const sortItem = [...users].sort((a, b) => {
      if (a[event] < b[event]) return -1;
      if (a[event] > b[event]) return 1;

      const nameA = a.company.name.toUpperCase();
      const nameB = b.company.name.toUpperCase();
      console.log(a,b);
      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0;
    });
    setUsers(sortItem);
  };
  return (
    <div className="py-6 px-4 container mx-auto">
      <div className="flex justify-between flex-col md:flex-row gap-2">
        {/*===============================
                   Form Modal Area 
          ===============================*/}
        <Form></Form>
        {/*===============================
                  Search Area 
          ===============================*/}
        <Search searchData={searchData}></Search>
        {/*===============================
                  Sort Area
          ===============================*/}
        <SortUsers handleSorting={handleSorting}></SortUsers>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 lg:px-12 py-12">
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
