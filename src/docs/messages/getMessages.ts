export const getMessages = {
    get: {
        tags: ["Get SMS"], // operation's tag.
        description: "Get SMS with pagination", // operation's desc.
        operationId: "getMessages", // unique operation id.
        summary: "Get SMS",
        parameters: [
            {
                name: "page", // name of param
                in: "query", // location of param
                schema: {
                  $ref: "#/components/schemas/Page", // id model
                },
                required: false, // mandatory
                description: "Page", // short desc.
            },
            {
                name: "limit", // name of param
                in: "query", // location of param
                schema: {
                  $ref: "#/components/schemas/Limit", // id model
                },
                required: false, // mandatory
                description: "Entries per page", // short desc.
            },
        ], 
        // expected responses
        responses: {
          // response code
          200: {
            description: "Success", 
            content: {
              // content-type
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Message",
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