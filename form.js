document.addEventListener("DOMContentLoaded", function() {
    emailjs.init('PUBLIC_KEY'); // Substitua 'PUBLIC_KEY' pelo seu User ID do EmailJS

    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        
        const serviceID = 'SERVICE_ID'; // Substitua 'YOUR_SERVICE_ID' pelo seu Service ID do EmailJS
        const templateID = 'TEMPLATE_ID'; // Substitua 'YOUR_TEMPLATE_ID' pelo seu Template ID do EmailJS

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                alert('Email enviado com sucesso!');
            }, (error) => {
                alert('Falha ao enviar o email: ' + JSON.stringify(error));
            });
    });
});
