let form=document.querySelector("form");
let inputs=document.querySelectorAll("input");
let main=document.querySelector("#main");

form.addEventListener("submit",function(e){
    e.preventDefault();//prevents the form from submitting
    console.log(inputs[0].value,
        inputs[1].value,
        inputs[2].value,
        inputs[3].value
    );
    let card=document.createElement("div");
    card.classList.add("card");
    main.appendChild(card);

    let prof=document.createElement("div");
    prof.classList.add("profile");
    card.appendChild(prof);

    let img=document.createElement("img");
    img.setAttribute("src",inputs[0].value)
    prof.appendChild(img);


    let h3=document.createElement("h3");
    h3.textContent=inputs[1].value;
    card.appendChild(h3);

    let h4=document.createElement("h4");
    h4.textContent=inputs[2].value;
    card.appendChild(h4);

    let p=document.createElement("p");
    p.textContent=inputs[3].value;
    card.appendChild(p);
    

    inputs.forEach(function(inp){
    if (inp.type!="submit")    
        {inp.value="";
        };
    });
})