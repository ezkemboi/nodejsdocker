import amqp = require("amqplib/callback_api");

export const cb = (res: any) => res;

export default (QUEUE: string, mode: string, call: any) => {
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
