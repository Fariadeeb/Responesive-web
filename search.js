const search = () => {
  const searchbox = document.getElementById("searchItems").value.toUpperCase();
  const storeNews = document.getElementById("newsList");
  const news = document.querySelectorAll(".newsCard");
  const Nname = storeNews.getElementsByTagName("h5");

  for (var i = 0; i < Nname.length; i++) {
    let match = news[i].getElementsByTagName("h5")[0];
    if (match) {
      let textvalue = match.textContent || match.innerHTML;

      if (textvalue.toLocaleUpperCase().indexOf(searchbox) > -1) {
        news[i].style.display = "";
      } else {
        news[i].style.display = "none";
      }
    }
  }
};
