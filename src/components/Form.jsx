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
   })).then(data => {
     const blob = new Blob([data], { type: "octet-stream" })
     const url = URL.createObjectURL(blob)
     const a = document.createElement('a')
     a.href = url
     a.download = 'new.pdf' 
     a.click()
     URL.revokeObjectURL(url)
       })
    
     
  };

  return (
    <>
      <input type="text" name="text" onInput={handleChange} />
      <button className="bg-white" onClick={createDownloadPDF}>Download as PDF</button>
    </>
  );
};
