// ==========================
// LOADER
// ==========================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        },500);

    },800);

});

// ==========================
// BOOKING MODAL
// ==========================

const modal = document.getElementById("bookingModal");

const closeBtn = document.querySelector(".close");

const buttons = document.querySelectorAll(".book-btn");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        modal.style.display = "flex";

    });

});

closeBtn.onclick = () => {

    modal.style.display = "none";

};

window.onclick = (e) => {

    if(e.target === modal){

        modal.style.display = "none";

    }

};

// ==========================
// FORM
// ==========================

const form = document.getElementById("bookingForm");

form.addEventListener("submit",(e)=>{

    e.preventDefault();const promo = document.getElementById("promoCode").value.trim().toUpperCase();

if (promo !== "" && promo !== "SIR10") {
    alert("Ugyldig promokode!");
    return;
}

if (promo === "SIR10") {
    alert("✅ Promokode aktivert! 10% rabatt.");
} 
emailjs.sendForm(
    "service_03vx88u",
    "template_tl6cfws",
    form
)
.then(() => {
    console.log("Письмо отправлено!");
})
.catch((error) => {
    alert(JSON.stringify(error));
    console.log(error);
    console.error(error);
});

    const button=form.querySelector("button");

    button.innerHTML="Sender...";

    button.disabled=true;

    setTimeout(()=>{

        button.innerHTML="✓ Bestillingen er sendt";

        button.style.background="#16a34a";

        form.reset();

        setTimeout(()=>{

            modal.style.display="none";

            button.innerHTML="Bestill Nå";

            button.disabled=false;

            button.style.background="#4da3ff";

        },1800);

    },1500);

});

// ==========================
// FAQ
// ==========================

document.querySelectorAll(".faq-question").forEach(question=>{

    question.addEventListener("click",()=>{

        const answer=question.nextElementSibling;

        if(answer.style.display==="block"){

            answer.style.display="none";

        }else{

            document.querySelectorAll(".faq-answer").forEach(item=>{

                item.style.display="none";

            });

            answer.style.display="block";

        }

    });

});

// ==========================
// SUPPORT BUTTON
// ==========================

const support=document.getElementById("supportButton");

support.addEventListener("click",()=>{

    alert(
`Kontakt oss

📞 Telefon:
+47 123 45 678

✉️ E-post:
Sirrenspleie@gmail.com

Telegram:
@SIRRensPleie

WhatsApp:
+47 123 45 678`
    );

});

// ==========================
// SCROLL ANIMATION
// ==========================

const observer=new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";

            entry.target.style.transform="translateY(0px)";

        }

    });

});

document.querySelectorAll("section").forEach(section=>{

    section.style.opacity="0";

    section.style.transform="translateY(60px)";

    section.style.transition="1s";

    observer.observe(section);

});

