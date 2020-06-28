const validMpesaRes = [
    {
        mpesaCode: 'NXQUIOAKSDII12JS',
        mpesaUser: 'kemboi',
        phoneNumber: '0722228902',
        success: true,
        amount: '5000',
        message: 'Successfully paid 5000 for rent'
    },
    {
        mpesaUser: 'Kebenei',
        phoneNumber: '0798862345',
        success: false,
        amount: '5000',
        message: 'Failed. Insufficient funds.'
    }
]

export default validMpesaRes;
