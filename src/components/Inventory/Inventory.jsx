import React from "react";

const Inventory = () => {
  return (
    <div className="items-center text-center">
      <h3 className="text-2xl">Inventory page</h3>
      <div className="flex gap-3 flex-col mx-auto items-center border border-[goldenrod] w-fit px-8 py-8 rounded-md mt-8">
        <input
          className="border px-2 py-2 border-[goldenrod]"
          type="text"
          name="text"
          placeholder="name"
        />
        <input
          className="border px-2 py-2 border-[goldenrod]"
          type="email"
          name="email"
          placeholder="email"
        />
        <input
          className="border px-2 py-2 border-[goldenrod]"
          type="password"
          name="password"
          placeholder="password"
        />
        <input
          className="border w-fit px-10 py-3 rounded-md bg-slate-300 hover:bg-slate-500 hover:text-white"
          type="submit"
          value="Submit"
        ></input>
      </div>
    </div>
  );
};

export default Inventory;
