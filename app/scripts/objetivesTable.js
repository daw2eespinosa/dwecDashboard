/**
 * Created by eduardo on 11/02/16.
 */
$(document).ready(function() {
    $('a[data-toggle="tab"]').on( 'shown.bs.tab', function (e) {
        $.fn.dataTable.tables( {visible: true, api: true} ).columns.adjust();
    } );

    $('table.table').DataTable( {
        "ajax": {
            "url" : 'http://tomcat7-mycoachgate.rhcloud.com/rest/events/get/',
            "dataSrc" : ""
        },
        "columns": [
            {data: 'id'},
            {data: 'name'},
            {data: 'description'}
        ],

        scrollCollapse: false,
        fixedHeader:{
            header:false,
            footer:false
        },
        rowReorder: false,
        colReorder: false,
        //bFilter: false,
        bInfo: false,
        columnDefs: [{
            visible: false
        }],
        ordering: false,
        paging: false
    } );

    // Apply a search to the second table for the demo

    $('#myTable1').DataTable().search( '' ).draw();
    $('#myTable2').DataTable().search( 'prueba drag' ).draw();
} );