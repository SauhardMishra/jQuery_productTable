$(document).ready(function(){
    var products =[];

    $("#add_product").on("click", function(){          //Add product click function
           addProduct();                              //calling add product function
    });
                                                    

function addProduct(){

    var id = $("#product_id").val();
    var name =$("#product_name").val();
    var price =$("#product_price").val();
    var quantity =$("#product_quantity").val();

   

    if(isProductExist(id)){

        $(".error").css("display","block");
        $(".error").hide(2000);
        // removeNotification();
        
}    else {
    var product = {};
    product.id=id;
    product.name=name;
    product.price=price;
    product.quantity=quantity;

    products.push(product);

    $(".success").css("display","block");
    $(".success").hide(2000);

    // removeNotification();
}
   displayList();



 }                                                                            //End of add product function


function isProductExist(id){
    for (var i = 0; i < products.length; i++) {
        if (products[i].id==id) {
            return true;
        }
        
    }
       return false;
}                                                                          //End of isProductExist function

// function removeNotification(){                      //Remove notification function
//     $(".close").click(function () {        
    
//     $(this).closest("div").hide(1000);
//   }); 
// }                                                //End of Remove notification function
  






$("#product_list").on("click",".delProduct",function(){     //Remove table row function
    for(var i=0;i<products.length;i++){
        var rem = products[i].id;
        if(products[i].id==rem){
            confirm("Are you sure you want to delete this product?");
            console.log(rem);
            products.splice(i,1);
            // $($(this).parent()).parent().remove();
        }
     }                                                       
     
     displayList();
});                                                      //End of remove table row function


$("#product_list").on("click",".editProduct",function(){
    var edt = $(this).data("id");
    for(var i=0;i<products.length;i++){
        if (products[i].id==edt) {
             console.log(edt);   
            $("#product_id").val(products[i].id);
            $("#product_name").val(products[i].name);
            $("#product_price").val(products[i].price);
            $("#product_quantity").val(products[i].quantity);
        }

    }
    displayList();
});





function displayList(){                                   //Display List function

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
          <td><a href='#' class='delProduct'data-id='"+products[i].id+"'>Delete</a></td>\
          <td><a href='#' class='editProduct'data-id='"+products[i].id+"'>Edit</a></td>\
          </tr>";
      }    
      
     html+= "</table>";

     $("#product_list").html(html);


}                                                      //End of diplay list function
});
