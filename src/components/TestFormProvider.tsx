import { PropsWithChildren } from 'react';
import { FormProvider, useForm, useFormContext as _useFormContext } from 'react-hook-form';

export type IFields = {
  title: string
  description?: string
}

export const TestFormProvider = ({ children }: PropsWithChildren) => {
  const methods = useForm<IFields>({
    mode: 'onBlur'
  });

  return (
    <FormProvider {...methods}>
      {children}
    </FormProvider>
  );
};

export const useFormContext = _useFormContext<IFields>
