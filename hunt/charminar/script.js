document.addEventListener("DOMContentLoaded", function () {
    let currentClueIndex = 0;
    const clues = document.querySelectorAll(".clue-box");  
    const feedback1 = document.getElementById("feedback1");
    const feedback2 = document.getElementById("feedback2");
    const feedback3 = document.getElementById("feedback3");
    const uploadPopup = document.getElementById("imageUploadPopup");
    const suggestionPopup = document.getElementById("suggestionPopup");
    
    clues[currentClueIndex].classList.add("visible");
  
    document.getElementById("submit1").addEventListener("click", function () {
      const answer1 = document.getElementById("answer1").value.toLowerCase().trim();
      
      if (answer1 === "circular") { 
        feedback1.textContent = "Correct! Upload a picture from the location.";
        clues[currentClueIndex].classList.add("fade-out");
        
        setTimeout(() => {
          clues[currentClueIndex].classList.remove("visible");
          uploadPopup.classList.remove("hidden");
        }, 1000);
      } else {
        feedback1.textContent = "Incorrect! Try again.";
      }
    });
  
    document.getElementById("uploadImage").addEventListener("click", function () {
      const fileInput = document.getElementById("imageUpload");
      
      if (fileInput.files.length > 0) {
        document.getElementById("uploadFeedback").textContent = "Image uploaded successfully!";
        uploadPopup.classList.add("hidden");
        showSuggestions(currentClueIndex);
      } else {
        document.getElementById("uploadFeedback").textContent = "Please upload an image.";
      }
    });
  
    document.getElementById("nextClue").addEventListener("click", function () {
      suggestionPopup.classList.add("hidden");
      currentClueIndex++;
  
      if (currentClueIndex < clues.length) {
        clues.forEach(clue => clue.classList.remove("visible")); 
        clues[currentClueIndex].classList.add("visible"); 
      } else {
        window.location.href = "/hunt/feedback/feedback.html"; 
      }
    });
  
    document.getElementById("submit2").addEventListener("click", function () {
      const answer2 = document.getElementById("answer2").value.toLowerCase().trim();
      
      if (answer2 === "deccan carpet") { 
        feedback2.textContent = "Correct! Upload a picture from the location.";
        clues[currentClueIndex].classList.add("fade-out");
        
        setTimeout(() => {
          clues[currentClueIndex].classList.remove("visible");
          uploadPopup.classList.remove("hidden");
        }, 1000);
      } else {
        feedback2.textContent = "Incorrect! Try again.";
      }
    });
  
    document.getElementById("submit3").addEventListener("click", function () {
      const answer3 = document.getElementById("answer3").value.toLowerCase().trim();
      
      if (answer3 === "minar bangles") { 
        feedback3.textContent = "Correct! Upload a picture from the location.";
        clues[currentClueIndex].classList.add("fade-out");
        
        setTimeout(() => {
          clues[currentClueIndex].classList.remove("visible");
          uploadPopup.classList.remove("hidden");
        }, 1000);
      } else {
        feedback3.textContent = "Incorrect! Try again.";
      }
    });
  
    const showSuggestions = (index) => {
      const suggestionList = document.getElementById("suggestionList");
      suggestionList.innerHTML = "";
      let suggestions = [];
  
      if (index === 0) {
        suggestions = [
          "Explore the market area nearby and avail 10% discount.",
          "Look out for unique artifacts.",
          "Try visiting the historical monument."
        ];
      } else if (index === 1) {
        suggestions = [
          "Pay attention to the architecture.",
          "Don't miss the textiles section and avail 10% discount.",
          "Check out the local artwork."
        ];
      } else if (index === 2) {
        suggestions = [
          "Fun fact: Hyderabad, the 'City of Pearls' maintains a strong connection to pearls despite being far from the sea, thanks to its historical trade routes and the Nizam’s support of skilled craftsmen.",
          "Buy customised bangles and get a 10% discount."
        ];
      }
  
      suggestions.forEach(suggestion => {
        const suggestionItem = document.createElement("li");
        suggestionItem.textContent = suggestion;
        suggestionList.appendChild(suggestionItem);
      });
      
      suggestionPopup.classList.remove("hidden");
    };
    
    const showHint = (hintId) => {
      document.getElementById(hintId).classList.toggle("visible");
    };
  
    // Hint event listeners
    document.getElementById("freeHint1").addEventListener("click", function () {
      showHint("hintText1");
    });
  
    document.getElementById("paidHint1").addEventListener("click", function () {
      if (document.getElementById("paymentCompleted").checked) {
        showHint("hintText1");
      } else {
        alert("Please complete payment to access this hint.");
      }
    });
  
    document.getElementById("freeHint2").addEventListener("click", function () {
      showHint("hintText2");
    });
  
    document.getElementById("paidHint2").addEventListener("click", function () {
      if (document.getElementById("paymentCompleted").checked) {
        showHint("hintText2");
      } else {
        alert("Please complete payment to access this hint.");
      }
    });
  
    document.getElementById("freeHint3").addEventListener("click", function () {
      showHint("hintText3");
    });
  
    document.getElementById("paidHint3").addEventListener("click", function () {
      if (document.getElementById("paymentCompleted").checked) {
        showHint("hintText3");
      } else {
        alert("Please complete payment to access this hint.");
      }
    });
  });