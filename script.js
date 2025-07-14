document.getElementById("calculateBtn").addEventListener("click", function () {
    const dob = document.getElementById("dob").value;
    const result = document.getElementById("result");

    if (!dob) {
        result.innerHTML = "Please enter your date of birth.";
        result.classList.add("fade");
        return;
    }

    const birthDate = new Date(dob);
    const today = new Date();

    if (birthDate > today) {
        result.innerHTML = "Date of birth cannot be in the future!";
        result.classList.add("fade");
        return;
    }

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
        months--;
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    const ageInMs = today - birthDate;
    const ageInDays = Math.floor(ageInMs / (1000 * 60 * 60 * 24));
    const ageInWeeks = Math.floor(ageInDays / 7);
    const ageInHours = Math.floor(ageInMs / (1000 * 60 * 60));

    result.innerHTML = `
        🎂 You are <strong>${years} years, ${months} months, and ${days} days</strong> old.<br><br>
        🗓️ That’s about <strong>${ageInDays}</strong> days,<br>
        📆 <strong>${ageInWeeks}</strong> weeks,<br>
        ⏰ or <strong>${ageInHours}</strong> hours!
    `;
    result.classList.add("fade");
});
