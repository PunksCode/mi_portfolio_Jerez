//Haz tú validación en javascript acá
document.addEventListener('DOMContentLoaded', function() {
    const generatePdfButton = document.getElementById('generatePdfButton');

    generatePdfButton.addEventListener('click', function() {
        let pdf = new jsPDF('p', 'pt', 'a4');
        pdf.html(document.body, {
            callback: function (pdf) {
                pdf.save('documentoPDF1.pdf');
            },
            x: 10,
            y: 10
        });
    });
});