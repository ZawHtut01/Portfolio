export class CommonResponse<Type> {
    success: boolean = false;
    message: string = "";
    data: Type | null = null;
}
