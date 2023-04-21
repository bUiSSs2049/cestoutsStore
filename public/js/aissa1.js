

var imgs = document.querySelectorAll('.imgs')
var files = document.querySelectorAll('.files')
for (let i = 0; i < imgs.length; i++) {
    
    imgs[i].onchange = () => {
        if (imgs[i].value != "") {
            files[i].innerText = imgs[i].value
        }
        imgs.forEach(img => {
            if (imgs[i].value == img.value) {
                
                files[i]
            }
        });
    }
}



//document.querySelectorAll('.files')
var isp=false
document.querySelector('#isp').onclick = () => {
    isp = !isp
    if (isp) {
        document.querySelector('.offline').className = "online"
        document.querySelector('#isp input').value = "false"
    }else {
        document.querySelector('.online').className = "offline"
        document.querySelector('#isp input').value = "true"
    }
}




var colorPalette = ['000000', 'FF9966', '6699FF', '99FF66', 'CC0000', '00CC00', '0000CC', '333333', '0066FF', 'FFFFFF'];
var forePalette = $('.fore-palette');
var backPalette = $('.back-palette');

for (var i = 0; i < colorPalette.length; i++) {
  forePalette.append('<a href="#" data-command="forecolor" data-value="' + '#' + colorPalette[i] + '" style="background-color:' + '#' + colorPalette[i] + ';" class="palette-item"></a>');
  backPalette.append('<a href="#" data-command="backcolor" data-value="' + '#' + colorPalette[i] + '" style="background-color:' + '#' + colorPalette[i] + ';" class="palette-item"></a>');
}

$('.toolbar a').click(function(e) {
  var command = $(this).data('command');
  if (command == 'h1' || command == 'h2' || command == 'p') {
    document.execCommand('formatBlock', false, command);
  }
  if (command == 'forecolor' || command == 'backcolor') {
    document.execCommand($(this).data('command'), false, $(this).data('value'));
  }
    if (command == 'createlink' || command == 'insertimage') {
  url = prompt('Enter the link here: ','http:\/\/'); document.execCommand($(this).data('command'), false, url);
  }
  else document.execCommand($(this).data('command'), false, null);
});
document.querySelector('#description').value = document.querySelector('#editor').innerHTML

onclick = ()=>{
    document.querySelector('#description').value = document.querySelector('#editor').innerHTML
    document.querySelector('#ratingTxt').value = document.querySelector('#rating').value
}


























document.querySelector('#add_color').onclick = ()=>{
    document.querySelector('.clrss').innerHTML += ''
    +'<label class="clr" id="'+ document.querySelector('#color').value +'">'
    +'<input type="color" style="display: none"></label>'
    var clrss = document.querySelectorAll('.clr')
    clrss.forEach(clr => {
        clr.style.background = clr.id
        clr.firstChild.value = clr.id
    });
}

<div class="size__">
        <div class="sz_nm">XL</div>
        <div class="sz_prc">10dh</div>
        <b class="edit">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#1eff00" class="bi bi-brush-fill" viewBox="0 0 16 16">
                <path d="M15.825.12a.5.5 0 0 1 .132.584c-1.53 3.43-4.743 8.17-7.095 10.64a6.067 6.067 0 0 1-2.373 1.534c-.018.227-.06.538-.16.868-.201.659-.667 1.479-1.708 1.74a8.118 8.118 0 0 1-3.078.132 3.659 3.659 0 0 1-.562-.135 1.382 1.382 0 0 1-.466-.247.714.714 0 0 1-.204-.288.622.622 0 0 1 .004-.443c.095-.245.316-.38.461-.452.394-.197.625-.453.867-.826.095-.144.184-.297.287-.472l.117-.198c.151-.255.326-.54.546-.848.528-.739 1.201-.925 1.746-.896.126.007.243.025.348.048.062-.172.142-.38.238-.608.261-.619.658-1.419 1.187-2.069 2.176-2.67 6.18-6.206 9.117-8.104a.5.5 0 0 1 .596.04z"/>
            </svg>
        </b>
    </div>