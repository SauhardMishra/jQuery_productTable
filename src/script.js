$(document).ready(function(){
    var products =[];

    $("#add_product").on("click", function(){          //Add click function
           addProduct();                              // calling submit data fundata function
    });
                                                     //End of click function.

function addProduct(){

    var id = $("#product_id").val();
    var name =$("#product_name").val();
    var price =$("#product_price").val();
    var quantity =$("#product_quantity").val();

   

    if(isProductExist(id)){

        $(".error").css("display","block");
        removeNotification();
        
}    else {
    var product = {};
    product.id=id;
    product.name=name;
    product.price=price;
    product.quantity=quantity;

    products.push(product);

    $(".success").css("display","block");

    removeNotification();
}
   displayList();

   $(".del").click(function(){
    for (var i=0; i<products.length;i++) {
        if(products[i].id==id){
            products.splice(i,1);
            console.log("working")
        }
        
    }
    displayList(); 
});

 }                                                                            //End of add product function


function isProductExist(id){
    for (var i = 0; i < products.length; i++) {
        if (products[i].id==id) {
            return true;
        }
        
    }
       return false;
}

function removeNotification(){                      //Remove notification function
    $(".close").click(function () {        
    
    $(this).closest("div").hide(1000);
  }); 
}
  

$("#product_list").on("click",".delProduct",function(){     //Remove table row function
     $($(this).parent()).parent().remove();
});





function displayList(){

    var html = "";

    html+= "<table>\
    <tr>\
        <th>ID</th>\
        <th>Name</th>\
        <th>Price</th>\
        <th>Quantity</th>\
        <th>Action</th>\
        <th>Action</th>\
        </tr>"

      for(i=0;i<products.length;i++){
          html += "<tr>\
          <td>"+products[i].id+"</td>\
          <td>"+products[i].name+"</td>\
          <td>"+products[i].price+"</td>\
          <td>"+products[i].quantity+"</td>\
          <td><a href='#' class='delProduct'>Delete</a></td>\
          <td><a href='#'>Edit</a></td>\
          </tr>";
      }    
      
     html+= "</table>";

     $("#product_list").html(html);


}                                                      //End of diplay list function
});
