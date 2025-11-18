// ---------- BMI calculator ----------
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("bmiForm");
  const result = document.getElementById("bmiResult");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const height = parseFloat(document.getElementById("height").value);
      const weight = parseFloat(document.getElementById("weight").value);

      if (height > 0 && weight > 0) {
        const bmi = (weight / ((height / 100) ** 2)).toFixed(2);
        let status = "";

        if (bmi < 18.5) status = "Underweight 🥗";
        else if (bmi < 24.9) status = "Normal weight 💪";
        else if (bmi < 29.9) status = "Overweight ⚖️";
        else status = "Obese 🚨";

        result.innerHTML = `
          <p>Your BMI is <span class="text-primary fs-4">${bmi}</span></p>
          <p>Status: <span class="fw-bold">${status}</span></p>
        `;
      } else {
        result.innerHTML = `<p class="text-danger">Please enter valid numbers!</p>`;
      }
    });
  }

  initRecipesPage();
  initCalorieTracker();
  initMealPlanner();
});

// ---------- Back button ----------
function backButton() {
  window.history.back();
}

// =============================================================
// ======================== RECIPES PAGE ========================
// =============================================================
function initRecipesPage() {
  const grid = document.getElementById("recipesGrid");
  const search = document.getElementById("recipeSearch");
  const calorieFilter = document.getElementById("calorieFilter");
  const resetBtn = document.getElementById("resetRecipes");

  if (!grid) return;

  function renderRecipes(list) {
    grid.innerHTML = "";
    list.forEach(r => {
      const col = document.createElement("div");
      col.className = "col-md-4";
      col.innerHTML = `
        <div class="card recipe-card h-100">
          <img src="${r.image}" class="card-img-top" 
               style="height:200px; object-fit:cover;" alt="${r.name}">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">${r.name}</h5>
            <p class="mb-1"><strong>${r.calories}</strong> kcal</p>
            <div class="mt-auto d-flex gap-2">
              <button class="btn btn-sm btn-outline-primary" 
                      onclick="showIngredientsModal('${r.id}')">View Ingredients</button>
              <button class="btn btn-sm btn-primary" 
                      onclick="addRecipeToTrackerForm('${r.id}')">Use in Tracker</button>
            </div>
          </div>
        </div>
      `;
      grid.appendChild(col);
    });
  }

  // initial render
  renderRecipes(RECIPES);

  // filtering logic
  function applyFilters() {
    const q = search.value.trim().toLowerCase();
    const filter = calorieFilter.value;

    let filtered = RECIPES.filter(r => r.name.toLowerCase().includes(q));

    if (filter === "lt200") filtered = filtered.filter(r => r.calories < 200);
    if (filter === "200-400") filtered = filtered.filter(r => r.calories >= 200 && r.calories <= 400);
    if (filter === "gt400") filtered = filtered.filter(r => r.calories > 400);

    renderRecipes(filtered);
  }

  search?.addEventListener("input", applyFilters);
  calorieFilter?.addEventListener("change", applyFilters);

  resetBtn?.addEventListener("click", () => {
    search.value = "";
    calorieFilter.value = "all";
    renderRecipes(RECIPES);
  });
}

// -------- Show Ingredients Modal ----------
function showIngredientsModal(id) {
  const recipe = RECIPES.find(r => r.id === id);
  if (!recipe) return;

  document.getElementById("modalRecipeTitle").textContent = recipe.name;
  document.getElementById("modalRecipeImg").src = recipe.image;
  document.getElementById("modalRecipeCalories").textContent = recipe.calories;
  document.getElementById("modalRecipeIngredients").innerHTML =
    recipe.ingredients.map(i => `<li>${i}</li>`).join("");
  document.getElementById("modalRecipeInstructions").textContent =
    recipe.instructions || "No instructions.";

  const addBtn = document.getElementById("addToCalorieFromModal");
  addBtn.dataset.recipeId = id;

  const modal = new bootstrap.Modal(document.getElementById("ingredientsModal"));
  modal.show();
}

// -------- Use in Tracker (from card button) ----------
function addRecipeToTrackerForm(id) {
  window.location.href = `calorie.html?recipe=${id}`;
}

// -------- Use in Tracker (from modal button) ----------
document.addEventListener("click", (e) => {
  if (e.target?.id === "addToCalorieFromModal") {
    const id = e.target.dataset.recipeId;
    if (id) window.location.href = `calorie.html?recipe=${id}`;
  }
});

// =============================================================
// ===================== CALORIE TRACKER =======================
// =============================================================
function initCalorieTracker() {
  const form = document.getElementById("calorieForm");
  if (!form) return;

  const tableBody = document.querySelector("#trackerTable tbody");
  const totalEl = document.getElementById("totalCalories");
  const recipeSelect = document.getElementById("recipeSelect");
  const clearBtn = document.getElementById("clearTrackerBtn");

  // Populate recipe dropdown
  recipeSelect.innerHTML = `<option value="">— choose recipe to autofill —</option>`;
  RECIPES.forEach(r => {
    const opt = document.createElement("option");
    opt.value = r.id;
    opt.textContent = `${r.name} — ${r.calories} kcal`;
    recipeSelect.appendChild(opt);
  });

  // Autofill via query param
  const urlParams = new URLSearchParams(window.location.search);
  const recipeParam = urlParams.get("recipe");

  if (recipeParam) {
    const r = RECIPES.find(x => x.id === recipeParam);
    if (r) {
      document.getElementById("foodName").value = r.name;
      document.getElementById("foodCalories").value = r.calories;
      document.getElementById("foodIngredients").value = r.ingredients.join(", ");
      recipeSelect.value = r.id;
    }
    history.replaceState(null, "", window.location.pathname);
  }

  // Autofill when selecting dropdown
  recipeSelect.addEventListener("change", (e) => {
    const id = e.target.value;
    if (!id) {
      form.reset();
      return;
    }
    const r = RECIPES.find(x => x.id === id);
    if (r) {
      document.getElementById("foodName").value = r.name;
      document.getElementById("foodCalories").value = r.calories;
      document.getElementById("foodIngredients").value = r.ingredients.join(", ");
    }
  });

  // In-memory entry list
  let entries = [];

  function escapeHtml(str) {
    return str.replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  function renderTable() {
    tableBody.innerHTML = "";
    let total = 0;

    entries.forEach((item, idx) => {
      total += Number(item.calories);

      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${idx + 1}</td>
        <td>${escapeHtml(item.name)}</td>
        <td>${item.calories}</td>
        <td>${escapeHtml(item.ingredients)}</td>
        <td>
          <button class="btn btn-sm btn-outline-danger" onclick="removeEntry(${idx})">Delete</button>
        </td>
      `;
      tableBody.appendChild(tr);
    });

    totalEl.textContent = total;
  }

  window.removeEntry = function (idx) {
    entries.splice(idx, 1);
    renderTable();
  };

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = foodName.value.trim();
    const calories = Number(foodCalories.value);
    const ingredients = foodIngredients.value.trim();

    if (!name || isNaN(calories)) {
      alert("Enter valid food name and calories.");
      return;
    }

    entries.push({ name, calories, ingredients });
    renderTable();
    form.reset();
    recipeSelect.value = "";
  });

  clearBtn.addEventListener("click", () => {
    if (confirm("Clear all entries?")) {
      entries = [];
      renderTable();
    }
  });
}

// =============================================================
// ======================= MEAL PLANNER =========================
// =============================================================
function initMealPlanner() {
  const form = document.getElementById("plannerForm");
  if (!form) return;

  const resultCard = document.getElementById("planResult");
  const recommendedEl = document.getElementById("recommendedCalories");
  const estimationText = document.getElementById("estimationText");
  const weeklyPlan = document.getElementById("weeklyPlan");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const bmi = parseFloat(document.getElementById("userBmi").value);
    const goal = document.getElementById("userGoal").value;

    if (!bmi || !goal) {
      alert("Please enter BMI and goal.");
      return;
    }

    let recommended = 2000;
    if (goal === "gain") recommended = bmi < 18.5 ? 2700 : 2500;
    else if (goal === "lose") recommended = bmi >= 30 ? 1200 : bmi >= 25 ? 1400 : 1600;

    recommendedEl.textContent = recommended;

    estimationText.textContent =
      goal === "gain"
        ? "With a ~500 kcal surplus, expect ~0.4–0.6 kg per week."
        : goal === "lose"
          ? "With a ~500 kcal deficit, expect ~0.4–0.6 kg per week."
          : "Maintaining calories keeps your weight stable.";

    weeklyPlan.innerHTML = "";
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    const breakfast = RECIPES.filter(r => r.calories <= 300);
    const meals = RECIPES;

    days.forEach((d, i) => {
      const b = breakfast[i % breakfast.length];
      const l = meals[(i + 1) % meals.length];
      const dn = meals[(i + 3) % meals.length];

      const row = document.createElement("div");
      row.className = "mb-2";
      row.innerHTML = `
        <strong>${d}</strong>
        <div><strong>Breakfast:</strong> ${b.name} — ${b.calories} kcal</div>
        <div><strong>Lunch:</strong> ${l.name} — ${l.calories} kcal</div>
        <div><strong>Dinner:</strong> ${dn.name} — ${dn.calories} kcal</div>
      `;
      weeklyPlan.appendChild(row);
    });

    resultCard.classList.remove("d-none");
    resultCard.scrollIntoView({ behavior: "smooth" });
  });
}
