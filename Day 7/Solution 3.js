let users=[];
async function fetchData(){
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json();
    users = data;
    //console.log(data);
}

fetchData();

function getUsers(){
    setTimeout(()=>{
        let result = [];
        users.forEach(user=>{
            if(user.completed){
                result.push(user);
            }
        });
        console.log(result);

        
        
    },1000);
}

function createUser(user){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            users.push(user);
            const error = false;

            if(!error){
                resolve();
            }
            else{
                reject("Oops an error occured");
            }

        }, 3000);
    })
}
createUser(users).then(getUsers).catch(error=>console.log(error));
