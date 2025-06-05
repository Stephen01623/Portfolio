(function(){
      emailjs.init("v3T67Jrq_hYr_jA74"); // Palitan ng user ID mo mula sa EmailJS
   })();

   function sendEmail(event) {
      event.preventDefault();

      emailjs.sendForm('service_em32zlg', 'template_ezkznmd', event.target)
      .then(function() {
          alert('Message sent successfully!');
      }, function(error) {
          alert('Failed to send message: ' + JSON.stringify(error));
      });
   }