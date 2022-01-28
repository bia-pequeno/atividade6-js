
let me = {
    nome: "Beatriz" ,
    idade: 17 ,
    altura:1.66
}


me.gênero ="feminino"

delete me.gênero

console.log(me)

let cadastro ={
    usuario:[
        {
            nome:"Caleb",
            idade: 20,
            telefone:99402-5253,
            amigos: ["Pietro" ,"Yago", "Ian", "Noah"]
        },
        {
            nome:"Ian",
            idade: 29,
            telefone:99329-4592,
            amigos: ["Pietro" ,"Yago", "Noah", "Caleb"]
        },
        {
            nome:"Yago",
            idade: 25,
            telefone:98689-8972,
            amigos: ["Pietro" ,"Noah", "Ian", "Caleb"]
        },
        {
            nome:"Pietro",
            idade: 32,
            telefone:98522-7813,
            amigos: ["Noah" ,"Yago", "Ian", "Caleb"]
        },
        {
            nome:"Noah",
            idade: 28,
            telefone:98339-6092,
            amigos: ["Pietro" ,"Yago", "Ian", "Caleb"]
        },
    ]}
console.log(cadastro.usuario[0].amigos[1])

console.log(cadastro.usuario[1].amigos[0])

console.log(cadastro.usuario[2].amigos[3])

console.log(cadastro.usuario[3].amigos[0])

console.log(cadastro.usuario[4].amigos[2])