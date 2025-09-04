export const ok = (data: any, message = "Success", status = 200) =>
  Response.json({ status, message, data }, { status });

export const fail = (message: string, status = 400, data?: any) =>
  Response.json({ status, message, data }, { status });
