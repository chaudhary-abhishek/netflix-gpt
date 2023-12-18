export const validateData = (email, password, name)=>{
    const validateName = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);
    const validateEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const validatePassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    

    if(!validateEmail) return "Email is not valid";
    if(!validatePassword) return "Password is not valid";
    if(!validateName) return "Name is not valid";
    
    return null;
}