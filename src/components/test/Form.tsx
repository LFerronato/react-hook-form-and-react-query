import { type FieldValues, type SubmitHandler } from "react-hook-form";

import { sleep } from "../../utils/sleep";
import { useFormContext } from "../TestFormProvider";

export const FormComponent = () => {
  console.log('[FormComponent]')
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useFormContext();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log('[onSubmit]')
    await sleep(3000)
    console.log(data)
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ border: '1px solid', padding: '1rem', display: 'inline-grid', gap: '4px' }}>
      <input placeholder="Titulo" {...register("title", { required: true })} />
      <input placeholder="Descrição" {...register("description", { required: false })} />
      {errors.title && <span>Este campo é obrigatório</span>}

      <button type="submit">Enviar{isSubmitting.valueOf()}</button>
    </form>
  );
}
