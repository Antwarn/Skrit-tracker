document.addEventListener('DOMContentLoaded', function () {
    const stepsElement1 = document.getElementById('steps1');
    const stepsElement2 = document.getElementById('steps2');
    const incrementButton1 = document.getElementById('increment1');
    const incrementButton2 = document.getElementById('increment2');
    const progress1 = document.getElementById('progress1');
    const progress2 = document.getElementById('progress2');
    const friendList = document.getElementById('friend-list');
    const createTaskButton = document.getElementById('createTask');
    const taskNameInput = document.getElementById('taskName');

    let steps1 = 0;
    let steps2 = 0;
    const friends = [{ name: "Friend 1", steps: 0 }, { name: "Friend 2", steps: 0 }];
    const goal = 100;
    let loser = null;
    let currentTaskName = "";

    incrementButton1.addEventListener('click', () => {
        steps1++;
        stepsElement1.innerText = steps1;
        updateFriendSteps("Friend 1", steps1);
        updateProgress(progress1, steps1);
        checkLoser("Friend 1", steps1);
    });

    incrementButton2.addEventListener('click', () => {
        steps2++;
        stepsElement2.innerText = steps2;
        updateFriendSteps("Friend 2", steps2);
        updateProgress(progress2, steps2);
        checkLoser("Friend 2", steps2);
    });

    createTaskButton.addEventListener('click', () => {
        const taskName = taskNameInput.value.trim();
        if (taskName !== '') {
            currentTaskName = taskName;
            friends.push({ name: taskName, steps: 0 });
            taskNameInput.value = '';
            renderFriends();
        }
    });

    function updateFriendSteps(name, steps) {
        const friendIndex = friends.findIndex((friend) => friend.name === name);
        if (friendIndex !== -1) {
            friends[friendIndex].steps = steps;
            renderFriends();
        }
    }

    function updateProgress(progress, steps) {
        progress.value = steps;
        // Update the progress bar label to show the step count
        progress.innerHTML = `${steps} / ${goal} steps`;
    }

    function checkLoser(name, steps) {
        if (steps >= goal && (loser === null || steps > friends.find(f => f.name === loser).steps)) {
            loser = name;
            alert(`${loser} is the loser and must do the task: ${currentTaskName}`);
        }
    }

    function renderFriends() {
        friendList.innerHTML = '';
        friends.forEach((friend) => {
            const listItem = document.createElement('li');
            listItem.innerText = `${friend.name}: ${friend.steps} steps`;
            friendList.appendChild(listItem);
        });
    }
});
