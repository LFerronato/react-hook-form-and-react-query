import { useDebounce } from '../../hooks/useDebounce';
import { useEffect, useState } from 'react';
import { saveTrilhaService } from './service';
import { useFormContext } from '../TestFormProvider';

function AnotherComponent() {
  const [isSaving, setIsSaving] = useState(false)
  const [savingFail, setSavingFail] = useState(false)
  const { watch, formState: { isSubmitting, isLoading, touchedFields, dirtyFields, errors }, setValue } = useFormContext();
  const fields = Object.keys(dirtyFields).length === 0 ? '' : watch()
  const debouncedValue = useDebounce(fields, 1500)

  useEffect(() => {
    if (!debouncedValue) return
    setIsSaving(true)
    saveTrilhaService(debouncedValue)
      .then(() => {
        savingFail && setSavingFail(false)
      })
      .catch(() => {
        setSavingFail(true)
      })
      .finally(() => setIsSaving(false))
  }, [debouncedValue]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <hr style={{ width: '100%' }} />
      <p>Valor do camp: {JSON.stringify(debouncedValue)}</p>
      <p style={{ height: '1.2rem', fontSize: '1.2rem', color: isSaving ? 'green' : 'white' }}>
        auto saving? {String(isSaving)} {isSaving && '☁️'}
        <span style={{ color: 'red' }}>{savingFail && '(falha ao salvar)'}</span>
      </p>
      {/* <p>{JSON.stringify({ isSubmitting, isLoading })}</p> */}
      <p>{JSON.stringify({ touchedFields })}</p>
      <p>{JSON.stringify({ dirtyFields })}</p>
      <p>{Object.keys(errors).length}: {String(errors?.title?.type)} - {String(errors?.description?.type)}</p>

      <button onClick={() => setValue('title', 'FERRONATO')} style={{ width: 'fit-content' }}>fill: FERRONATO</button>
    </div>
  );
}

export default AnotherComponent;
