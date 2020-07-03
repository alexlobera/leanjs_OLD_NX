import React from 'react';
import S from '@sanity/desk-tool/structure-builder';

import TrainingTitle from '../components/TrainingTitle';

export default S.listItem()
  .title('Training')
  .schemaType('training')
  .child(
    S.documentTypeList('training')
      // .title("Training List")
      .child((documentId) =>
        S.document()
          .documentId(documentId)
          .schemaType('training')
          .title(<TrainingTitle documentId={documentId} />)
          .views([S.view.form()])
      )
  );
