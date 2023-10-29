import React, { useState } from "react";
import Layout from "./Layout";
import { Link } from "react-router-dom";

const AddBookPage = () => {
 const [FormData, setFormData] = useState ({
  judul: "",
  pengarang: "",
});

const handleChange = (e) => {
 const {name, value} = e.target;
 setFormData({
    ...FormData,
    [name]: value,
 })
}

const showAlert = () => {
  const { judul, pengarang } = FormData;

  if (judul && pengarang) {
    alert(`Judul: ${judul} Pengarang: ${pengarang}`);
  } else {
    alert("Tolong diisi Form ini dengan Lengkap");
  }
};

  return (
    <Layout>
      <div className="flex items-center w-full">
        <p className="text-white mb-4 text-2xl font-bold mr-auto">
          Tambah Buku
        </p>
      </div>

      <form>
        <div class="mb-6">
          <label class="block mb-2 text-sm font-medium text-white">
            Judul Buku
          </label>
          <input
            type="text"
            name="judul"
            value={FormData.judul}
            onChange={handleChange}
            class=" border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div class="mb-6">
          <label class="block mb-2 text-sm font-medium text-white">
            Pengarang
          </label>
          <input
            type="text"
            name="pengarang"
            value={FormData.pengarang}
            onChange={handleChange}
            class=" border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <div class="flex items-start"></div>
        <button
          type="submit"
          onClick={showAlert}
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-12 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Tambah
        </button>
        <Link to="/">

        <button
          type="button"
          class="ml-2 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-12 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        >
          Batal
        </button>
       </Link>
      </form>
    </Layout>
  );
};

export default AddBookPage;
