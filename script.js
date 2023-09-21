document.addEventListener("DOMContentLoaded", function () {
    const yourProgressBar = document.getElementById("your-progress-bar");
    const yourStepCountElement = document.getElementById("your-step-count");
    const friendProgressBar = document.getElementById("friend-progress-bar");
    const friendStepCountElement = document.getElementById("friend-step-count");
    const addButton = document.getElementById("add-step-btn");
    const addFriendButton = document.getElementById("add-friend-step-btn");

    let yourStepCount = 0;
    let friendStepCount = 0;
    const goalSteps = 50;

    updateProgressBar();

    addButton.addEventListener("click", function () {
        yourStepCount++;
        updateProgressBar();
    });

    addFriendButton.addEventListener("click", function () {
        friendStepCount++;
        updateProgressBar();
    });

    function updateProgressBar() {
        const yourProgress = (yourStepCount / goalSteps) * 100;
        yourProgressBar.style.width = yourProgress + "%";
        yourStepCountElement.textContent = yourStepCount + " steps";

        const friendProgress = (friendStepCount / goalSteps) * 100;
        friendProgressBar.style.width = friendProgress + "%";
        friendStepCountElement.textContent = friendStepCount + " steps";

        if (yourStepCount >= goalSteps) {
            yourStepCountElement.textContent = "Tilykke du har vundet over David!!";
            addButton.disabled = true;
        }

        if (friendStepCount >= goalSteps) {
            friendStepCountElement.textContent = "David har vundet over dig, du er en taber!";
            addFriendButton.disabled = true;
        }
    }
});
//gay
