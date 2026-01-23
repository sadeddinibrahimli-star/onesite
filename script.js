const usernameInput = document.getElementById("username");
const login = document.getElementById("login");
const terminal = document.getElementById("terminal");

let started = false;

// ENTER basılanda başlasın
document.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !started) {
        started = true;
        startTerminal();
    }
});

async function startTerminal() {
    const user = usernameInput.value || "guest";

    login.style.display = "none";
    terminal.style.display = "block";

    await printLine(`User ${user} detected...`, 500);
    await printLine("Initializing system...");
    await printLine("Loading kernel modules...");
    await printLine("Establishing secure connection...");

    // DOWNLOAD 1
    for (let i = 0; i <= 100; i += 10) {
        const totalBlocks = 10;          // 10 bloklu bar
        const filledBlocks = Math.floor(i / 10); // hər 10% → 1 blok
        const emptyBlocks = totalBlocks - filledBlocks;

        const bar =
            " ▰ ".repeat(filledBlocks) +
            " - ".repeat(emptyBlocks);

        await printLine(`Downloading data [${bar}] ${i}%`, 150);
    }
    // IP SCAN 1
    for (let i = 0; i < 10; i++) {
        const ip = `${rand()}.${rand()}.${rand()}.${rand()}`;
        await printLine(`Scanning node ${ip}`, 120);
    }
    // DOWNLOAD 2 (same line update)
    const totalBlocks = 10;

    // create the line once
    terminal.innerHTML += `Downloading data [${" ♡ ".repeat(totalBlocks)}] 0%<br>`;
    let lineIndex = terminal.innerHTML.lastIndexOf("Downloading data");

    for (let i = 10; i <= 100; i += 10) {
        const filledBlocks = i / 10;
        const emptyBlocks = totalBlocks - filledBlocks;

        const bar =
            '<span style="font-size:24px; color: rgb(53, 211, 53);">♥</span>'.repeat(filledBlocks) +
            '<span style="font-size:24px; color:rgb(53, 211, 53);">♡</span>'.repeat(emptyBlocks);

        // replace ONLY the last download line
        terminal.innerHTML =
            terminal.innerHTML.slice(0, lineIndex) +
            `Downloading data [${bar}] ${i}%<br>`;

        await new Promise(r => setTimeout(r, 150));
    }

    // IP SCAN 2
    for (let i = 0; i < 30; i++) {
        const ip = `${rand()}.${rand()}.${rand()}.${rand()}`;
        await printLine(`Scanning node ${ip}`, 120);
    }

    await printLine("Decrypting files...");
    await printLine("Verification complete ✔");
    await printLine("System ready.");
}

function printLine(text, delay = 300) {
    return new Promise(resolve => {
        setTimeout(() => {
            terminal.innerHTML += text + "<br>";
            terminal.scrollTop = terminal.scrollHeight;
            resolve();
        }, delay);
    });
}

function rand() {
    return Math.floor(Math.random() * 256);
}
