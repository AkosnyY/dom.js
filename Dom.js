//I.1. Affichez une alerte avec le message de votre choix lorsque l'utilisateur clique sur un bouton
const monBouton = document.getElementById("monBouton")

monBouton.addEventListener('click', function () {

    //alert("yes vasy clique");
})



//2. Modifier le texte du paragraphe par : 'Je suis un paragraphe modifié' à la place de l'alerte (commentez la ligne avec l'alerte)
const p = document.getElementById('monParagraphe')
monBouton.addEventListener('click',function(){
// p.textContent = `Je suis un paragraphe modifié`
})

//II. 1. Modifiez le style du paragraphe lorsque l'utilisateur passe la souris dessus (la couleur et le font size)
p.addEventListener('mouseenter',function(){
    p.style.color =`blue `
    p.style.fontSize = `20px`
})

 //III. Ajoutez (créer) un nouvel élément HTML à la page lorsque l'utilisateur clique sur un bouton et l'ajouter en tant qu'element enfant de la liste et lui appliqué le texte : 'Nouvel élément'

 const ul  = document.getElementById("maListe"); 

 monBouton.addEventListener('click',function(){
    let li = document.createElement('li')
    li.textContent= `Nouvel élément`   
    ul.appendChild(li)
 })

