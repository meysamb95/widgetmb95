import { useEffect, useState } from "react";

export const useReadAsBase64 = (file?: File) => {
  if (!file) return [null, null];

  const [base64, setBase64] = useState<string | null>(null);
  const [error, setError] = useState<ProgressEvent<EventTarget>>();

  useEffect(() => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => setBase64(reader.result as string);
    reader.onerror = (error) => setError(error);
  }, [file]);

  return [base64, error];
};
