//simple if 
let name="raj"
if (name == "raj")
{
    console.log("Welcome to raj")
}

//if--else
let age = 20
if (age >=18)
{
    console.log("Eligible to vote")
}
else
{
    console.log("Not eligible to vote")
}

// if else if ladder
let a = 0;
if (a > 0)
{
    console.log(``)
}
else if (a < 0)
{
    console.log(``)
}
else 
{
    console.log(`${a}`)
}

// check the gender of person, only males who are above 18 are eligible for this job. user appropriate else cases 
let gender = 'M' , ag = 21;
if (gender == "male")
{
    if (age > 18)
    {
        console.log("you are eligible")
    }
    else
    {
        console.log("males less than 18 nare not eligible")
    }
}
else
{
  console.log("females are not eligible")
}


// printing the day the based on its number 0-sunday, 1- monday...
let day = 4;
switch(day)
{
    case 0:console.log("sunday");break
    case 1:console.log("Monday");break
    case 2:console.log("Tuesday");break
    case 3:console.log("Wednesday");break
    case 4:console.log("Thursday");
    case 5:console.log("Friday");
    case 6:console.log("Saturday");break

    default: console.log("please enter value between 0-6");
}