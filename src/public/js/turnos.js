const form = document.getElementById("turnosForm");

const reserves = [];
form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const data = new FormData(form);
    
    const obj = {};
    data.forEach((value, key) => obj[key] = value);

    
    let date = document.getElementById("date");
    const horario = document.getElementById("listaHora");

    let selectedTime = obj.time;
    let id;

    switch (selectedTime) {
        case "08:30":
            id = 1;
        break;
        case "09:00":
            id = 2;
        break;
        case "09:30":
            id = 3;
        break;
        case "10:00":
            id = 4;
        break;
        case "10:30":
            id = 5;
        break;
        case "11:00":
            id = 6;
        break;
        case "11:30":
            id = 7;
        break;
        case "12:00":
            id = 8;
        break;
    }

    const option = document.getElementById(id);
    

    horario.removeChild(option);
    //id = `${obj.time.value}`
    //date.min = "2023-04-12"
    //date.value.readOnly = true
    const reserve = {
        date: obj.date,
        time: obj.time
    }
    reserves.push(reserve)
    if(horario.childElementCount === 0){
        const time = document.getElementById("time")
        time.readOnly = true;
    }
    console.log(reserves)
})

