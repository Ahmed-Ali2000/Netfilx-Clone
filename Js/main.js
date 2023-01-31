$(document).ready(function() {

$(".toggle-accordion").on("click", function() {
    var accordionId = $(this).attr("accordion-id"),
    numPanelOpen = $(accordionId + ' .collapse.in').length;
    
    $(this).toggleClass("active");

    if (numPanelOpen == 0) {
    openAllPanels(accordionId);
    } else {
    closeAllPanels(accordionId);
    }
})
});



function good(){
    swal({
      title: "Are you sure to write true information?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        swal("", {
          icon: "success",
          title: "Thank you ",

        });
      } else {
        swal("Write agine");
      }
    });
}