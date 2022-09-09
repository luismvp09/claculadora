 

  const btnNumeros = document.getElementsByName('data-number');
  const btnOpera = document.getElementsByName('data-opera');
  const btnIgual = document.getElementsByName('data-igual')[0];
  const btnDelete = document.getElementsByName('data-delete')[0];
  var resultado = document.getElementById('resultado');

  var opeActual = '';
  var OpeAnteriol = '';
  var operacion = undefined;

  btnNumeros.forEach(function name(boton) {
    boton.addEventListener('click', function name() {
        agregarNumero(boton.innerText);
      
    })
  });

  btnOpera.forEach(function name(boton) {
    boton.addEventListener('click', function name() {
       selectOperacion(boton.innerText);
    
    })
  });

  
    btnIgual.addEventListener('click', function name() {
        calcular();
        actualizarDisplay();
    });

    function selectOperacion(op) {
        if (opeActual === '') return;
        if (OpeAnteriol !== ''){
           
            calcular()
        }
        operacion = op.toString();
        OpeAnteriol = opeActual;
        opeActual = '';
    }

    function calcular(params) {
        var calculo;
        var anterior = parseFloat(opeActual);
        const actual = parseFloat(OpeAnteriol);
        if (isNaN(anterior) || isNaN(actual)) return;
        switch(operacion){
            case '+': calculo = anterior + actual;
            break
            case '-': calculo = anterior - actual;
            break
            case 'X': calculo = anterior * actual;
            break
            case '/': calculo = anterior / actual;
            break
              case '+': calculo = anterior + actual;
            break
            default: return;
        }
        opeActual = calculo;
        operacion = undefined;
        OpeAnteriol = '';
    }

    btnDelete.addEventListener('click', function name() {
        clear();
        actualizarDisplay();
    });


    function agregarNumero(num) {
        opeActual = opeActual.toString() + num.toString();
        actualizarDisplay();
    };

    function clear(params) {
        opeActual = '';
        OpeAnteriol = '';
        operacion = undefined;
    }


    function actualizarDisplay() {
        resultado.value = opeActual;
    }

  
    clear();



 

   

