"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cb = void 0;
const amqp = require("amqplib/callback_api");
exports.cb = (res) => res;
exports.default = (QUEUE, mode, call) => {
    amqp.connect("amqp://localhost", (connError, connection) => {
        if (connError) {
            throw connError;
        }
        connection.createChannel((channelError, channel) => {
            if (channelError) {
                throw channelError;
            }
            channel.assertQueue(QUEUE);
            if (mode === "receive") {
                channel.consume(QUEUE, (msg) => {
                    call(msg.content.toString());
                });
            }
            if (mode === "send") {
                channel.sendToQueue(QUEUE, Buffer.from("Hello from its coding time"));
                call("Message is sent");
            }
        });
    });
};
//# sourceMappingURL=rebitMq.js.map