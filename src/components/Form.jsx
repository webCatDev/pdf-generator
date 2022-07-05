import { useState } from "react";
import axios from "axios";
import { saveAs } from "file-saver";

export default () => {
  const [form, setForm] = useState("");
  const handleChange = ({ target: { value } }) => {
    setForm(value);
  };

  const createDownloadPDF =  () => {
   axios({
     method: "post",
     url: "http://127.0.0.1:5000/create-pdf",
     data: {
       text: form,
     },
     responseType: "blob",
   }).then(() => axios({
       url: "http://127.0.0.1:5000/fetch-pdf",
       responseType: "blob"
   })).then(data => {
       const blob = new Blob([data], { type: "application/pdf; charset=utf-8;" })
      saveAs(blob)
       })
    
     
  };

  return (
    <>
      <input type="text" name="text" onInput={handleChange} />
      <button className="bg-white" onClick={createDownloadPDF}>Download as PDF</button>
    </>
  );
};