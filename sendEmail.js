var nodemailer = require('nodemailer');

let transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'rishabhmalhotra9211@gmail.com',
        pass: 'SyncMasterB1930'
    }
});

let mail = {
    from: 'rishabhmalhotra9211@gmail.com',
    to: 'rishabhmalhotra091@gmail.com',
    subject: 'Test Node js',
    text: 'Well its easier than java'
};

transport.sendMail(mail, (err, info)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(info);
    }
});