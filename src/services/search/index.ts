import request from "@/services/axios";

export const search = async (endpoint: any, params: any) => {
  const { data }: { data: any } = await request.get("/search/" + endpoint, {
    params: { ...params },
  });
  return data;
};
