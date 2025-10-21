// 🧠 Object to store all answers
const answers = {};

// 🎯 Select all answer buttons in your quiz
const buttons = document.querySelectorAll('.quiz-question input[type="button"]');

// 👇 Loop through each button and listen for clicks
buttons.forEach((button) => {
  button.addEventListener("click", function () {
    const questionName = this.name; // example: "que1"
    const value = this.dataset.type; // gets the skin type (e.g. "dry")

    // 💾 Save the selected answer for this question
    answers[questionName] = value;

    // 🟢 Reset colors for this question (so only one button stays green)
    document.querySelectorAll(`input[name="${questionName}"]`).forEach((b) => (b.style.backgroundColor = "#e5ffed"));

    // 🟢 Highlight the clicked one
    this.style.backgroundColor = "#9ed8b0";
  });
});

// 🎯 Find the submit button and result display area
const submitButton = document.querySelector(".submit-btn");
const resultBox = document.getElementById("result-box");

// 📦 When user clicks "Submit"
submitButton.addEventListener("click", function (event) {
  resultBox.scrollIntoView();
  event.preventDefault(); // stop page reload

  const values = Object.values(answers);

  // 🧩 If not all questions are answered
  if (values.length < 5) {
    resultBox.textContent = "Please answer all questions 🌿";
    return;
  }

  // 🧮 Count which skin type appears most often
  const count = {};
  values.forEach((v) => (count[v] = (count[v] || 0) + 1));
  const resultType = Object.keys(count).reduce((a, b) => (count[a] > count[b] ? a : b));

  // 💬 Pick the message that matches resultType
  let message = "";
  if (resultType.includes("dry")) message = dryText;
  else if (resultType.includes("oily")) message = oilyText;
  else if (resultType.includes("normal")) message = normalText;
  else if (resultType.includes("mature")) message = matureText;
  else message = sensitiveText;

  // 🖼 Show result nicely in the page
  resultBox.innerHTML = `
    <h2>Your Skin Type: ${resultType.toUpperCase()}</h2>
    <p>${message}</p>`;
  resultBox.style.background = "rgb(217, 235, 224, 0.8)";
  resultBox.style.padding = "1.5rem";
  resultBox.style.borderRadius = "1rem";
  resultBox.style.marginTop = "2rem";
});

// 💧 TEXTS FOR EACH RESULT TYPE
const dryText =
  "Your skin tends to feel tight or flaky after cleansing. Choose a gentle, creamy cleanser and rich moisturizer with ingredients like hyaluronic acid or ceramides. Avoid alcohol-heavy toners and foaming soaps. Add a hydrating serum under your day and night cream. Keep makeup light with nourishing foundations or tinted moisturizers. Explore our natural oil blends to restore your skin barrier 🌿.";

const oilyText =
  "Your skin produces excess oil, especially around the T-zone. Use lightweight, gel-based cleansers and oil-free moisturizers. Avoid heavy creams that clog pores. Look for ingredients like niacinamide, zinc, or salicylic acid. Gently exfoliate 1–2 times a week. For makeup, choose non-comedogenic and matte finishes. Our balancing skincare picks help keep your glow natural — not greasy 💧.";

const normalText =
  "Lucky you! Your skin is fairly balanced and rarely overreacts. Maintain it with mild cleansers and lightweight hydrating creams. Use sunscreen daily, and add a serum or face oil depending on season or stress. Gentle exfoliation and consistent hydration will keep your skin radiant. You can explore most of our products safely — just listen to your skin 🌼.";

const matureText =
  "Your skin may feel thinner, less elastic, or show fine lines. Use creamy cleansers and deeply hydrating serums with antioxidants (like vitamin C or E). Gentle exfoliation can improve texture. Choose nourishing creams rich in peptides or plant oils. Makeup should be moisturizing and light-reflecting for a healthy glow. Try our age-supportive products with natural botanicals 🌺.";

const sensitiveText =
  "Your skin can react easily to fragrances or harsh ingredients. Keep things minimal: gentle cleansers, fragrance-free creams, and soothing ingredients like aloe vera or oat extract. Avoid strong acids or scrubs. Makeup should be hypoallergenic and fragrance-free. A calming serum or light oil can help strengthen your skin barrier. Our gentle, natural range is made with you in mind 🌸.";
