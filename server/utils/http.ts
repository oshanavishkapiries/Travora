export const ok = (data: any, status = 200) => Response.json(data, { status });
export const fail = (error: string, status = 400, details?: any) =>
  Response.json({ error, details }, { status });
