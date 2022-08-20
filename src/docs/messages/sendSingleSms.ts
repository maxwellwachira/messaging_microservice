export const sendSingleSms = {
    post: {
        tags: ["Send SMS"], // operation's tag
        description: "Send SMS to one Recipient", // short desc
        operationId: "sendSingleSms", // unique operation id
        summary: "Send one SMS",
        parameters: [], // expected params
        requestBody: {
          // expected request body
          content: {
            // content-type
            "application/json": {
              schema: {
                $ref: "#/components/schemas/MessageInput", // message input data model
              },
            },
          },
        },
        // expected responses
        responses: {
          // response code
          201: {
            description: "success", // response desc
            content: {
              // content-type
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/SendSmsResponse",
                },
              },
            }
          },
          // response code
          500: {
            description: "Server error", // response desc
          },
        },
      },
};