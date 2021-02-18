import React, { CSSProperties } from 'react';

export const NotFound: React.VFC = () => {
  const style: CSSProperties = {
    textAlign: 'center'
  };
  return (
      <>
        <h4 style={ style }>Ссылка недействительна. Обратитесь к врачу по месту прописки.</h4>
      </>
  );
};