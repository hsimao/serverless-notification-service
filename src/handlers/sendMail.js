import AWS from "aws-sdk";

const ses = new AWS.SES({ region: "eu-west-1" });

async function sendMiail(event, context) {
  const params = {
    Source: "e087754958@gmail.com",
    Destination: {
      ToAddresses: ["e087754958@gmail.com"]
    },
    Message: {
      Body: {
        Text: {
          Data: "Hello from Mars"
        }
      },
      Subject: {
        Data: "Test Mail"
      }
    }
  };

  try {
    const result = await ses.sendEmail(params).promise();
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }
}

export const handler = sendMiail;
