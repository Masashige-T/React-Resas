const endPoint = "https://opendata.resas-portal.go.jp/api/v1/prefectures";

export const getPrefectureApi = async () => {
  const res = await fetch(endPoint, {
    headers: {
      "X-API-KEY": process.env.REACT_APP_RESAS_API_KEY
    },
  })
  const json = await res.json()
  if (!res.ok) throw new Error(json.message);
  return json.result
}