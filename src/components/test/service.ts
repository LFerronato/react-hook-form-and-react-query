import { sleep } from "../../utils/sleep"
import { IFields } from "../TestFormProvider";

export const saveTrilhaService = async (data: IFields) => {
  if(!data.title) throw new Error('missing title')
  console.log('Chamando serviceBFF com valor:', data);
  await sleep(3000)
}
