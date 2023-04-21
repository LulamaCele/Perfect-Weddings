
    let sendButton = document.getElementById("send-button");
    const form = document.getElementById("contact-form")

    .addEventListener('submit', function(e) {
        e.preventDefault();
        sendButton.value = 'Send...';
        const serviceID = 'default_service';
        const templateID = 'template_sjlra9q';

        
        emailjs.sendForm(serviceID, templateID, form)
         .then(() => {
           sendButton.value = 'Send Email';
           alert('Sent!');
         }, (err) => {
           sendButton.value = 'Send Email';
           alert(JSON.stringify(err));
         });
    });