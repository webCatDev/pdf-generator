


function generateHTML({fullname, language, country, age}) {
    return `
    <style>
    .container {
  padding: 1rem 2rem;
  width: 25rem;
  background-color: #e2edec;
  border-radius: 3px;
  border: 1px solid #80ddf1;
}
.bold {
  font-weight: bold;
}
.container img {
  width: 200px;
}

.worker-info {
    box-sizing: border-box;
    padding: 3rem 0;    
    float: right;
}
    </style>
    <div class="container">
  <img src="${"https://cdn-icons-png.flaticon.com/512/64/64572.png"}" alt="worker">
  <div class="worker-info">
    <table>
      <tr>
        <td class="bold">Fullname:</td>
        <td>${fullname}</td>
      </tr>
       <tr>
        <td class="bold">Age:</td>
        <td>${age}</td>
      </tr>
       <tr>
        <td class="bold">Country:</td>
        <td>${country}</td>
      </tr>
       <tr>
        <td class="bold">Language:</td>
        <td>${language}</td>
      </tr>
    </table>
  </div>
</div>
  `;
}

module.exports = generateHTML