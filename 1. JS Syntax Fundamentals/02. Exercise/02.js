function vacation(people, typeGroup, day) {
    let pricePerson = 0;

    if (typeGroup === "Students") {

        if (day === "Friday") pricePerson = 8.45;
        else if (day === "Saturday") pricePerson = 9.80;
        else if (day === "Sunday") pricePerson = 10.46;
    }
    else if (typeGroup === "Business") {

        if (day === "Friday") pricePerson = 10.90;
        else if (day === "Saturday") pricePerson = 15.60;
        else if (day === "Sunday") pricePerson = 16;
    }
    else if (typeGroup === "Regular") {

        if (day === "Friday") pricePerson = 15;
        else if (day === "Saturday") pricePerson = 20;
        else if (day === "Sunday") pricePerson = 22.50;
    }

    let totalCost = people * pricePerson;

    // 15% Discount
    if (typeGroup === "Students" && people >= 30) totalCost *= 0.85; 
    //10 of them can stay for free
    else if (typeGroup === "Business" && people >= 100) totalCost -= pricePerson * 10; 
    // 5% Discount
    else if (typeGroup === "Regular" && people >= 10 && people <= 20) totalCost *= 0.95;

    console.log(`Total price: ${totalCost.toFixed(2)}`);
}

vacation(30, "Students", "Sunday");
vacation(40, "Regular", "Saturday");
