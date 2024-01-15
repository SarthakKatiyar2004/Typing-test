const paragraphs = [
    "A Wild Boar was sharpening his tusks busily against the stump of a tree, when a Fox happened by. Now the Fox was always looking for a chance to make fun of his neighbors. So he made a great show of looking anxiously about, as if in fear of some hidden enemy. But the Boar kept right on with his work. \"Why are you doing that?\" asked the Fox at last with a grin. \"There isn't any danger that I can see.\" \"True enough,\" replied the Boar, \"but when danger does come there will not be time for such work as this. My weapons will have to be ready for use then, or I shall suffer for it.\"",
    "A Heron was walking sedately along the bank of a stream, his eyes on the clear water, and his long neck and pointed bill ready to snap up a likely morsel for his breakfast. The clear water swarmed with fish, but Master Heron was hard to please that morning. \"No small fry for me,\" he said. \"Such scanty fare is not fit for a Heron.\" Now a fine young Perch swam near.  \"No indeed,\" said the Heron. \"I wouldn't even trouble to open my beak for anything like that!\" As the sun rose, the fish left the shallow water near the shore and swam below into the cool depths toward the middle. The Heron saw no more fish, and very glad was he at last to breakfast on a tiny Snail.",
    "The Fox one day thought of a plan to amuse himself at the expense of the Stork, at whose odd appearance he was always laughing. \"You must come and dine with me today,\" he said to the Stork, smiling to himself at the trick he was going to play. The Stork gladly accepted the invitation and arrived in good time and with a very good appetite. For dinner the Fox served soup. But it was set out in a very shallow dish, and all the Stork could do was to wet the very tip of his bill. Not a drop of soup could he get. But the Fox lapped it up easily, and, to increase the disappointment of the Stork, made a great show of enjoyment. The hungry Stork was much displeased at the trick, but he was a calm, even-tempered fellow and saw no good in flying into a rage. Instead, not long afterward, he invited the Fox to dine with him in turn. The Fox arrived promptly at the time that had been set, and the Stork served a fish dinner that had a very appetizing smell. But it was served in a tall jar with a very narrow neck. The Stork could easily get at the food with his long bill, but all the Fox could do was to lick the outside of the jar, and sniff at the delicious odor. And when the Fox lost his temper, the Stork said calmly: \t Do not play tricks on your neighbors unless you can stand the same treatment yourself.",
    "A Stag, drinking from a crystal spring, saw himself mirrored in the clear water. He greatly admired the graceful arch of his antlers, but he was very much ashamed of his spindling legs. \"How can it be,\" he sighed, \"that I should be cursed with such legs when I have so magnificent a crown.\" At that moment he scented a panther and in an instant was bounding away through the forest. But as he ran his wide-spreading antlers caught in the branches of the trees, and soon the Panther overtook him. Then the Stag perceived that the legs of which he was so ashamed would have saved him had it not been for the useless ornaments on his head.",
    "A Fox and a Leopard, resting lazily after a generous dinner, amused themselves by disputing about their good looks. The Leopard was very proud of his glossy, spotted coat and made disdainful remarks about the Fox, whose appearance he declared was quite ordinary. The Fox prided himself on his fine bushy tail with its tip of white, but he was wise enough to see that he could not rival the Leopard in looks. Still he kept up a flow of sarcastic talk, just to exercise his wits and to have the fun of disputing. The Leopard was about to lose his temper when the Fox got up, yawning lazily. \"You may have a very smart coat,\" he said, \"but you would be a great deal better off if you had a little more smartness inside your head and less on your ribs, the way I am. That's what I call real beauty.\""
];

const typingText = document.querySelector(".typing-text p"),
    inpField = document.querySelector(".wrapper .input-field"),
    tryAgainBtn = document.querySelector(".content button"),
    timeTag = document.querySelector(".timeLeft span b"),
    errorTag = document.querySelector(".errors span"),
    wpmTag = document.querySelector(".wpm span"),
    cpmTag = document.querySelector(".cpm span");

let timer,
    maxTime = 60,
    timeLeft = maxTime,
    charIndex = errors = isTyping = 0;

function loadParagraph() {
    const ranIndex = Math.floor(Math.random() * paragraphs.length);
    typingText.innerHTML = "";
    paragraphs[ranIndex].split("").forEach(char => {
        let span = `<span>${char}</span>`
        typingText.innerHTML += span;
    });
    typingText.querySelectorAll("span")[0].classList.add("active");
    document.addEventListener("keydown", () => inpField.focus());
    typingText.addEventListener("click", () => inpField.focus());
}

function initTyping() {
    let characters = typingText.querySelectorAll("span");
    let typedChar = inpField.value.split("")[charIndex];
    if (charIndex < characters.length - 1 && timeLeft > 0) {
        if (!isTyping) {
            timer = setInterval(initTimer, 1000);
            isTyping = true;
        }
        if (typedChar == null) {
            if (charIndex > 0) {
                charIndex--;
                if (characters[charIndex].classList.contains("incorrect")) {
                    errors--;
                }
                characters[charIndex].classList.remove("correct", "incorrect");
            }
        } else {
            if (characters[charIndex].innerText == typedChar) {
                characters[charIndex].classList.add("correct");
            } else {
                errors++;
                characters[charIndex].classList.add("incorrect");
            }
            charIndex++;
        }
        characters.forEach(span => span.classList.remove("active"));
        characters[charIndex].classList.add("active");

        let wpm = Math.round(((charIndex - errors) / 5) / (maxTime - timeLeft) * 60);
        wpm = wpm < 0 || !wpm || wpm === Infinity ? 0 : wpm;

        wpmTag.innerText = wpm;
        errorTag.innerText = errors;
        cpmTag.innerText = charIndex - errors;
    } else {
        clearInterval(timer);
        inpField.value = "";
    }
}

function initTimer() {
    if (timeLeft > 0) {
        timeLeft--;
        timeTag.innerText = timeLeft;
        let wpm = Math.round(((charIndex - errors) / 5) / (maxTime - timeLeft) * 60);
        wpmTag.innerText = wpm;
    } else {
        clearInterval(timer);
    }
}

function resetTest() {
    loadParagraph();
    clearInterval(timer);
    timeLeft = maxTime;
    charIndex = errors = isTyping = 0;
    inpField.value = "";
    timeTag.innerText = timeLeft;
    wpmTag.innerText = 0;
    errorTag.innerText = 0;
    cpmTag.innerText = 0;
}

loadParagraph();
inpField.addEventListener("input", initTyping);
tryAgainBtn.addEventListener("click", resetTest);