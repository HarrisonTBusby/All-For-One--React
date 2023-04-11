async function SayHello(name){
    const promise = await fetch(`https://hbusbyallforone.azurewebsites.net/SayHello/Hello/${name}`);
    const data = await promise.text();
    return data;

    
}

async function Add2Numbers(num1, num2){
    const promise = await fetch(`https://hbusbyallforone.azurewebsites.net/add2Numbers/AddingNumbers/${num1}/${num2}`);
    const data = await promise.text();
    return data;
          
}
async function AskingQuestions(savedInput, savedInput2){
    const promise = await fetch(`https://hbusbyallforone.azurewebsites.net/AskingQuestions/AskingQuestions/${savedInput}/${savedInput2}`);
    const data = await promise.text();
    return data;
          
}

async function GreaterThanLessThan(savedInput1, savedInput2){
    const promise = await fetch(`https://hbusbyallforone.azurewebsites.net/GreaterThanLessThan/GreaterThanLessThan/${savedInput1}/${savedInput2}`);
    const data = await promise.text();
    return data;
          
}

async function madTime(madlib1, madlib2, madlib3, madlib4, madlib5, madlib6, madlib7, madlib8, madlib9, madlib10){
    const promise = await fetch(`https://hbusbyallforone.azurewebsites.net/MadLib/BigSchleem/${madlib1}/${madlib2}/${madlib3}/${madlib4}/${madlib5}/${madlib6}/${madlib7}/${madlib8}/${madlib9}/${madlib10}`);
    const data = await promise.text();
    return data;
          
}

async function OddOrEven(num1){
    const promise = await fetch(`https://hbusbyallforone.azurewebsites.net/OddOrEven/BigTime/${num1}`);
    const data = await promise.text();
    return data;
          
}

async function ReverseIt(savedInput){
    const promise = await fetch(`https://hbusbyallforone.azurewebsites.net/ReverseIt/ReverseIt/${savedInput}`);
    const data = await promise.text();
    return data;
          
}

async function RestaurantPicker(menuInput){
    const promise = await fetch(`https://hbusbyallforone.azurewebsites.net/RestaurantPicker/Restaurant/${menuInput}`);
    const data = await promise.text();
    return data;
          
}

async function StudentDirectory(studentInput){
    const promise = await fetch(`https://hbusbyallforone.azurewebsites.net/StudentDirectory/GetStudentByFirstName/${studentInput}`);
    const data = await promise.text();
    return data;
          
}

async function StudentDirectory2(studentInput){
    const promise = await fetch(`https://hbusbyallforone.azurewebsites.net/StudentDirectory/GetStudentByLastName/${studentInput}`);
    const data = await promise.text();
    return data;
          
}

async function StudentDirectory3(studentInput){
    const promise = await fetch(`https://hbusbyallforone.azurewebsites.net/StudentDirectory/GetStudentBySlackName/${studentInput}`);
    const data = await promise.text();
    return data;
          
}

async function StudentDirectory4(studentInput){
    const promise = await fetch(`https://hbusbyallforone.azurewebsites.net/StudentDirectory/GetStudentByEmail/${studentInput}`);
    const data = await promise.text();
    return data;
          
}








export { SayHello, Add2Numbers, AskingQuestions, GreaterThanLessThan, madTime, OddOrEven, ReverseIt, RestaurantPicker, StudentDirectory, StudentDirectory2, StudentDirectory3, StudentDirectory4 };