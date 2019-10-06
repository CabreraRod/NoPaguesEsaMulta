$(document).ready(function() {
    //alert("cargado");
    $("#formulario").submit(function(event) {
        //alert("hola");
        event.preventDefault();


        //$('#fechaincidente').valueAsDate = new Date();;
        let nombre = $("#nombre").val();
        let dni = $("#dni").val();
        let departamento = $("#departamento").val();
        let domicilio = $("#domicilio").val();
        let numInfraccion = $("#numinfraccion").val();
        let lugarIncidente = $("#lugarincidente").val();
        let fechaIncidente = $("#fechaincidente").val();
        let marca = $("#marca").val();
        let modelo = $("#modelo").val();
        let colorVehiculo = $("#color").val();
        let dominio = $("#dominio").val();
        let descargo = $("#descargo").val();


       /* let data = {
            nombre: nombre,
            dni: dni,
            departamento: departamento,
            domicilio: domicilio,
            numInfraccion: numInfraccion,
            lugarIncidente: lugarIncidente,
            marca: marca,
            modelo: modelo,
            colorVehiculo: colorVehiculo,
            dominio: dominio,
            descargo: descargo
        }*/
        let today = new Date().toLocaleDateString();

        let docLegal = "<p style = 'float:right;'> Mendoza, " + today + " </p>";
        docLegal += "<p><strong> Municipalidad de  " + departamento + " </p> <p>Señor/a Juez de Tránsito</p><p>S__________/_____________D:</strong></p>";
        docLegal += "Yo, " + nombre + " , DNI N° " + dni + ", con domicilio real en " + domicilio + " , departamento: " + departamento + " , Provincia de Mendoza, titular del rodado: " + marca + " , dominio " + dominio + " , se presenta respetuosamente y dice:<br><br>" ;
        docLegal += "Que vengo en tiempo y forma a formular descargo en contra de infracción Nº " + numInfraccion + " de fecha " + fechaIncidente + ", por no ajustarse la misma ni a los hechos ni a derecho, todo conforme se expresa a continuación, solicitando por ello que la misma sea dejada sin efecto. <br><br>";
        docLegal += "Que habiendo sido notificado de la infracción, en mi domicilio, se ha violado el procedimiento impuesto por la Ley de Tránsito de la Provincia de Mendoza Nº 9.024 , en su artículo Art. 114° y que conlleva a su nulidad absoluta, al no cumplir con la obligación de constatar por el agente “..en el lugar del hecho, la que deberá contener como mínimo: 1. Número de Acta y Juzgado Administrativo Municipal interviniente, 2. Hora, día, mes y año, 3. Tipo de vehículo, dominio si correspondiese, 4. Modelo, marca y color, 5. Documento de Identidad o razón social del propietario, 6. Domicilio, departamento, departamento, provincia del propietario, 7. Documento de identidad del infractor, 9. Número de Licencia de conducir del infractor, categoría, vencimiento, procedencia, 10. Domicilio, departamento y provincia del infractor, 11. Lugar de la infracción, departamento y departamento, 12. Manifestación del infractor, 13. Tipo de falta, 14. Firma de testigo, D.N.I. y aclaración, 15. Firma del Infractor, si se hallare presente, o motivos por los que se niega a firmar, 16. Nombre, apellido, jerarquía, lugar en la que presta servicio y firma del funcionario interviniente, 17. El Acta se labrará en original y copia, y en caso de Actas de infracción que se labren por medios automáticos deberá identificarse el equipo o dispositivo utilizado, 18. Concluida el Acta el funcionario hará entrega de una copia de la misma al presunto infractor si está presente, a cualquier persona mayor de dieciocho años que se encuentre en el vehículo en caso que el supuesto infractor no se halle en el lugar, y en los casos en que no se encuentre persona alguna a quien entregar el Acta de contravención, la autoridad la introducirá en el vehículo o lo fijará en su exterior; quedando en todos los casos notificado en forma fehaciente de: a) Juez interviniente, b) opción de pago voluntario, previsto en el Art. 89°, c) opción del derecho de presentar un descargo y ofrecimiento de pruebas dentro los cinco días hábiles, en caso de no haber optado por el pago voluntario, 19. El actuante deberá entregar las Actas de infracción el mismo día en que se labran''.<br><br>";
        docLegal += "Esta omisión del agente de tránsito quita fuerza de convicción al acta y determinará la absolución a mi parte.<br><br> La falta de inmediatez en la entrega del acta de infracción infringe principios constitucionales que hacen a nuestro Estado de Derecho. El derecho constitucionales a la defensa, el derecho a ser oído durante el procedimiento, específicamente requerido por la normativa provincial constituyen la invalidez de este acto administrativo.<br><br> Tampoco el material fotográfico usado de prueba, goza de autenticidad para ser válido en mi contra. Al ser producido por una máquina que no tiene certificación para presumir la inalterabilidad de sus registros, no se encuentra homologado ni Autorizado por la Autoridad de Aplicación, tampoco se encuentra certificado que su funcionamiento sea el correcto y que se haya dispuesto su utilización mediante una legislación para dar legitimidad para este uso público. Ni fui inmediatamente en tiempo y lugar notificado de dicha fotografía.<br> También se me ha limitado el legítimo derecho de defensa por no haber constatado el agente de tránsito la existencia de causales legítimas para detener mi vehículo por caso fortuito o fuerza mayor por urgencia sucedida en el momento de la confección de la multa. Circunstancia que podría haber sido llevada a cabo por la autoridad de tránsito.<br> Se violó el procedimiento, y se me privó de recabar cualquier prueba, al no entregarme una copia de la infracción,introducida y/o fijada en el vehículo, circunstancia que me permitiría saber el motivo de la misma, su graduación, valor, términos de pago, y derechos para ejercer la defensa.<br> Además podemos considerar que se da por configurada una situación de abuso de derecho por parte del organismo ya que podríamos manifestar el fin únicamente recaudatorio de estas multas y no un fin de prevención de la siniestralidad vial. No hay prevención si se permite que se continúe la marcha en una supuesta infracción y no se realiza la detención vehicular.<br> Por último se deben tener en consideración los precedentes jurisprudenciales que han declarado la inconstitucionalidad de estas sanciones viales.<br> <p>Petitorio: </p> <p>Por lo anteriormente expuesto, SOLICITO: </p> <strong>1.  Se me tenga por presentado y domiciliado.<br>";
        docLegal += "2.  Se declare la nulidad del acta de infracción n°" + numInfraccion + " y se den por concluidas las actuaciones, comunicandoseme la resolución adoptada.<br> 3.  Hago reserva de acudir a la justicia ordinaria de así corresponder a fin de obtener la nulidad de lo decidido, solicitando daños y perjuicios correspondientes.</strong><br>";
        docLegal += "<br><p>Firma: </p><p>Aclaracion: </p><p>DNI: " + dni + " </p>";


        $("#documento").append(docLegal);

        printJS('documento', 'html');
        
        $("#documento").hide();

        $("#formulario")[0].reset();
    });
});