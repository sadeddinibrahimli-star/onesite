const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password")
const login = document.getElementById("login");
const terminal = document.getElementById("terminal");
const intro = document.querySelector('.intro');
const intro2 = document.querySelector('.intro2');
const flashRed = document.getElementById("redLight");
const startButton = document.getElementById("tvButton")
const offScreen = document.getElementById("screen")
const mainScreen = document.getElementById("mainScreen")
let started = false;
// it start when press to enter 
document.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !started) {
        started = true;
        if (validateForm()) {
            startTerminal();
        } else {
            started = false;
        }
    }
});
let stopRepeat = false;
function validateForm() {
    user = usernameInput.value
    password = passwordInput.value
    let errorMsg = document.getElementById("errorMsg");

    if (user != "Raiko" || password != "010725") {
        errorMsg.textContent = "WRONG INPUT";
        flashRed.style.opacity = '0.5';
        setTimeout(function() {
            flashRed.style.opacity = '0';
        },100);
           return false;
    }

    // BURADA mesaj silinir
    errorMsg.textContent = "";

    // burada artıq hər şey normal davam edir
    return true;
}
async function startTerminal() {
    login.style.display = "none";
    terminal.style.display = "block";
    printLine(`User ${user} detected...`, 500);
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

    for (let i = 10; i < 110; i += Math.floor(Math.random() * 10)) {
        const filledBlocks = i / 10
        const emptyBlocks = totalBlocks - filledBlocks;

        const bar =
            '<span style="font-size:24px; color: rgb(53, 211, 53);">♥</span>'.repeat(filledBlocks) +
            '<span style="font-size:24px; color:rgb(53, 211, 53);">♡</span>'.repeat(emptyBlocks);


        // replace ONLY the last download line
        if (i < 100) {
            terminal.innerHTML =
                terminal.innerHTML.slice(0, lineIndex) +
                `Downloading data [${bar}] ${i}%<br>`;
        }
        else {
            terminal.innerHTML =
                terminal.innerHTML.slice(0, lineIndex) +
                `Downloading data [${bar}] 100%<br>`;
        }
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
    setTimeout(() => {
        window.location.href = "flowerSite.html"
    })
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
let buttonOffOn = 0;
startButton.addEventListener("click", function(){
    if (buttonOffOn == 0) {
        startScreen();
        buttonOffOn+=1;
    } else if(buttonOffOn >0) {
        finishesScreen();
        buttonOffOn-= 1;
    }
});

function startScreen() {
    console.log("h")
    mainScreen.animate(
        [
            { opacity: 0 },
            { opacity: 1 }
        ],
        {
            duration: 100,
            easing: 'ease-in-out',
            fill: 'forwards'
        }
    );
    offScreen.animate(
        [
            { opacity: 1 },
            { opacity: 0},
        ],
        {
            duration: 1000,
            easing: 'ease-in-out',
            fill: 'forwards'
        }
    );
    setTimeout(() => {
        offScreen.classList.remove('screen');
    }, 1000)
}

function finishesScreen() {
    console.log("h")
    setTimeout(() => {
        offScreen.classList.add('screen');
    }, 1000)
    offScreen.animate(
        [
            { opacity: 0 },
            { opacity: 1 },
        ],
        {
            duration: 2000,
            easing: 'ease-in-out',
            fill: 'forwards'
        }
    );
}