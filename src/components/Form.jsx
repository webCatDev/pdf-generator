import { Fragment, useRef } from "react";
import axios from "axios";

export default () => {
  const fullnameRef = useRef();
  const ageRef = useRef();
  const countryRef = useRef();
  const languageRef = useRef();

  const createDownloadPDF = async () => {
    const { data: id } = await axios({
      method: "post",
      url: "https://webcatdev-pdf-generator.herokuapp.com/create-pdf",
      data: {
        fullname: fullnameRef.current.value,
        age: ageRef.current.value,
        country: countryRef.current.value,
        language: languageRef.current.value,
      },
    });
    const a = document.createElement("a");
    a.href = `https://webcatdev-pdf-generator.herokuapp.com/fetch-pdf/${id}`;
    a.click();
    a.remove();
  };

  return (
    <Fragment>
      <section
        className="flex flex-col space-y-4 w-full max-w-md mx-auto"
        aria-label="PDF form"
        region="role"
      >
        <div className="flex flex-col space-y-2 md:items-center md:flex-row md:space-x-4">
          <label className="text-yellow-400 w-36 text-xl" htmlFor="fullname">
             Fullname
          </label>
          <input
            className="w-full inline-block px-4 py-2 focus-visible:outline-0"
            placeholder="Enter your fullname"
            id="fullname"
            type="text"
            name="fullname"
            ref={fullnameRef}
          />
        </div>

        <div className="flex flex-col space-y-2 md:items-center md:flex-row md:space-x-4">
          <label className="text-yellow-400 w-36 text-xl" htmlFor="age">
             Age
          </label>
          <input
            className="w-full inline-block px-4 py-2 focus-visible:outline-0"
            placeholder="Enter your age"
            id="age"
            type="number"
            name="age"
            ref={ageRef}
          />
        </div>

        <div className="flex flex-col space-y-2 md:items-center md:flex-row md:space-x-4">
          <label className="text-yellow-400 w-36 text-xl" htmlFor="country">
             Country
          </label>
          <input
            className="w-full inline-block px-4 py-2 focus-visible:outline-0"
            placeholder="Enter your country"
            id="country"
            type="text"
            name="country"
            ref={countryRef}
          />
        </div>

        <div className="flex flex-col space-y-2 md:items-center md:flex-row md:space-x-4">
          <label className="text-yellow-400 w-36 text-xl" htmlFor="language">
            Language
          </label>
          <input
            className="w-full inline-block px-4 py-2 focus-visible:outline-0"
            placeholder="Enter your language"
            id="language"
            type="text"
            name="language"
            ref={languageRef}
          />
        </div>

        <button
          aria-label="create and download PDF"
          className="bg-green-200 hover:bg-green-400 py-4 font-semibold"
          onClick={createDownloadPDF}
        >
          Download as PDF
        </button>
      </section>
    </Fragment>
  );
};
