function onCreateClick()
{
  let data = {};

  data["Qu"] = "u/" + document.getElementsByName("QUser")[0].value;
  data["Qq"] = document.getElementsByName("QData")[0].value;
  data["Qv"] = document.getElementsByName("QUpvotes")[0].value;

  const ansUsers = document.getElementsByName("AUser");
  const ansDatas = document.getElementsByName("AData");
  const ansUpvotes = document.getElementsByName("AUpvotes");

  for (let i = 0; i < 9; i++)
  {
    data["A" + (i + 1) + "u"] = "u/" + ansUsers[i].value;
    data["A" + (i + 1) + "a"] = ansDatas[i].value;
    data["A" + (i + 1) + "v"] = ansUpvotes[i].value;
  }

  window.localStorage.setItem('postCreationData', JSON.stringify(data));

  location.href = "getImages.html";
}

const btn = document.getElementById("createBtn");
btn.onclick = onCreateClick;
