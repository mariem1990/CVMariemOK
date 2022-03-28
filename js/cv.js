const acordeo=document.getElementsByClassName('caja');
for(i=0;i<acordeo.length; i++){
    acordeo[i].addEventListener('click', function(){
        this.classList.toggle('active');
    });
}
/*he optado por hacer un codigo sencillo, eficiente y corto. Con una sola funcion se puede desplegar todos y cadauno de los
aprentando en cada una de las cajas (div que contienen tal clase) se abre en una persiana con la funcion toggle.*/
