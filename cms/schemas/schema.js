import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

// We import object and document schemas
import blockContent from "./arrays/blockContent";
import tag from "./documents/tag";
import post from "./documents/post";
import person from "./documents/person";
import partner from "./documents/partner";
import faq from "./documents/faq";
import trainingPage from "./documents/trainingPage";
import video from "./documents/video";
import training from "./documents/training";
import job from "./objects/job";
import youtube from "./objects/youtube";
import faqPage from "./objects/faqPage";
import tweet from "./objects/tweet";
import codesanbox from "./objects/codesanbox";
import code from "./objects/code";
import richBulletPoints from "./arrays/richBulletPoints";
import richNoBulletPoints from "./arrays/richNoBulletPoints";
import tedvideo from "./objects/tedvideo";
import form from "./objects/form";
import formType from "./objects/formType";
//import upmentoringTraining from "../plugins/upmentoring-training";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    //upmentoringTraining,
    post,
    person,
    partner,
    tag,
    trainingPage,
    faq,
    training,
    video,
    job,
    youtube,
    tweet,
    codesanbox,
    code,
    faqPage,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    richBulletPoints,
    richNoBulletPoints,
    blockContent,
    tedvideo,
    form,
    formType
  ])
});
