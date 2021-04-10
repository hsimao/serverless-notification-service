async function sendMiail(event, context) {
  console.log(event);
  return event;
}

export const handler = sendMiail;
