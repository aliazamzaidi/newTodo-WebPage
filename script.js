function submitFunction(){
    // creating div
  var div1 = document.getElementById('div1'); 
  var div1Element = document.createElement('div');
  div1Element.setAttribute('class','div1Css');
//   div1Element.setAttribute('class','div1Extra'); // it is for extra css
  div1.appendChild(div1Element);

//   creating another p element than put this p in the div
//   in this portion we take value from input and then make a
//   p element and put that value in that p

  var div1Input = document.getElementById('input1').value;  //take value from input
  var div1Text = document.createTextNode(div1Input);    //creating text node
  var paraElement = document.createElement('p'); 
  div1Element.setAttribute('id','textDiv')   
  paraElement.appendChild(div1Text);    //put this text in p
  div1Element.appendChild(paraElement);  // put that p in div

// creating of remove button and append it with div that we have created
  var removeButton = document.createElement('button');
  var removeButtonText = document.createTextNode('X');
  removeButton.appendChild(removeButtonText);
  removeButton.setAttribute('id','removeBtn');
  removeButton.setAttribute('onclick','removeButtonFunction()')
  div1Element.appendChild(removeButton);

  // remove button function, it is inside becuase 
  // i need to call div1Element

}


function removeButtonFunction(){
      var textDivBox = document.getElementById('textDiv'); 
      textDivBox.parentNode.removeChild();    
  }