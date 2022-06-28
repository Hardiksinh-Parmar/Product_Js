$(document).ready(function() {

  addNewRow = function() {
    var row_count = my_table.rows.length;
    if (row_count<4){
      $("#tbody").append('<tr id="row"><td id="rowcell1"><select class="myselect" id="dropdwn" name="dropdown"><option  value="">Select an option</option><option value="Item-1">Item-1</option><option value="Item-2">Item-2</option><option value="Item-3">Item-3</option></select></td><td id="rowcell2"><button type="button" id="remove" class="remove" name="rembtn" onClick="deleteRow(this)">X</button></td></tr>')
    
  }
  }

  deleteRow = function(element) {
  var row_count = my_table.rows.length;
    if (row_count>2){
    $(element).parent().parent().remove();
  }}

});

$(document).ready(function() {


  var selectedList = [];

  Array.prototype.equals = function(array) 
  {

    if (!array)
      return false;

    if (this.length != array.length)
      return false;

      for (var i = 0, l = this.length; i < l; i++) {

      if (this[i] instanceof Array && array[i] instanceof Array) {

        if (!this[i].equals(array[i]))
          return false;

      } else if (this[i] != array[i]) {

        return false;

      }

    }

    return true;

  }

  function updateSelectedList() {

    selectedList = [];

    var selectedValue;

    $('.myselect').each(function() {

      selectedValue = $(this).find('option:selected').text();

      if (selectedValue != "" && $.inArray(selectedValue, selectedList) == "-1") {

        selectedList.push(selectedValue);

      }

    });

  }

  function disableAlreadySelected() {

    $('option').each(function() {

      if ($.inArray(this.value, selectedList) != "-1") {

        $(this).attr("disabled", true);

      } else {

        $(this).attr("disabled", false);

      }

    });
  }

  $('#my_table').on('click', '.myselect', function() {

    setTimeout(function() {

      updateSelectedList();

      disableAlreadySelected();

    }, 0);

  });

  $('#my_table #addbutton').on('click', disableAlreadySelected);
  
});
