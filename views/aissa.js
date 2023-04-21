document.querySelector('button').onclick = () => {
    html2pdf()
    .from(`
        <p style="text-align:right"><span style="font-size:24px"><strong>الاسم: ${document.querySelectorAll('input')[0].value}</strong></span></p>

        <p style="text-align:right"><span style="font-size:24px"><strong>رقم الهاتف: ${document.querySelectorAll('input')[1].value}</strong></span></p>

        <p style="text-align:right"><span style="font-size:24px"><strong>العنوان: ${document.querySelectorAll('input')[2].value}</strong></span></p>

        <p style="text-align:right">&nbsp;</p>

        <p style="text-align:right"><span style="font-size:24px"><strong>.................................................................</strong></span><span style="font-size:24px"><strong>.</strong></span></p>

        <p style="text-align:right"><span style="font-size:24px"><strong>.........................................</strong></span></p>

        <p style="text-align:right"><span style="font-size:24px"><strong>..................................................................</strong></span></p>

        <p>&nbsp;</p>
    
    `)
    .save()
}
document.body.style.color="white"
