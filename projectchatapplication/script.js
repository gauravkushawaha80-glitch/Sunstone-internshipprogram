// Elements
const input = document.querySelector(".input-box input");
const sendBtn = document.querySelector(".input-box button");
const messages = document.querySelector(".messages");
const contacts = document.querySelectorAll(".contact");
const moonBtn = document.querySelector(".fa-moon");

// Send Message Function
function sendMessage() {

    let text = input.value.trim();

    if (text === "") return;

    // Create new message
    const msg = document.createElement("div");
    msg.classList.add("message", "right");

    msg.innerHTML = `
        ${text}
        <span>${getTime()}</span>
    `;

    messages.appendChild(msg);

    // Auto scroll
    messages.scrollTop = messages.scrollHeight;

    // Clear input
    input.value = "";

    // Fake reply after 1 sec
    setTimeout(() => {

        const reply = document.createElement("div");

        reply.classList.add("message", "left");

        reply.innerHTML = `
            Okay 👍
            <span>${getTime()}</span>
        `;

        messages.appendChild(reply);

        messages.scrollTop = messages.scrollHeight;

    },1000);

}


// Current Time
function getTime() {

    let date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();

    minutes = minutes < 10 ? "0" + minutes : minutes;

    return `${hours}:${minutes}`;
}


// Button Click
sendBtn.addEventListener("click", sendMessage);


// Enter Key
input.addEventListener("keypress", function(e){

    if(e.key === "Enter"){
        sendMessage();
    }

});


// Active Contact
contacts.forEach(contact=>{

    contact.addEventListener("click", ()=>{

        contacts.forEach(c=>{
            c.classList.remove("active-contact");
        });

        contact.classList.add("active-contact");

    });

});


// Dark Mode
moonBtn.addEventListener("click", ()=>{

    document.body.classList.toggle("dark");

});