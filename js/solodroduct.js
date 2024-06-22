// const urlParams = new URLSearchParams(window.location.search);

// const productId = parseInt(urlParams.get("id"));

// fetch("./solodata.json")
//   .then((response) => response.json())
//   .then((product) => {
//     if (product) {
//       const soloName = document.getElementById("SoloProduct-Name");
//       soloName.textContent = product.name.type;

//       const soloDescription = document.getElementById(
//         "SoloProduct-Description"
//       );
//       soloDescription.textContent = product.soloDescription;

//       const soloPrice = document.getElementById("SoloContainer-Price");
//       soloPrice.textContent = product.soloPrice;

//       const solofeatures = document.getElementById("SoloProduct-Features");
//       solofeatures.textContent = product.features;
//     } else {
//     }
//   });

// const urlParams = new URLSearchParams(window.location.search);
// const productId = parseInt(urlParams.get("id"));

// fetch("../solodata.json")
//   .then((response) => response.json())
//   .then((products) => {
//     const product = products.find((p) => p.id === productId);
//     if (product) {
//       const soloMainImg = document.getElementById("SoloProduct-Main-Img");
//       soloMainImg.src = product.img;

//       const soloName = document.getElementById("SoloProduct-Name");
//       soloName.textContent = product.name;

//       const soloType = document.getElementById("SoloProduct-Type");
//       soloType.textContent = product.type;

//       const soloDescription = document.getElementById(
//         "SoloProduct-Description"
//       );
//       soloDescription.textContent = product.description;

//       const soloPrice = document.getElementById("SoloContainer-Price");
//       soloPrice.textContent = product.price;

//       const firstImg = document.querySelector(".one");
//       firstImg.src = product.additionalImages;

//       const seconfImg = document.querySelector(".two");
//       seconfImg.src = product.additionalImages;

//       const thirdImg = document.querySelector(".three");
//       thirdImg.src = product.additionalImages;

//       const soloFeatures = document.getElementById("SoloProduct-Features");
//       soloFeatures.textContent = product.features;
//     } else {
//       console.error("Product not found");
//     }
//   })
//   .catch((error) => {
//     console.error("Error fetching product data:", error);
//   });
