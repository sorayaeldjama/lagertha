import { ParameterType } from "@/enums/ParameterType.enum";
import { ParameterOutput } from "@/services/openapi";

const getParam = <T>(
    params: ParameterOutput[],
    paramName: ParameterType,
    defaultValue?: T): T | undefined => {
        const currentParam = params.find((param) => param.name === paramName)
        
        if (!currentParam && defaultValue) return defaultValue
        return currentParam?.value as T
}

export default getParam