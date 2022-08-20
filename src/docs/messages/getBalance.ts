export const getBalance = {
    get: {
        tags: ["Balance"], // operation's tag.
        description: "Get Africa's Talking Balance", // operation's desc.
        operationId: "getBalance", // unique operation id.
        summary: "Get Balance",
        parameters: [], // expected params.
        // expected responses
        responses: {
          // response code
          200: {
            description: "Success", 
            content: {
              // content-type
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Balance",
                },
              },
            },
          },
          500: {
            description: "Server error", // response desc.
          },
        },
    },
};