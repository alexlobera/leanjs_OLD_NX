import S from "@sanity/desk-tool/structure-builder";
import EyeIcon from "part:@sanity/base/eye-icon";

import SeoPreview from "../components/previews/seo";

export default S.listItem()
  .title("Training Page")
  .schemaType("trainingPage")
  .child(
    S.documentTypeList("trainingPage").child((documentId) =>
      S.document()
        .documentId(documentId)
        .schemaType("trainingPage")
        .views([
          S.view.form(),
          S.view
            .component(SeoPreview)
            // .options({ previewURL })
            .icon(EyeIcon)
            .title("SEO Preview"),
        ])
    )
  );
