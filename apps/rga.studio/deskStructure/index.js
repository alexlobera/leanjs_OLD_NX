import S from '@sanity/desk-tool/structure-builder';

import training from './training';
// import trainingPage from "./trainingPage";

// Hide document types that we already have a structure definition for
const hiddenDocTypes = (listItem) =>
  ![
    'training',
    // "trainingPage"
  ].includes(listItem.getId());

export default () =>
  S.list()
    .title('Content')
    .items([
      ...S.documentTypeListItems().filter(hiddenDocTypes),
      // trainingPage,
      training,
    ]);

// export const getDefaultDocumentNode = (props) => {
//   /**
//    * Here you can define fallback views for document types without
//    * a structure definition for the document node. If you want different
//    * fallbacks for different types, or document values (e.g. if there is a slug present)
//    * you can set up that logic in here too.
//    * https://www.sanity.io/docs/structure-builder-reference#getdefaultdocumentnode-97e44ce262c9
//    */
//   // const {schemaType} = props
//   return S.document().views([
//     S.view.form(),
//     S.view.component(JSONpreview).title("JSON"),
//   ]);
// };
