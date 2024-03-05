const paragraphs = [
    "A Wild Boar was sharpening his tusks busily against the stump of a tree, when a Fox happened by. Now the Fox was always looking for a chance to make fun of his neighbors. So he made a great show of looking anxiously about, as if in fear of some hidden enemy. But the Boar kept right on with his work. \"Why are you doing that?\" asked the Fox at last with a grin. \"There isn't any danger that I can see.\" \"True enough,\" replied the Boar, \"but when danger does come there will not be time for such work as this. My weapons will have to be ready for use then, or I shall suffer for it.\"",
    "A Heron was walking sedately along the bank of a stream, his eyes on the clear water, and his long neck and pointed bill ready to snap up a likely morsel for his breakfast. The clear water swarmed with fish, but Master Heron was hard to please that morning. \"No small fry for me,\" he said. \"Such scanty fare is not fit for a Heron.\" Now a fine young Perch swam near.  \"No indeed,\" said the Heron. \"I wouldn't even trouble to open my beak for anything like that!\" As the sun rose, the fish left the shallow water near the shore and swam below into the cool depths toward the middle. The Heron saw no more fish, and very glad was he at last to breakfast on a tiny Snail.",
    "The Fox one day thought of a plan to amuse himself at the expense of the Stork, at whose odd appearance he was always laughing. \"You must come and dine with me today,\" he said to the Stork, smiling to himself at the trick he was going to play. The Stork gladly accepted the invitation and arrived in good time and with a very good appetite. For dinner the Fox served soup. But it was set out in a very shallow dish, and all the Stork could do was to wet the very tip of his bill. Not a drop of soup could he get. But the Fox lapped it up easily, and, to increase the disappointment of the Stork, made a great show of enjoyment. The hungry Stork was much displeased at the trick, but he was a calm, even-tempered fellow and saw no good in flying into a rage. Instead, not long afterward, he invited the Fox to dine with him in turn. The Fox arrived promptly at the time that had been set, and the Stork served a fish dinner that had a very appetizing smell. But it was served in a tall jar with a very narrow neck. The Stork could easily get at the food with his long bill, but all the Fox could do was to lick the outside of the jar, and sniff at the delicious odor. And when the Fox lost his temper, the Stork said calmly: \t Do not play tricks on your neighbors unless you can stand the same treatment yourself.",
    "A Stag, drinking from a crystal spring, saw himself mirrored in the clear water. He greatly admired the graceful arch of his antlers, but he was very much ashamed of his spindling legs. \"How can it be,\" he sighed, \"that I should be cursed with such legs when I have so magnificent a crown.\" At that moment he scented a panther and in an instant was bounding away through the forest. But as he ran his wide-spreading antlers caught in the branches of the trees, and soon the Panther overtook him. Then the Stag perceived that the legs of which he was so ashamed would have saved him had it not been for the useless ornaments on his head.",
    "A Fox and a Leopard, resting lazily after a generous dinner, amused themselves by disputing about their good looks. The Leopard was very proud of his glossy, spotted coat and made disdainful remarks about the Fox, whose appearance he declared was quite ordinary. The Fox prided himself on his fine bushy tail with its tip of white, but he was wise enough to see that he could not rival the Leopard in looks. Still he kept up a flow of sarcastic talk, just to exercise his wits and to have the fun of disputing. The Leopard was about to lose his temper when the Fox got up, yawning lazily. \"You may have a very smart coat,\" he said, \"but you would be a great deal better off if you had a little more smartness inside your head and less on your ribs, the way I am. That's what I call real beauty.\"",
    "A certain Wolf could not get enough to eat because of the watchfulness of the Shepherds. But one night he found a sheep skin that had been cast aside and forgotten. The next day, dressed in the skin, the Wolf strolled into the pasture with the Sheep. Soon a little Lamb was following him about and was quickly led away to slaughter. That evening the Wolf entered the fold with the flock. But it happened that the Shepherd took a fancy for mutton broth that very evening, and, picking up a knife, went to the fold. There the first he laid hands on and killed was the Wolf.",
    "A Dog, to whom the butcher had thrown a bone, was hurrying home with his prize as fast as he could go. As he crossed a narrow footbridge, he happened to look down and saw himself reflected in the quiet water as if in a mirror. But the greedy Dog thought he saw a real Dog carrying a bone much bigger than his own. If he had stopped to think he would have known better. But instead of thinking, he dropped his bone and sprang at the Dog in the river, only to find himself swimming for dear life to reach the shore. At last he managed to scramble out, and as he stood sadly thinking about the good bone he had lost, he realized what a stupid Dog he had been.",
    "A Dove saw an Ant fall into a brook. The Ant struggled in vain to reach the bank, and in pity, the Dove dropped a blade of straw close beside it. Clinging to the straw like a shipwrecked sailor to a broken spar, the Ant floated safely to shore. Soon after, the Ant saw a man getting ready to kill the Dove with a stone. But just as he cast the stone, the Ant stung him in the heel, so that the pain made him miss his aim, and the startled Dove flew to safety in a distant wood.",
    "A long time ago a Man met a Satyr in the forest and succeeded in making friends with him. The two soon became the best of comrades, living together in the Man's hut. But one cold winter evening, as they were walking homeward, the Satyr saw the Man blow on his fingers. \"Why do you do that?\" asked the Satyr. \"To warm my hands,\" the Man replied. When they reached home the Man prepared two bowls of porridge. These he placed steaming hot on the table, and the comrades sat down very cheerfully to enjoy the meal. But much to the Satyr's surprise, the Man began to blow into his bowl of porridge. \"Why do you do that?\" he asked. \"To cool my porridge,\" replied the Man. The Satyr sprang hurriedly to his feet and made for the door. \"Goodby,\" he said, \"I've seen enough. A fellow that blows hot and cold in the same breath cannot be friends with me!\"",
    "\"Why in the world do you walk sideways like that?\" said a Mother Crab to her son. \"You should always walk straight forward with your toes turned out.\" \"Show me how to walk, mother dear,\" answered the little Crab obediently, \"I want to learn.\" So the old Crab tried and tried to walk straight forward. But she could walk sideways only, like her son. And when she wanted to turn her toes out she tripped and fell on her nose.",
    "An Eagle, swooping down on powerful wings, seized a lamb in her talons and made off with it to her nest. A Jackdaw saw the deed, and his silly head was filled with the idea that he was big and strong enough to do as the Eagle had done. So with much rustling of feathers and a fierce air, he came down swiftly on the back of a large Ram. But when he tried to rise again he found that he could not get away, for his claws were tangled in the wool. And so far was he from carrying away the Ram, that the Ram hardly noticed he was there. The Shepherd saw the fluttering Jackdaw and at once guessed what had happened. Running up, he caught the bird and clipped its wings. That evening he gave the Jackdaw to his children. \"What a funny bird this is!\" they said laughing, \"what do you call it, father?\" \"That is a Jackdaw, my children. But if you should ask him, he would say he is an Eagle.\"",
    "A Farmer was driving his wagon along a miry country road after a heavy rain. The horses could hardly drag the load through the deep mud, and at last came to a standstill when one of the wheels sank to the hub in a rut. The farmer climbed down from his seat and stood beside the wagon looking at it but without making the least effort to get it out of the rut. All he did was to curse his bad luck and call loudly on Hercules to come to his aid. Then, it is said, Hercules really did appear, saying: \"Put your shoulder to the wheel, man, and urge on your horses. Do you think you can move the wagon by simply looking at it and whining about it? Hercules will not help unless you make some effort to help yourself.\" And when the farmer put his shoulder to the wheel and urged on the horses, the wagon moved very readily, and soon the Farmer was riding along in great content and with a good lesson learned."
];

const typingText = document.querySelector(".typing-text p"),
    inpField = document.querySelector(".wrapper .input-field"),
    tryAgainBtn = document.querySelector(".content button"),
    timeTag = document.querySelector(".timeLeft span b"),
    errorTag = document.querySelector(".errors span"),
    wpmTag = document.querySelector(".wpm span"),
    cpmTag = document.querySelector(".cpm span");

let timer,
    maxTime = 30,
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

        wpm = Math.round(((charIndex - errors) / 5) / (maxTime - timeLeft) * 60);
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
    if (timeLeft >1) {
        timeLeft--;
        timeTag.innerText = timeLeft;
        let wpm = Math.round(((charIndex - errors) / 5) / (maxTime - timeLeft) * 60);
        wpmTag.innerText = wpm;
    } else {
        clearInterval(timer);
        showResults();
        resetTest();
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

function showResults() {
    let accuracy = ((charIndex - errors) / charIndex) * 100;
    accuracy = accuracy.toFixed(2);

    document.getElementById('resultWpm').innerText = wpmTag.innerText;
    document.getElementById('resultCpm').innerText = cpmTag.innerText;
    document.getElementById('resultAccuracy').innerText = accuracy + '%';

    document.getElementById('typingScreen').style.display = 'none';
    document.getElementById('resultScreen').style.display = 'block';
}

document.getElementById('restartButton').addEventListener('click', () => {
    resetTest();

    document.getElementById('typingScreen').style.display = 'block';
    document.getElementById('resultScreen').style.display = 'none';
});



loadParagraph();
inpField.addEventListener("input", initTyping);
tryAgainBtn.addEventListener("click", resetTest);