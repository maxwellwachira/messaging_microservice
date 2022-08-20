import { basiciInfo } from "./basicInfo";
import { components } from "./components";
import { servers } from "./server";
import { messagePaths } from './messages'

export const swaggerOptions = {
    ...basiciInfo,
    ...servers,
    ...components,
    paths: {
        ...messagePaths
    }
};