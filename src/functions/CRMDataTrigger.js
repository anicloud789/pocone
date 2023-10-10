const { app } = require('@azure/functions');

app.serviceBusQueue('CRMDataTrigger', {
    connection: 'sbpocqueuedev_SERVICEBUS',
    queueName: 'sb-poc-q-dev',
    handler: (message, context) => {
        context.log('Service bus queue function processed message:', message);

        module.exports = require('./controllers/contactController');
    }
});
