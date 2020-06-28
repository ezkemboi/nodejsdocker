import amqp = require("amqplib/callback_api");

export default (QUEUE: string, mode: string, data: any, call: any) => {
  // COnnect to amqp server
  amqp.connect("amqp://localhost", (connError, connection) => {
    if (connError) {
      throw connError;
    }
    // create a channel
    connection.createChannel((channelError, channel) => {
      if (channelError) {
        throw channelError;
      }
      // Add queue to the channel
      channel.assertQueue(QUEUE);

      if (mode === "receive") {
        // consume queue
        channel.consume(QUEUE, (msg) => {
          call(msg.content.toString());
        });
      }
      if (mode === "send") {
        // send to queue
        channel.sendToQueue(QUEUE, Buffer.from(data));
        call("Message is sent");
      }
    });
  });
};
