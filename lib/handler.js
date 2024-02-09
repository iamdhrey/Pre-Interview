exports.main = async function(event, context) {
    return {
        statusCode: 200,
        body: JSON.stringify(`Hello BMO, I Would love to be on your team and\n
        Also reading from ${process.env.TABLE_NAME}`)
    }
}
