function taskAsync(){
    return new Promise(function (res,rej) {
        setTimeout(function() {
            if(Math.random() < 0.5){
                res("Tarea asincronica completada.")
            } else {
                rej(new Error("Tarea asincornica fallida."))
            }
        },1000);
    });
}

async function main() {
    try{
        const res = await taskAsync();
        console.log(res);
    } catch(err) {
        console.log(err)
    } finally{
        console.log('final')
    }
}

const main = async () => {
     try{
        const res = await taskAsync();
        console.log(res);
    } catch(err) {
        console.log(err)
    } finally{
        console.log('final')
    }
}

main()