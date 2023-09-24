// Dette event listener kører, når DOM'en er fuldt indlæst
document.addEventListener('DOMContentLoaded', function () {
    // Få DOM-elementer ved hjælp af deres ID'er
    const stepsElement1 = document.getElementById('steps1');
    const stepsElement2 = document.getElementById('steps2');
    const incrementButton1 = document.getElementById('increment1');
    const incrementButton2 = document.getElementById('increment2');
    const progress1 = document.getElementById('progress1');
    const progress2 = document.getElementById('progress2');
    const friendList = document.getElementById('friend-list');
    const createTaskButton = document.getElementById('createTask');
    const taskNameInput = document.getElementById('taskName');
    const taskStepsInput = document.getElementById('taskSteps');
    const playerSelect = document.getElementById('playerSelect'); // Input til valg af spiller

    let steps1 = 0; // Initialiser trinoptælling for spiller 1
    let steps2 = 0; // Initialiser trinoptælling for spiller 2
    const friends = [{ name: "Ven 1", steps: 0 }, { name: "Ven 2", steps: 0 }]; // Array til at gemme venners trinoptælling
    let goal = parseInt(taskStepsInput.value); // Initialiser målet baseret på taskStepsInput
    let loser = null; // Initialiser variabel for taber
    let currentTaskName = ""; // Initialiser navnet på den aktuelle opgave

    // Sæt den indledende værdi af opgavens trin-input til det delte mål
    taskStepsInput.value = goal;

    // Opdater målet, når taskStepsInput ændres
    taskStepsInput.addEventListener('change', () => {
        goal = parseInt(taskStepsInput.value);
    });

    // Event listener for "Inkrementer" knappen for spiller 1
    incrementButton1.addEventListener('click', () => {
        steps1++; // Inkrementer trinoptælling for spiller 1
        stepsElement1.innerText = steps1; // Opdater den viste trinoptælling for spiller 1
        updateFriendSteps("Ven 1", steps1); // Opdater vennens trinoptælling
        updateProgress(progress1, steps1); // Opdater fremskridtlinjen for spiller 1
        checkLoser("Ven 1", steps1); // Tjek om spiller 1 er taberen
    });

    // Event listener for "Inkrementer" knappen for spiller 2
    incrementButton2.addEventListener('click', () => {
        steps2++; // Inkrementer trinoptælling for spiller 2
        stepsElement2.innerText = steps2; // Opdater den viste trinoptælling for spiller 2
        updateFriendSteps("Ven 2", steps2); // Opdater vennens trinoptælling
        updateProgress(progress2, steps2); // Opdater fremskridtlinjen for spiller 2
        checkLoser("Ven 2", steps2); // Tjek om spiller 2 er taberen
    });

    // Event listener for "Opret Opgave" knappen
    createTaskButton.addEventListener('click', () => {
        const taskName = taskNameInput.value.trim(); // Hent opgavens navn fra input
        const taskSteps = parseInt(taskStepsInput.value); // Hent trinene fra input
        if (taskName !== '' && !isNaN(taskSteps)) {
            currentTaskName = taskName; // Sæt navnet på den aktuelle opgave
            friends.push({ name: taskName, steps: 0, goal: taskSteps }); // Inkluder målet i opgaveobjektet
            taskNameInput.value = ''; // Ryd opgavenavn-input
            renderFriends(); // Opdater listen over venner
        }
    });
    

    // Funktion til at opdatere en vens trinoptælling
    function updateFriendSteps(name, steps) {
        const friendIndex = friends.findIndex((friend) => friend.name === name);
        if (friendIndex !== -1) {
            friends[friendIndex].steps = steps;
        }
    }

        // Funktion til at opdatere fremskridtlinjen
        // Function to update the progress bar
    function updateProgress(progress, steps) {
        progress.value = steps; // Set the progress bar value to the current step count
        // Update the progress bar label to show the step count and goal
        progress.innerHTML = `${steps} / ${goal} steps`;
    }


    // Funktion til at tjekke og vise taberen
    function checkLoser(name, steps) {
        if (steps >= goal && (loser === null || steps > friends.find(f => f.name === loser).steps)) {
            loser = name; // Sæt taberens navn
            alert(`${loser} er taberen og skal: ${currentTaskName}`); // Vis en besked med taberens navn og opgave
        }
    }

    // Funktion til at vise listen over venner
    function renderFriends() {
        friendList.innerHTML = ''; // Ryd listen over venner
        friends.forEach((friend) => {
            const listItem = document.createElement('li'); // Opret en listeindgang for hver ven
            listItem.innerText = `${friend.name}: ${friend.steps} trin`; // Vis venens navn og trinoptælling
            friendList.appendChild(listItem); // Tilføj listeindgangen til listen over venner
        });
    }
});
