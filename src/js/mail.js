

function sendMail() {

    const mailmessage = document.getElementById("mailmessage")

    const options = {
    method: 'POST',
    headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'api-key': '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'
    },
    body: JSON.stringify({
    sender: {name: 'Denny', email: 'denny_menter@yahoo.como'},
    to: [{email: 'dennymenter@gmail.com', name: 'Denny'}],
    // bcc: [{email: 'helen9766@example.com', name: 'Helen'}],
    // cc: [{email: 'ann6533@example.com', name: 'Ann'}],
    htmlContent: '<!DOCTYPE html> <html> <body> <h1>Test mail</h1> <p>This is just a test email. Ignore.</p> </body> </html>',
    textContent: 'Please confirm your email address by clicking on the link https://text.domain.com',
    subject: 'Login Email confirmation',
    replyTo: {email: 'ann6533@example.com', name: 'Ann'},
    headers: {
    'sender.ip': '1.2.3.4',
    'X-Mailin-custom': 'some_custom_header',
    //   idempotencyKey: 'abc-123'
    },
    // templateId: 2,
    // params: {FNAME: 'Joe', LNAME: 'Doe'},
    // messageVersions: [
    //   {
    //     to: [{email: 'jimmy98@example.com', name: 'Jimmy'}],
    //     params: {FNAME: 'Joe', LNAME: 'Doe'},
    //     bcc: [{email: 'helen9766@example.com', name: 'Helen'}],
    //     cc: [{email: 'ann6533@example.com', name: 'Ann'}],
    //     replyTo: {email: 'ann6533@example.com', name: 'Ann'},
    //     subject: 'Login Email confirmation'
    //   }
    // ],
    // tags: ['tag1'],
    // scheduledAt: '2022-04-05T12:30:00+02:00',
    batchId: '5c6cfa04-eed9-42c2-8b5c-6d470d978e9d'
    })
    };

    fetch('https://api.sendinblue.com/v3/smtp/email', options)
    .then(response => response.json())
    .then(response => {
        console.log(response)
            mailmessage.innerText = "Mail sent!";
        }
        )
    .catch(err => {
        console.error(err);
        mailmessage.innerText = "Mail failed to send!";
    })
    }
