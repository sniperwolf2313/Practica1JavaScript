
/**
 * @param
 * @author Michael Cardenas, carlos Angel Gonzalez
 * @version 1.0.0
 */

 const UNIVERSIDADES = [
    {nit:5658,nombre:"Eafit",direccion:"Cra 49, Cl 7 sur # 50",telefono: 2619500},
    {nit:6329,nombre:"UdeM",direccion:"Cra 87 # 30-65",telefono: 5904500},
    {nit:8523,nombre:"Sena",direccion:"Cl 51 # 51-70",telefono: 5760000},
    {nit:7493,nombre:"UdeA",direccion:"Cl 67 # 53-108",telefono: 2198332},
    {nit:9614,nombre:"PolitecnicoMayor",direccion:"Cl 51 # 40-135",telefono: 4484227},
    {nit:0356,nombre:"UniSabaneta",direccion:"Calle 75 Sur # 34-120",telefono: 3011818},
    {nit:2006,nombre:"ITM",direccion:"Cra 65 # 98 a -75",telefono: 4600727}
]

 const ESTUDIANTES = [
    {id_estudiante:1,nombre:"Pablo Antonio",apellido:"Morales",edad:16,nit_universidad:5658,pago_matricula:6900000,semestre:5},
    {id_estudiante:2,nombre:"Carlos",apellido:"Valencia",edad:20,nit_universidad:2006,pago_matricula:6000000,semestre:2},
    {id_estudiante:3,nombre:"Maria Alejandra",apellido:"Durango",edad:17,nit_universidad:6329,pago_matricula:4500000,semestre:6},
    {id_estudiante:4,nombre:"Luis Alfonso",apellido:"Rivera",edad:26,nit_universidad:0356,pago_matricula:5500000,semestre:8},
    {id_estudiante:5,nombre:"Marcela",apellido:"Patiño",edad:18,nit_universidad:8523,pago_matricula:7000000,semestre:1},
    {id_estudiante:6,nombre:"Santiago",apellido:"Rosales",edad:19,nit_universidad:9614,pago_matricula:5500000,semestre:3},
    {id_estudiante:7,nombre:"Juan David",apellido:"Trujillo",edad:30,nit_universidad:7493,pago_matricula:6500000,semestre:10},
    {id_estudiante:8,nombre:"Mateo",apellido:"Serna",edad:18,nit_universidad:5658,pago_matricula:3500000,semestre:1},
    {id_estudiante:9,nombre:"Sara Sofia",apellido:"Rodriguez",edad:19,nit_universidad:6329,pago_matricula:7200000,semestre:1},
    {id_estudiante:10,nombre:"Armando",apellido:"Casas ",edad:17,nit_universidad:8523,pago_matricula:5500000,semestre:6},
    {id_estudiante:11,nombre:"Ramón",apellido:"Cardenas",edad:22,nit_universidad:8523,pago_matricula:7800000,semestre:2},
    {id_estudiante:12,nombre:"Camilo ",apellido:"Pulgarin",edad:29,nit_universidad:2006,pago_matricula:7850000,semestre:2},
    {id_estudiante:13,nombre:"Andres Camilo",apellido:"Watson",edad:15,nit_universidad:0356,pago_matricula:3300000,semestre:7},
    {id_estudiante:14,nombre:"Jhon",apellido:"Salazar",edad:18,nit_universidad:7493,pago_matricula:4900000,semestre:3},
    {id_estudiante:15,nombre:"Juan Pablo",apellido:"Acevedo",edad:27,nit_universidad:9614,pago_matricula:5300000,semestre:2},
    {id_estudiante:16,nombre:"Sara",apellido:"Puerta",edad:16,nit_universidad:0356,pago_matricula:8000000,semestre:5}
    
]
//====================================================================================================================================

//3. Funcion estudiantes con mayor valor de semestre

//==============================================================================================================
function MayorValorSemestre(){
    let mayor_matricula = 0
    const estudiantes_mayor_semestre = [4]
    for (let index = 0; index < ESTUDIANTES.length; index++) {
        const estudiante = ESTUDIANTES[index];
        
        if(estudiante.pago_matricula > mayor_matricula)
        {
            mayor_matricula = estudiante.pago_matricula 
            estudiantes_mayor_semestre.push(estudiante)
        }
    }
    console.log(estudiantes_mayor_semestre);

}
console.log("\n=================================================================================================");
MayorValorSemestre()
console.log("\n=================================================================================================");


//==============================================================================================================

//4. Funcion promedio de pago de semestre de cada universidad 

//==============================================================================================================
function PromedioSemestre(){
    let acum = 0
    let cont = 0
    for (let index = 0; index < UNIVERSIDADES.length; index++) {
        const universidad = UNIVERSIDADES[index];
        for (let index = 0; index < ESTUDIANTES.length; index++) {
            const estudiante = ESTUDIANTES[index];
            if(universidad.nit === estudiante.nit_universidad){
                acum =+ estudiante.pago_matricula
                cont ++
            }
        }
        let prom = acum / cont;
        console.log("\nEl promedio de la universidad ", universidad.nombre, " es: ", prom.toFixed(2));
        acum=0
        cont=0
    }
}

console.log("\n=================================================================================================");
PromedioSemestre()
console.log("\n=================================================================================================");

//==============================================================================================================

//.5 Funcion menores de edad cada universidad 

//==============================================================================================================

function MenorEdadUniversidad(){
    let menoresDeEdad = []
    for (let index = 0; index < UNIVERSIDADES.length; index++) {
        const universidad = UNIVERSIDADES[index];
        for (let index = 0; index < ESTUDIANTES.length; index++) {
            const estudiante = ESTUDIANTES[index];
            if(universidad.nit === estudiante.nit_universidad){
                if(estudiante.edad<18){
                    menoresDeEdad.push(estudiante.nombre)
                }
            }
        }
        console.log("\nlos menores de edad de la universidad ", universidad.nombre, " son: ", menoresDeEdad );
        menoresDeEdad = []
    }
}

console.log("\n=================================================================================================");
MenorEdadUniversidad()
console.log("\n=================================================================================================");
