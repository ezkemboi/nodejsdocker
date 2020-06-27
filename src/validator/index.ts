// Client -> send request to PORT -> 8000
// 8000 -> PORT 
import Joi from 'joi';

const schema = Joi.object().keys({
    email:  Joi.string().email().required(),
    password: Joi.string().regex(/^[a-Z0-9]{6-9}$/).required(),
    paymentMethod: Joi.string().valid('mpesa', 'jenga').required(),
})

export function validatePassword(
    email: string, 
    password: string, 
    paymentMethod: string) 
{
    const result = Joi.validate({ email, password, paymentMethod}, schema)
    console.log({ result })
    if(result.error) {
        console.log({ err: result.error })
        //return error as response back to the client
        return
    } 

    // if there is no error 
    // -> send to either the jenga or mpesa queue 


   // if not 3 
   // return 400 bad request
   // email -> 400
   // password -> jdd
   // enum -> mpesa, jenga
   // valida -> send them to our rabbit MQ queue. 
    // send mwenye unatumia
    // if paymmrtho = mpesa =
    ///channel.assertQueue(MPESA_QUEU);
    //   if (mode === "receive") {
    //     channel.consume(QUEUE, (msg) => {
    //       call(msg.content.toString());
    //     });
    //   }
}