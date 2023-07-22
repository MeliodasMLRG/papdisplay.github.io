document.getElementById("confirmBtn").addEventListener("click", function () {
    const maxHP = parseInt(document.getElementById("maxHP").value);
    const maxMP = parseInt(document.getElementById("maxMP").value);
  
    if (!isNaN(maxHP) && !isNaN(maxMP)) {
      // Redirect to the new page and pass maxHP and maxMP as query parameters
      window.location.href = `game.html?maxHP=${maxHP}&maxMP=${maxMP}`;
    } else {
      alert("Please enter valid numbers for Max HP and Max MP.");
    }

    function updateBarsAndTexts() {
        const hpText = document.getElementById("hpText");
        const mpText = document.getElementById("mpText");
      
        hpText.textContent = `${currentHP} / ${maxHP}`;
        mpText.textContent = `${currentMP} / ${maxMP}`;
      
        const hpBarFill = document.getElementById("hpBar");
        const mpBarFill = document.getElementById("mpBar");
        const hpPercentage = (currentHP / maxHP) * 100;
        const mpPercentage = (currentMP / maxMP) * 100;
        hpBarFill.style.width = hpPercentage + "%";
        mpBarFill.style.width = mpPercentage + "%";
      }

  });
  