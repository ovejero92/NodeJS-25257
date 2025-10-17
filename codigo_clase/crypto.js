import crypto from "crypto"

const BD = [];

class UserManager{
    getUsers = () => BD

    insertUser = user => {
        // salt es la semilla 
        user.salt = crypto.randomBytes(128).toString('base64')
        user.password = crypto.createHmac('sha256',user.salt).update(user.password).digest('hex')
        BD.push(user)
    }

    validateUser = (username,password) => {
        const user = BD.find(item => item.username === username)
        if(!user){
            console.log('User not found')
            return
        }
        const newHash = crypto.createHmac('sha256',user.salt).update(password).digest('hex')
        if (newHash == user.password) console.log('Logged!!!')
        else console.log('Invalid passowrd')
    }
}

const manager = new UserManager()
console.log(manager.getUsers()) // -> []
manager.insertUser({
    name: 'Gustavo',
    lastname:'Ovejero',
    username:'GusDev',
    password:'Tal3nt0T3ch'
})
console.log(manager.getUsers());

manager.validateUser('GusDev','Tal3nt0T3ch') // Invalid pasword
// manager.validateUser('GusDev','Tal3nt0T3ch') // Logged!
// manager.validateUser('otraCosa','Tal3nt0T3ch') // User not fond
