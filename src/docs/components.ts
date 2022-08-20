export const components = {
    components: {
        schemas: {
          // Page model
          Page: {
            type:"number",
            description: "Page Number", 
            example: 2         
          },
           // Page model
         Limit: {
            type:"number",
            description: "Entries per page", 
            example: 10         
          },
          //Message Model
          Message: {
            type: "object", 
            properties: {
                totalMessages: {
                    type:"number",
                    description: "Total message count", 
                    example: 69        
                },
                totalPages: {
                    type:"number",
                    example: 12 
                },
                currentPage: {
                    type: "string",
                    example: "2"
                },
                messages: {
                    type: "object",
                    properties: {
                        id: {
                            type: "string"
                        },
                        topic: {
                            type: "string"
                        },
                        message: {
                            type: "string"
                        },
                        recipientNUmber: {
                            type: "string"
                        },
                        createdAT: {
                            type: "string"
                        }
                    }
                }
            },
          },
          //MessageInput Model
          MessageInput: {
            type: "object", 
            properties: {
                to: {
                    type: "array",
                    example: ["+254703519593"]
                },
                message: {
                    type: "string",
                    example: "Hi Max"
                },
                topic: {
                    type: "string",
                    example: "Greetings"
                }
            },
          },

          //SendSmsResponse Model
          SendSmsResponse: {
            type: "object", 
            properties: {
                message: {
                    type: "string",  
                },
                recipients: {
                    type: "object",
                    properties: {
                        statusCode: {
                            type: "string"
                        },
                        number: {
                            type: "string"
                        },
                        cost: {
                            type: "string"
                        },
                        status: {
                            type: "string"
                        },
                        messageId: {
                            type: "string"
                        }
                    }
                }
            },
          },

          //Balance Model
          Balance: {
            type: "object", 
            properties: { 
                balance: {
                    type: "string"
                }
            }
          },

          // error model
          GeneralError: {
            type: "object",
            properties: {
              code: {
                type: "integer",
                format: "int32"
              },
              message: {
                type: "string"
              }
            }
          }
        },
      },
}