const calcularMedia = function (nota1, nota2, nota3) {
      return (nota1 + nota2 + nota3) /3 
}
function notaFinal(mediaFinal) {
    console.log("A nota do aluno foi: " + mediaFinal.toFixed(2))
    if (mediaFinal>=7)
        console.log ("Aluno aprovado")
    else 
        console.log ("Aluno reprovado")
}
let mediaResultado = calcularMedia (2, 9, 10)
notaFinal (mediaResultado)
    
