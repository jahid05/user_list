import React from "react";

const Form = () => {
  return (
    <div className="">
        <button
          className="btn bg-gradient-to-r from-indigo-500 to-violet-500 rounded-2xl text-white md:w-48 w-full"
          onClick={() => document.getElementById("my_modal_3").showModal()}
        >
          Add User
        </button>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <form method="dialog">
              <button className="btn btn-sm btn-circle bg-gradient-to-r from-indigo-500 to-violet-500 text-white absolute right-2 top-2">
                ✕
              </button>
            </form>
            <form className="">
                <div className="grid grid-cols-2 gap-2">
                <div className="form-control">
                <label className="label">
                  <span className="label-text">First Name</span>
                </label>
                <input
                  type="text"
                  placeholder="first name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Last Name</span>
                </label>
                <input
                  type="text"
                  placeholder="last name"
                  className="input input-bordered"
                  required
                />
              </div>
                </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Address</span>
                </label>
                <input
                  type="text"
                  placeholder="address"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Company</span>
                </label>
                <input
                  type="text"
                  placeholder="company"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-gradient-to-r from-indigo-500 to-violet-500">Add User</button>
              </div>
            </form>
          </div>
        </dialog>
      </div>
  );
};

export default Form;
