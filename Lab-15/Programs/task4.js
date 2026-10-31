function getUsers() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { id: 1, name: "mohi" },
                { id: 2, name: "nandu" },
                { id: 3, name: "sandhu" }
            ]);
        }, 100);
    });
}

async function showUsers() {
    let users = await getUsers();

    users.forEach(user => {
        console.log(user.name);
    });
}

showUsers();