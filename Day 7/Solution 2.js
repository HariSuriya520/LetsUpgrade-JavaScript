 class User {
            constructor(name, age,email) {
              this.name = name;
              this.age = age;
              this.email = email;
              this.luCoins = 0;
              this.courses = [];
            }
        
            static greet(){
                console.log("Hello There");
            }
        
            login(){
                console.log(`${this.name} has logged in`);
                return this;
            }
            logout(){
                console.log(`${this.name} has logged out`);
                return this;
            }
            
            getDetails(){
                console.log(`Name is ${this.name}, email is ${this.email} , lucoins are ${this.luCoins} , Courses = ${this.courses}`);
                return this;
            }
        
        }
        
        class Moderator extends User{
            constructor(name,age,email,role){
                super(name,age,email);
                this.role = role;
            }
        
            deleteUser(user){
                users = users.filter(u =>{
                    return u.email != user.email; 
                })
            }
            addCoins(user){
                user.luCoins++;
                console.log(`${user.name} has ${user.luCoins} coins`);
                return this;
            }
            removeCoins(user){
                if(user.luCoins>0){
                user.luCoins--;
                console.log(`${user.name}  lucoins as decremented and he has ${user.luCoins} coins left`);}
                else{
                    console.log(`${user.name} has 0 lucoins.`);
                }
                return this;
            }
        
        }
        
        class Admin extends Moderator{
           addCourse(user,course){
               user.courses.push(course);
               console.log(user);
           }
           removeCourse(user,course){
            let index=user.courses.indexOf(course);
            user.courses.splice(index,1);
            console.log(`${user.name}, ${course} course is removed.`);
            console.log(user);
        }
        }
  
        let userXyz = new User('Xyz',20,'xyz@gmail.com')
        let userAbc = new User('Abc',22,'abc@gmai.com')
        let modShivam = new Moderator('Shivam',19,'shivam@gmail.com','Moderator');
        let adminRahul = new Admin('Rahul',18,'r@gmail.com');
        let users = [userXyz,userAbc,modShivam,adminRahul];
        
        userXyz.login();
        User.greet();

        modShivam.addCoins(userXyz);
        modShivam.addCoins(userXyz);
        adminRahul.addCourse(userXyz,"Python")
        adminRahul.addCourse(userXyz,"JavaScript")
        adminRahul.addCourse(userXyz,"R-Programming")
        modShivam.removeCoins(userXyz);
        adminRahul.removeCourse(userXyz,"JavaScript");

        userXyz.getDetails();
        userXyz.logout();

        userAbc.login();
        User.greet();

        modShivam.addCoins(userAbc);
        modShivam.addCoins(userAbc);
        modShivam.addCoins(userAbc);
        adminRahul.addCourse(userAbc,"C")
        adminRahul.addCourse(userAbc,"C++")
        adminRahul.addCourse(userAbc,"R-Programming")
        adminRahul.addCourse(userAbc,"Python")
        modShivam.removeCoins(userAbc);
        adminRahul.removeCourse(userAbc,"Python");

        userAbc.getDetails();
        userAbc.logout();
        modShivam.deleteUser(userAbc);
