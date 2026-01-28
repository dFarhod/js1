// DOM elementlarini tanlab olish
const galleryImages = document.querySelectorAll(".gallery-img");
const previewBox = document.getElementById("image");
const imageText = document.getElementById("image-text");

// upDate funksiyasi - rasm ustiga olib borilganda ishlaydi
function upDate(previewPic) {
  console.log("upDate funksiyasi ishga tushdi!");
  console.log("Tasvir ma'lumotlari:", {
    src: previewPic.src,
    alt: previewPic.alt,
    dataset: previewPic.dataset,
  });

  // previewPic o'zgaruvchisidan ma'lumotlarni olish
  const imgSrc = previewPic.src;
  const imgAlt = previewPic.alt;

  // Element matnini o'zgartirish
  imageText.textContent = imgAlt;

  // Orqa fon tasvirini o'zgartirish
  previewBox.style.backgroundImage = `url('${imgSrc}')`;

  // Orqa fon rangini o'zgartirish (ko'rinishni yaxshilash uchun)
  previewBox.style.backgroundColor = "transparent";
  imageText.style.background = "rgba(255, 255, 255, 0.8)";

  console.log("Yangilangan element:", {
    text: imageText.textContent,
    backgroundImage: previewBox.style.backgroundImage,
  });
}

// unDo funksiyasi - rasmni tark etilganda ishlaydi
function unDo() {
  console.log("unDo funksiyasi ishga tushdi!");

  // Div matnini asl holatiga qaytarish
  imageText.textContent =
    "Bu yerda ko'rsatish uchun quyidagi rasm ustiga olib boring";

  // Divning orqa fon tasvirini asl holatiga qaytarish
  previewBox.style.backgroundImage = "url('')";

  // Orqa fon rangini tiklash
  previewBox.style.backgroundColor = "";
  imageText.style.background = "rgba(255, 255, 255, 0.9)";

  console.log("Element asl holatiga qaytarildi!");
}

// Har bir rasmga hodisa tinglovchilarini qo'shish
galleryImages.forEach((img) => {
  // Sichqoncha rasm ustiga olib borilganda
  img.addEventListener("mouseenter", function () {
    upDate(this);
  });

  // Sichqoncha rasmni tark etganda
  img.addEventListener("mouseleave", function () {
    unDo();
  });

  // Click hodisasi ham qo'shish (mobil qurilmalar uchun)
  img.addEventListener("click", function () {
    upDate(this);
  });
});

// Galereyani qayta tiklash funksiyasi
function resetGallery() {
  console.log("Galereya qayta tiklandi!");
  unDo();

  // Foydalanuvchiga xabar berish
  alert("Galereya asl holatiga qaytarildi!");
}

// Konsolega boshlang'ich xabar
console.log("Interaktiv fotogalereya yuklandi!");
console.log("Foydalanish bo'yicha ko'rsatma:");
console.log("1. Har qanday rasm ustiga sichqonchani olib boring");
console.log("2. Rasmni tark eting");
console.log("3. Natijalarni konsole orqali kuzating");
