
let tiempoDia = new Map(
    [
        ['Cielos despejados', '/../dom.png'],
        ['Cielos nubosos', '/../dia-nublado.png'],
        ['Cielos cubiertos con lluvias débiles', './../../public/assets/lluvia debil.svg'],
        ['Intervalos nubosos', '/../dia-nublado.png'],
        ['Cielos nubosos con lluvias débiles', './../../public/assets/lluvia debil.svg'],
        ['Cielos cubiertos', './../../public/assets/nubes.png'],
        ['Cielos cubiertos con lluvias moderadas', './../../public/assets/lluvia debil.svg'],
        ['Cielos nubosos con lluvias moderadas', './../../public/assets/lluvia debil.svg']
    ]
) 

let tiempoNoche = new Map(
    [
        ['Cielos despejados', '/../luna.png'],
        ['Cielos nubosos', '/../noche-nublada.png'],
        ['Intervalos nubosos', '/../noche-nublada.png'],
        ['Cielos Cubiertos', './../../public/assets/nubes.png'],
        ['Cielos nubosos con lluvias débiles', './../../public/assets/lluvia debil.svg'],
        ['Cielos cubiertos', './../../public/assets/nubes.png'],
        ['Cielos cubiertos con lluvias moderadas', './../../public/assets/lluvia debil.svg'],
        ['Cielos nubosos con lluvias moderadas', './../../public/assets/lluvia debil.svg']
    ]
) 

let horas = new Map(
    [
        ['dia', tiempoDia],
        ['noche', tiempoNoche],
    ]
)



export const getWheatherImg = (horario, tm) => {
    
   return horas.get(horario).get(tm)

}
