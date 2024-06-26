import React, { useState } from "react";
import { sanity } from "../../sanity";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Add_Ach() {
  const [formData, setFormData] = useState({});
  const { currentUser } = useSelector(state => state.user);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const achieve = {
      _type: "oppertunities",
      postedby: currentUser?.name,
      userid: currentUser?._id,
      userPicture: currentUser?.profilePicture,
      title: formData.title,
      participants: formData.participants,
      description: formData.description,
      applylink: formData.applylink,
      openingdate: formData.openingdate,
      closingdate: formData.closingdate,
      tags: formData.tags
    };

    sanity
      .create(achieve)
      .then(() => {
        navigate('/Opportunities', { replace: true });
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="mt-20 px-4 sm:px-6 lg:px-8">
        <div className="md:grid md:grid-cols-3 md:gap-6" id="addAcv">
          <div className="md:col-span-3">
            <h2 className="text-lg font-medium leading-6 text-gray-900">Add Opportunity</h2>
            <p className="mt-1 text-sm text-gray-600">
              Fill out the form below to add a new opportunity.
            </p>
          </div>
          <div className="md:col-span-2 md:mt-0">
            <form onSubmit={handleSubmit}>
              <div className="shadow sm:overflow-hidden sm:rounded-md">
                <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                  <div>
                    <label
                      htmlFor="title"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Opportunity Title
                    </label>
                    <input required
                      type="text"
                      name="title"
                      id="title"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Opportunity Title"
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="participants"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      For Whom
                    </label>
                    <input required
                      type="text"
                      name="participants"
                      id="participants"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="For Whom"
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="description"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Description
                    </label>
                    <textarea required
                      name="description"
                      id="description"
                      rows="3"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Description"
                      onChange={handleChange}
                    ></textarea>
                  </div>

                  <div>
                    <label
                      htmlFor="tags"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Tags
                    </label>
                    <div className="w-72">
                      <select required
                        id="tags"
                        name="tags"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        onChange={handleChange}
                      >
                        <option value="" disabled selected>
                          Select a tag
                        </option>
                        <option value="Placement">Placement</option>
                        <option value="Academics">Academics</option>
                        <option value="Extracurricular">Extracurricular</option>
                        <option value="StartUp">StartUp</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="openingdate"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Opening Date/Tenure
                    </label>
                    <input required
                      type="date"
                      name="openingdate"
                      id="openingdate"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="closingdate"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Closing Date
                    </label>
                    <input required
                      type="date"
                      name="closingdate"
                      id="closingdate"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="applylink"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Apply Link
                    </label>
                    <input required
                      type="text"
                      name="applylink"
                      id="applylink"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Apply Link"
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
